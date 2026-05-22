import { env } from '../env';

interface BackendEnvelope<T> {
  success: boolean;
  data?: T;
  error?: { code: string; message: string };
  meta?: { requestId?: string };
}

export interface BackendError extends Error {
  status: number;
  code: string;
}

function toBackendError(status: number, code: string, message: string): BackendError {
  const err = new Error(message) as BackendError;
  err.status = status;
  err.code = code;
  return err;
}

interface ServerFetchOptions extends Omit<RequestInit, 'body'> {
  body?: unknown;
}

export async function serverFetch<T = unknown>(
  path: string,
  options: ServerFetchOptions = {},
): Promise<T> {
  const { body, headers, ...rest } = options;

  const reqHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };

  const res = await fetch(`${env.BACKEND_API_URL}/v1${path}`, {
    next: { revalidate: 3600 },
    ...rest,
    headers: reqHeaders,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  const envelope = (await res.json().catch(() => null)) as BackendEnvelope<T> | null;

  if (!res.ok || !envelope?.success) {
    throw toBackendError(
      res.status,
      envelope?.error?.code ?? 'UNKNOWN',
      envelope?.error?.message ?? `Request failed (${res.status})`,
    );
  }

  return envelope.data as T;
}

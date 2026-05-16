import { NextResponse } from 'next/server';

// Add the Play App Signing SHA-256 here too once published (Play Console → App integrity).
const ANDROID_SHA256_FINGERPRINTS = [
  '51:0A:CF:6C:92:DA:0C:3B:44:74:C1:68:95:D7:BA:2A:6B:60:B2:AD:6A:C9:E3:CD:49:3E:B7:C6:54:F5:2C:3E',
];

export function GET() {
  return NextResponse.json([
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: 'fyi.forsure',
        sha256_cert_fingerprints: ANDROID_SHA256_FINGERPRINTS,
      },
    },
  ]);
}

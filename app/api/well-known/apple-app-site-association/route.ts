import { NextResponse } from 'next/server';

const APPLE_TEAM_ID = 'Q47JK367YP';
const BUNDLE_ID = 'fyi.forsure';

export function GET() {
  return NextResponse.json({
    applinks: {
      details: [
        {
          appIDs: [`${APPLE_TEAM_ID}.${BUNDLE_ID}`],
          components: [{ '/': '*', comment: 'Open every forsure.fyi link in the app' }],
        },
      ],
    },
  });
}

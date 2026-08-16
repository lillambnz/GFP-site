import { NextRequest, NextResponse } from 'next/server'

const PIXEL_ID = '283918179138372'

export async function POST(request: NextRequest) {
  const accessToken = process.env.META_PIXEL_ACCESS_TOKEN
  if (!accessToken) {
    // Fail silently so missing env var doesn't surface as a client error
    return NextResponse.json({ ok: false, reason: 'not configured' }, { status: 200 })
  }

  const { eventName, eventId, eventSourceUrl, customData } = await request.json()
  if (!eventName || !eventId) {
    return NextResponse.json({ error: 'Missing eventName or eventId' }, { status: 400 })
  }

  const clientIp =
    (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    ''
  const userAgent = request.headers.get('user-agent') ?? ''

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${accessToken}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: [
          {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: eventSourceUrl,
            action_source: 'website',
            ...(customData && typeof customData === 'object' ? { custom_data: customData } : {}),
            user_data: {
              client_ip_address: clientIp,
              client_user_agent: userAgent,
            },
          },
        ],
      }),
    }
  )

  const body = await res.json()
  return NextResponse.json(body, { status: res.ok ? 200 : 400 })
}

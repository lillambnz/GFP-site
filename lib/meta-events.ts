'use client'

export function trackPixelEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.fbq) return

  const eventId = crypto.randomUUID()

  window.fbq('track', eventName, params ?? {}, { eventID: eventId })

  // Mirror to CAPI for deduplication — fire-and-forget
  fetch('/api/meta-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName,
      eventId,
      eventSourceUrl: window.location.href,
      customData: params ?? {},
    }),
  }).catch(() => {})
}

// Meta applies health-category data-sharing restrictions to this pixel, which
// suppresses the Schedule and Contact standard events. Booking and call clicks
// are therefore reported as Lead, distinguished by content_category.
export function trackBookingClick(contentName?: string) {
  trackPixelEvent('Lead', {
    content_category: 'booking',
    ...(contentName ? { content_name: contentName } : {}),
  })
}

export function trackCallClick(contentName?: string) {
  trackPixelEvent('Lead', {
    content_category: 'phone_call',
    ...(contentName ? { content_name: contentName } : {}),
  })
}

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

// Meta applies health-category data-sharing restrictions to this pixel: the
// conversion-style standard events (Lead, Schedule, Contact, ...) are
// suppressed and only a short allowlist of parameters survives (content_ids,
// content_type, value, ...). Booking and call clicks are therefore reported
// as ViewContent, with content_type distinguishing the action and content_ids
// carrying the doctor slug (or "clinic" for general booking links). In Ads
// Manager, build a custom conversion on ViewContent + content_type=booking.
export function trackBookingClick(doctorSlug?: string) {
  trackPixelEvent('ViewContent', {
    content_type: 'booking',
    content_ids: [doctorSlug ?? 'clinic'],
  })
}

export function trackCallClick(doctorSlug?: string) {
  trackPixelEvent('ViewContent', {
    content_type: 'phone_call',
    content_ids: [doctorSlug ?? 'clinic'],
  })
}

export function trackContactFormSubmit() {
  trackPixelEvent('ViewContent', {
    content_type: 'contact_form',
    content_ids: ['clinic'],
  })
}

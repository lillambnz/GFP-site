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
// value, currency, ...; content_type must be "product"). Booking and call
// clicks are therefore reported as ViewContent with a single content_id of
// the form "<action>:<doctor slug|clinic>". In Ads Manager, build a custom
// conversion on ViewContent where content_ids contains "booking:".
type ClickAction = 'booking' | 'phone_call' | 'contact_form'

function trackClick(action: ClickAction, doctorSlug?: string) {
  trackPixelEvent('ViewContent', {
    content_ids: [`${action}:${doctorSlug ?? 'clinic'}`],
  })
}

export function trackBookingClick(doctorSlug?: string) {
  trackClick('booking', doctorSlug)
}

export function trackCallClick(doctorSlug?: string) {
  trackClick('phone_call', doctorSlug)
}

export function trackContactFormSubmit() {
  trackClick('contact_form')
}

'use client'

import Link from 'next/link'
import type { ComponentPropsWithoutRef, MouseEvent } from 'react'
import { trackBookingClick } from '@/lib/meta-events'

type BookingLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  /** Doctor slug for pixel attribution; omitted = general clinic booking. */
  doctorSlug?: string
}

/** next/link that reports a booking click to the Meta pixel. Safe to use from server components. */
export function BookingLink({ doctorSlug, onClick, ...rest }: BookingLinkProps) {
  return (
    <Link
      {...rest}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        trackBookingClick(doctorSlug)
        onClick?.(e)
      }}
    />
  )
}

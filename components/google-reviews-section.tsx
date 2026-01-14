"use client"

import { Star, ExternalLink } from "lucide-react"
import { googleReviews, googleBusinessInfo } from "@/lib/data/google-reviews"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

export function GoogleReviewsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header with Google Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
            <GoogleIcon className="w-8 h-8" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gray-900">{googleBusinessInfo.rating}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(googleBusinessInfo.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="text-gray-600 text-sm">{googleBusinessInfo.totalReviews}+ reviews</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to maintain a {googleBusinessInfo.rating}-star rating on Google. Here's what our patients have to say about their experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {googleReviews.slice(0, 6).map((review, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00b1c3] to-[#009aaa] flex items-center justify-center text-white font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    {review.date && (
                      <p className="text-xs text-gray-500">{review.date}</p>
                    )}
                  </div>
                </div>
                <GoogleIcon className="w-5 h-5 opacity-60" />
              </div>

              <StarRating rating={review.rating} />

              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={googleBusinessInfo.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00b1c3] hover:bg-[#009aaa] text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <GoogleIcon className="w-5 h-5" />
            Read All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Star, ExternalLink } from "lucide-react"
import { googleReviews, googleBusinessInfo } from "@/lib/data/google-reviews"
import { SectionHeading } from "./section-heading"
import { StaggerContainer, StaggerItem } from "./reveal"
import { useState, useEffect } from "react"

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
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function FeaturedCard({ review }: { review: (typeof googleReviews)[number] }) {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-card border-l-4 border-l-brand-teal hover:shadow-card-hover transition-shadow cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center text-white font-semibold text-lg">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-foreground text-lg">{review.name}</p>
            {review.date && <p className="text-xs text-muted-foreground">{review.date}</p>}
          </div>
        </div>
        <GoogleIcon className="w-5 h-5 opacity-40" />
      </div>
      <StarRating rating={review.rating} />
      <p className="mt-4 text-foreground/80 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      {review.url && (
        <p className="mt-3 text-xs text-brand-teal group-hover:underline">View original review on Google →</p>
      )}
    </div>
  )
}

export function GoogleReviewsSection() {
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setFeaturedIndex(i => (i + 1) % googleReviews.length)
        setVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const featuredReview = googleReviews[featuredIndex]

  return (
    <section className="py-16 md:py-24 bg-surface-sunken bg-dot-pattern">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-5 py-2.5 shadow-card mb-6">
            <GoogleIcon className="w-6 h-6" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">{googleBusinessInfo.rating}</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(googleBusinessInfo.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <span className="text-muted-foreground text-sm">{googleBusinessInfo.totalReviews}+ reviews</span>
          </div>

          <SectionHeading
            eyebrow="Patient Reviews"
            title="What Our Patients Say"
            subtitle={`We're proud to maintain a ${googleBusinessInfo.rating}-star rating on Google. Here's what our patients have to say about their experience.`}
          />
        </div>

        {/* Featured Review — auto-rotates every 5s */}
        <div
          className="mb-8 max-w-3xl mx-auto transition-opacity duration-400"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {featuredReview.url ? (
            <a href={featuredReview.url} target="_blank" rel="noopener noreferrer" className="block group">
              <FeaturedCard review={featuredReview} />
            </a>
          ) : (
            <FeaturedCard review={featuredReview} />
          )}
        </div>

        {/* Reviews Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {googleReviews.filter((_, i) => i !== featuredIndex).slice(0, 6).map((review, index) => (
            <StaggerItem key={index}>
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center text-white font-semibold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      {review.date && <p className="text-[11px] text-muted-foreground">{review.date}</p>}
                    </div>
                  </div>
                  <GoogleIcon className="w-4 h-4 opacity-30" />
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-3 text-foreground/70 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <div className="text-center">
          <a
            href={googleBusinessInfo.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-dark text-white font-medium px-7 py-3 rounded-full transition-colors shadow-card hover:shadow-card-hover text-sm"
          >
            <GoogleIcon className="w-4 h-4" />
            Read All Reviews on Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

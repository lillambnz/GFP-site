import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog-posts"
import { notFound } from "next/navigation"
import { Calendar, User, Clock, Tag } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'
import { BOOK_PATH } from "@/lib/booking"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) return {}

  return {
    title: `${post.title} | Gosnells Family Practice Blog`,
    description: post.excerpt,
    keywords: [...post.tags, 'Gosnells', 'health tips', 'medical advice', 'Perth'],
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://gosnellsfamilypractice.com.au/blog/${slug}`
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://gosnellsfamilypractice.com.au/blog/${slug}`,
      siteName: 'Gosnells Family Practice',
      locale: 'en_AU',
      images: post.image ? [{
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title
      }] : []
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-16 pt-48">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-block bg-card shadow-card px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </div>
            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <article className="py-16 bg-glow-tl">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-card shadow-card rounded-2xl p-8 md:p-12 mb-8 border border-border">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground font-semibold mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="bg-card shadow-card rounded-2xl p-6 mb-8 border border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-5 h-5 text-brand-teal" />
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="bg-brand-teal-light/50 rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">About the Author</h3>
              <p className="text-muted-foreground">
                {post.author} is part of our experienced medical team at Gosnells Family Practice,
                dedicated to providing quality healthcare and health education to our community.
              </p>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-brand-teal text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions About Your Health?</h2>
            <p className="text-lg mb-8">
              Book an appointment with one of our experienced doctors
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={BOOK_PATH}
                className="bg-white text-brand-teal hover:bg-gray-50 font-semibold px-8 py-3 rounded-full shadow-lg shadow-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
              >
                Book Appointment
              </a>
              <Link href="/blog" className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-slate-900/30 hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

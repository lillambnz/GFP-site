import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog-posts"
import { notFound } from "next/navigation"
import { Calendar, User, Clock, Tag } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
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
        <section className="relative bg-gradient-to-r from-[#0a2540] to-[#00b1c3] text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-8 border border-[#00b1c3]/20">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-[#0a2540] font-semibold mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-[#425466] leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-[#00b1c3]/20">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-5 h-5 text-[#00b1c3]" />
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-[#00b1c3]/10 text-[#00b1c3] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="bg-gradient-to-r from-[#00b1c3]/10 to-[#4a4b75]/10 rounded-2xl p-6 border border-[#00b1c3]/20">
              <h3 className="text-lg font-bold text-[#0a2540] mb-2">About the Author</h3>
              <p className="text-[#425466]">
                {post.author} is part of our experienced medical team at Gosnells Family Practice,
                dedicated to providing quality healthcare and health education to our community.
              </p>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#00b1c3] to-[#009bb0] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions About Your Health?</h2>
            <p className="text-lg mb-8">
              Book an appointment with one of our experienced doctors
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.hotdoc.com.au/medical-centres/gosnells-WA-6110/gosnells-family-practice/doctors"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00b1c3] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition inline-block"
              >
                Book Appointment
              </a>
              <Link href="/blog" className="bg-[#0a2540] hover:bg-[#0a2540]/90 text-white font-semibold px-8 py-3 rounded-full transition inline-block">
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

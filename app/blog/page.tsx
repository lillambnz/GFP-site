"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { blogPosts, blogCategories } from "@/lib/data/blog-posts"
import Link from "next/link"
import { Calendar, User, Clock } from "lucide-react"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0a2540] to-[#00b1c3] text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Health Blog & News</h1>
            <p className="text-xl max-w-3xl">
              Expert health advice, practice updates, and medical information from our team of doctors
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white/10 sticky top-[73px] z-40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[#00b1c3] text-white shadow-lg'
                      : 'bg-white/20 backdrop-blur-md text-[#0a2540] hover:bg-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer group border border-[#00b1c3]/10"
                >
                  <div className="aspect-video bg-gradient-to-br from-[#00b1c3]/20 to-[#4a4b75]/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-[#00b1c3] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-[#0a2540] font-semibold">Blog Post</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block bg-[#00b1c3]/10 text-[#00b1c3] px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#425466] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a2540] mb-3 group-hover:text-[#00b1c3] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#425466] mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#425466] pt-4 border-t border-[#00b1c3]/20">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

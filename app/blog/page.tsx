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
        <section className="relative bg-slate-900 text-white py-16 pt-48">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Health Blog & News</h1>
            <p className="text-xl max-w-3xl">
              Expert health advice, practice updates, and medical information from our team of doctors
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-surface-sunken sticky top-[73px] z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-brand-teal text-white shadow-lg'
                      : 'bg-card shadow-card text-foreground hover:bg-card'
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
                  className="bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 cursor-pointer group border border-border"
                >
                  <div className="aspect-video bg-brand-teal-light flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-foreground font-semibold">Blog Post</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block bg-brand-teal-light text-brand-teal px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
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

import { MetadataRoute } from 'next'
import { services } from '@/lib/data/services'
import { blogPosts } from '@/lib/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gosnellsfamilypractice.com.au'
  const lastModified = new Date()

  // Static pages with priority and change frequency
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const, lastModified },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' as const, lastModified },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified },
    { url: `${baseUrl}/team`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: 'weekly' as const, lastModified },
    { url: `${baseUrl}/faqs`, priority: 0.6, changeFrequency: 'monthly' as const, lastModified },
    { url: `${baseUrl}/after-hours`, priority: 0.7, changeFrequency: 'monthly' as const, lastModified },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const, lastModified },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' as const, lastModified },
    { url: `${baseUrl}/disclaimer`, priority: 0.3, changeFrequency: 'yearly' as const, lastModified },
  ]

  // Service pages - high priority for medical services
  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    priority: 0.9,
    changeFrequency: 'monthly' as const
  }))

  // Blog posts - content marketing pages
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
    changeFrequency: 'yearly' as const
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}

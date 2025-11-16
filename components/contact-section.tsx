"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, Mail } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-br from-purple-light/50 via-background to-primary/5 border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact & Hours</h2>
              <p className="text-lg text-muted-foreground">Get in touch with us or visit our clinic</p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-light/60 border border-purple-accent/50">
                    <Phone className="h-6 w-6 text-purple-accent" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">(08) 6118 2788</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-light/60 border border-purple-accent/50">
                    <MapPin className="h-6 w-6 text-purple-accent" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Gosnells, Perth, WA</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-light/60 border border-purple-accent/50">
                    <Clock className="h-6 w-6 text-purple-accent" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Hours</p>
                  <p className="text-muted-foreground">7 Days a Week</p>
                  <p className="text-muted-foreground text-sm">Monday - Friday: 8am - 6pm</p>
                  <p className="text-muted-foreground text-sm">Saturday - Sunday: 9am - 2pm</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-light/60 border border-purple-accent/50">
                    <Mail className="h-6 w-6 text-purple-accent" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">info@gosnellsfamilypractice.com.au</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border-2 border-purple-light/60 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-purple-light/50 focus:border-purple-accent focus:outline-none transition"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-purple-light/50 focus:border-purple-accent focus:outline-none transition"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-purple-light/50 focus:border-purple-accent focus:outline-none transition"
                  placeholder="Your phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-purple-light/50 focus:border-purple-accent focus:outline-none transition resize-none"
                  placeholder="Your message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

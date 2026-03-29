"use client"

import { Clock, Star, Award, CreditCard } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

function AnimatedValue({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const numericMatch = value.match(/^([\d.]+)(.*)$/)

  if (numericMatch) {
    const target = parseFloat(numericMatch[1])
    const rest = numericMatch[2]
    return <AnimatedNumber ref={ref} target={target} rest={rest + suffix} isInView={isInView} />
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="text-2xl md:text-3xl font-bold text-brand-teal"
    >
      {value}{suffix}
    </motion.span>
  )
}

import { forwardRef } from "react"

const AnimatedNumber = forwardRef<HTMLSpanElement, { target: number; rest: string; isInView: boolean }>(
  function AnimatedNumber({ target, rest, isInView }, ref) {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return
      const duration = 1500
      const steps = 40
      const increment = target / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(current)
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }, [isInView, target])

    const display = target % 1 !== 0 ? count.toFixed(1) : Math.round(count).toString()

    return (
      <span ref={ref} className="text-2xl md:text-3xl font-bold text-brand-teal">
        {display}{rest}
      </span>
    )
  }
)

export default function StatsSection() {
  const stats = [
    { icon: Clock, value: "7", suffix: " Days", label: "Open Every Week" },
    { icon: Star, value: "4.9", suffix: "", label: "Google Rating", fill: true },
    { icon: Award, value: "AGPAL", suffix: "", label: "Accredited Practice" },
    { icon: CreditCard, value: "Bulk Billing", suffix: "", label: "Available*" },
  ]

  return (
    <section className="bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center divide-x divide-border">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 px-6 md:px-10 py-8 flex-1 min-w-[200px] justify-center"
              >
                <Icon className={`w-5 h-5 text-brand-teal/60 ${stat.fill ? "fill-current" : ""}`} />
                <div>
                  <AnimatedValue value={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Clock, Star, Award, CreditCard } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: Clock,
      value: "Open 7 Days",
      label: "Including After Hours",
      color: "text-[#6b6d95]",
      bgColor: "bg-slate-100",
    },
    {
      icon: Star,
      value: "4.9 Rating",
      label: "Google Reviews",
      color: "text-[#6b6d95]",
      bgColor: "bg-slate-100",
      fill: true,
    },
    {
      icon: Award,
      value: "Accredited",
      label: "AGPAL Certified",
      color: "text-[#6b6d95]",
      bgColor: "bg-slate-100",
    },
    {
      icon: CreditCard,
      value: "Bulk Billing",
      label: "Available*",
      color: "text-[#6b6d95]",
      bgColor: "bg-slate-100",
    },
  ]

  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-white/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group p-4 md:p-6 rounded-2xl bg-white/40 hover:bg-white/80 transition-all duration-300 flex flex-col items-center text-center border border-white/50 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className={`p-3 rounded-xl mb-3 ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${stat.fill ? "fill-current" : ""}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

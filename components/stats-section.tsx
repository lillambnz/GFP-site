import Image from "next/image"

export default function StatsSection() {
  const stats = [
    {
      image: "/alternate.png",
      value: "",
      label: "Alternative Health",
      color: "from-primary to-primary/50",
    },
    {
      image: "/quitsmoking.png",
      value: "",
      label: "Quit Smoking", 
      color: "from-purple-accent to-purple-accent/50",
    },
    {
      image: "/weight.png",
      value: "",
      label: "Weight Loss",
      color: "from-accent to-accent/50",
    },
    {
      image: "/workers.png",
      value: "",
      label: "Workers Compensation",
      color: "from-primary/80 to-purple-accent/80",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="group p-6 rounded-3xl bg-white/20 backdrop-blur-md hover:bg-white/30 hover:shadow-2xl hover:shadow-[#00b1c3]/25 hover:-translate-y-3 transition-all duration-500 text-center hover:backdrop-blur-lg border-0 shimmer"
              >
                <div className="relative w-full max-w-[320px] aspect-square mx-auto mb-4 rounded-3xl overflow-hidden bg-white/30 backdrop-blur-sm group-hover:bg-white/40 transition-all duration-300">
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <p className="text-xl font-semibold text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { CheckCircle } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  image: string
}

export default function ServiceCard({ title, description, features, image }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200/50 flex flex-col h-full min-h-[500px] overflow-hidden transform hover:-translate-y-2">
      {/* Image container with enhanced styling */}
      <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-t-2xl overflow-hidden flex-shrink-0">
        <img
  src={image || "/placeholder.svg"}
  alt={`${title} Service`}
  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
  style={{ objectPosition: "center top" }} // Try "center top", "center bottom", or adjust as needed
/>
      </div>

      {/* Content container */}
      <div className="relative flex flex-col flex-1 p-8">
        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-blue-700 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 mb-6 flex-1 leading-relaxed text-base">{description}</p>

        {/* Features list */}
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-slate-700 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative mr-4">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
              </div>
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line with dark blue gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )
}

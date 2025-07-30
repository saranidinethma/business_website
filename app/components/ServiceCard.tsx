import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  image: string
}

export default function ServiceCard({ title, description, features, image }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover border border-slate-100">
      <img src={image} alt={`${title} Image`} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-slate-600">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
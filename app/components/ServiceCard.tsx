import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover border border-slate-100">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
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

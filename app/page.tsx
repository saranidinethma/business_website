import Header from "./components/Header"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import ServiceCard from "./components/ServiceCard"
import TestimonialCarousel from "./components/TestimonialCarousel"
import Link from "next/link"
import { Code, TrendingUp, Users, Lightbulb, Shield, Zap, ArrowRight } from "lucide-react"

const services = [
  {
    // icon: Code,
    title: "Property Renovations",
    description: "Comprehensive solutions for all types of property upgrades and remodeling.",
    features: ["All kinds of property renovations", "Comprehensive renovation solutions"],
    image: "/images/Property Renovations.jpg",
  },
  {
    // icon: TrendingUp,
    title: "Air-Conditioning & Air Filtration Systems",
    description: "Expert installation and maintenance of efficient HVAC systems.",
    features: ["Installation & maintenance services", "Efficient HVAC system solutions"],
    image: "/images/Air-Conditioning.jpg",
  },
  {
    // icon: Users,
    title: "Electromechanical Equipment Installation",
    description: "Professional setup and integration of electromechanical systems.",
    features: ["Professional installation of electromechanical systems", "Reliable equipment setup"],
    image: "/images/Electromechanical.jpg",
  },
  {
    // icon: Lightbulb,
    title: "Plumbing & Sanitary Contracting",
    description: "High-quality plumbing and sanitary fixture installations.",
    features: ["Expert plumbing and sanitary solutions", "High-quality fixture installations"],
    image: "/images/plumber is plumbing.jpg",
  },
  {
    // icon: Shield,
    title: "Floor and Wall Tiling Works",
    description: "Custom, durable tiling services for floors and walls.",
    features: ["Custom tiling for floors and walls", "Durable and aesthetic designs"],
    image: "/images/WhatsApp Image 2025-06-28 at 12.06.34 (2).jpg",
  },
  {
    // icon: Zap,
    title: "Carpentry & Flooring Services",
    description: "Custom carpentry and premium flooring installations.",
    features: ["Custom carpentry work", "Premium flooring installations"],
    image: "/images/Carpentry & Flooring Services.jpg",
  },
  {
    // icon: Code,
    title: "Swimming Pool Tiling, Fixing & Maintenance",
    description: "Expert tiling, repair, and regular maintenance for pools.",
    features: ["Pool tiling and repair services", "Regular maintenance and upkeep"],
    image: "/images/Swimming Pool Tiling, Fixing & Maintenance.jpg",
  },
   {
    // icon: Code,
    title: "Painting Contracting",
    description: "Professional interior and exterior painting with quality finishes.",
    features: ["Interior and exterior painting services", "High-quality finishes"],
    image: "/images/WhatsApp Image 2025-06-28 at 12.06.32.jpg",
  },

]

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Our team consists of industry experts with years of experience.",
    icon: Users,
  },
  {
    title: "Proven Results",
    description: "We have a track record of delivering successful projects.",
    icon: TrendingUp,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your business never stops.",
    icon: Shield,
  },
  {
    title: "Innovation Focus",
    description: "We stay ahead of trends to provide cutting-edge solutions.",
    icon: Lightbulb,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative text-white overflow-hidden min-h-screen">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
          poster="/placeholder.svg?height=500&width=600"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto py-32 lg:py-48 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Elevate Your Projects with
                <span className="text-blue-400"> Solid Serve Technical Services</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Welcome to our service, delivering dependable technical solutions across the UAE. With expertise and
                efficiency, our team ensures top-quality residential, commercial, and industrial projects, on time and
                within budget, with a focus on safety and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-primary text-center">
                  Explore Services
                </Link>
                <Link href="/contact" className="btn-secondary text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-24 left-12 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse z-10"></div>
        <div className="absolute bottom-24 right-12 w-40 h-40 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000 z-10"></div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Professional Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer comprehensive solutions tailored to meet your business needs and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Why Choose Our Services?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations
                and drive your business forward.
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img
                src="/images/Skilled Workers at Technical Service Installation.png"
                alt="Why Choose Us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Contact CTA */}
      <section className="section-padding bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our professional services can help you achieve your goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
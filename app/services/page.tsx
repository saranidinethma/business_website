import Header from "../components/Header"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import ServiceCard from "../components/ServiceCard"
import Link from "next/link"
import { Code, TrendingUp, Users, Lightbulb, Shield, Zap, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: [
      "Responsive Design",
      "Fast Performance",
      "SEO Optimized",
      "Mobile First",
      "Custom CMS",
      "E-commerce Solutions",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively.",
    features: [
      "Social Media Marketing",
      "Content Strategy",
      "PPC Campaigns",
      "Analytics",
      "Email Marketing",
      "Conversion Optimization",
    ],
  },
  {
    icon: Users,
    title: "Business Consulting",
    description:
      "Expert guidance to help your business reach its full potential through strategic planning and process optimization.",
    features: [
      "Strategy Planning",
      "Process Optimization",
      "Growth Analysis",
      "Market Research",
      "Competitive Analysis",
      "ROI Optimization",
    ],
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description:
      "Build a strong brand identity that resonates with your target audience and differentiates you from competitors.",
    features: [
      "Brand Identity",
      "Logo Design",
      "Brand Guidelines",
      "Market Positioning",
      "Brand Messaging",
      "Visual Identity",
    ],
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Protect your business with comprehensive security measures and risk management strategies.",
    features: [
      "Data Protection",
      "Cybersecurity",
      "Risk Assessment",
      "Compliance",
      "Security Audits",
      "Incident Response",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize your systems and processes for maximum efficiency, speed, and scalability.",
    features: [
      "Speed Optimization",
      "System Analysis",
      "Performance Monitoring",
      "Scalability",
      "Database Optimization",
      "Infrastructure Scaling",
    ],
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We start by understanding your business, goals, and challenges through comprehensive analysis.",
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Based on our findings, we develop a customized strategy tailored to your specific needs.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "Our expert team executes the strategy with precision, keeping you informed every step of the way.",
  },
  {
    step: "04",
    title: "Optimization & Support",
    description: "We continuously monitor, optimize, and provide ongoing support to ensure lasting success.",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Services Hero */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Professional
              <span className="text-blue-400"> Services</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive solutions designed to drive your business forward with innovation, expertise, and measurable
              results.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">What We Offer</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From web development to digital marketing, we provide end-to-end solutions that help businesses thrive in
              the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project delivers exceptional results and exceeds
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Why Our Services Stand Out</h2>
              <p className="text-lg text-slate-600 mb-8">
                We combine cutting-edge technology with proven strategies to deliver solutions that not only meet your
                current needs but also prepare you for future growth.
              </p>

              <div className="space-y-4">
                {[
                  "Customized solutions tailored to your business",
                  "Expert team with years of industry experience",
                  "Proven track record of successful projects",
                  "Ongoing support and maintenance",
                  "Transparent communication throughout",
                  "Competitive pricing with no hidden costs",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Service Features"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-slate-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

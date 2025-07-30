import Header from "./components/Header"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import ServiceCard from "./components/ServiceCard"
import TestimonialCarousel from "./components/TestimonialCarousel"
import Link from "next/link"
import { Code, TrendingUp, Users, Lightbulb, Shield, Zap, Clock, ArrowRight } from "lucide-react"

const services = [
	{
		title: "Property Renovations",
		description: "Comprehensive solutions for all types of property upgrades and remodeling.",
		features: ["All kinds of property renovations", "Comprehensive renovation solutions"],
		image: "/images/Property Renovations.jpg",
	},
	{
		title: "Air-Conditioning & Air Filtration Systems",
		description: "Expert installation and maintenance of efficient HVAC systems.",
		features: ["Installation & maintenance services", "Efficient HVAC system solutions"],
		image: "/images/Air-Conditioning.jpg",
	},
	{
		title: "Electromechanical Equipment Installation",
		description: "Professional setup and integration of electromechanical systems.",
		features: ["Professional installation of electromechanical systems", "Reliable equipment setup"],
		image: "/images/Electromechanical.jpg",
	},
	{
		title: "Plumbing & Sanitary Contracting",
		description: "High-quality plumbing and sanitary fixture installations.",
		features: ["Expert plumbing and sanitary solutions", "High-quality fixture installations"],
		image: "/images/plumber is plumbing.jpg",
	},
	{
		title: "Floor and Wall Tiling Works",
		description: "Custom, durable tiling services for floors and walls.",
		features: ["Custom tiling for floors and walls", "Durable and aesthetic designs"],
		image: "/images/WhatsApp Image 2025-06-28 at 12.06.34 (2).jpg",
	},
	{
		title: "Carpentry & Flooring Services",
		description: "Custom carpentry and premium flooring installations.",
		features: ["Custom carpentry work", "Premium flooring installations"],
		image: "/images/Carpentry & Flooring Services.jpg",
	},
	{
		title: "Swimming Pool Tiling, Fixing & Maintenance",
		description: "Expert tiling, repair, and regular maintenance for pools.",
		features: ["Pool tiling and repair services", "Regular maintenance and upkeep"],
		image: "/images/Swimming Pool Tiling, Fixing & Maintenance.jpg",
	},
	{
		title: "Painting Contracting",
		description: "Professional interior and exterior painting with quality finishes.",
		features: ["Interior and exterior painting services", "High-quality finishes"],
		image: "/images/WhatsApp Image 2025-06-28 at 12.06.32.jpg",
	},
]

const whyChooseUs = [
	{
		title: "Skilled & Certified Team",
		description: "Our team consists of industry experts with years of experience and professional certifications.",
		icon: Users,
		gradient: "from-blue-600 to-blue-500",
		bgGradient: "from-blue-50 to-blue-100",
	},
	{
		title: "Reliable & Timely Execution",
		description: "Projects completed efficiently to UAE standards with guaranteed on-time delivery.",
		icon: Clock,
		gradient: "from-blue-700 to-blue-600",
		bgGradient: "from-slate-50 to-blue-50",
	},
	{
		title: "24/7 Support",
		description: "Round-the-clock maintenance and assistance whenever you need us most.",
		icon: Shield,
		gradient: "from-blue-800 to-blue-700",
		bgGradient: "from-blue-50 to-slate-50",
	},
	{
		title: "Complete Service Range",
		description: "From minor repairs to full installations — we handle every aspect of your project.",
		icon: Zap,
		gradient: "from-blue-500 to-cyan-500",
		bgGradient: "from-cyan-50 to-blue-50",
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

			{/* Enhanced Why Choose Us Section */}
			<section className="section-padding bg-gradient-to-br from-white via-blue-50/50 to-slate-50 relative overflow-hidden">
				<div className="max-w-7xl mx-auto relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left Content */}
						<div className="animate-slide-in-left">
							{/* Section Header */}
							<div className="mb-12">
								<h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
									Why Choose Our{" "}
									<span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
										Services?
									</span>
								</h2>
								<p className="text-xl text-slate-600 leading-relaxed">
									With professionalism, precision, and hands-on expertise, we deliver high-quality technical services
									across the UAE — safely, on time, and within budget.
								</p>
							</div>

							{/* Enhanced Features Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{whyChooseUs.map((item, index) => (
									<div
										key={index}
										className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:border-blue-200/80 transform hover:-translate-y-2"
										style={{ animationDelay: `${index * 0.1}s` }}
									>
										{/* Gradient background on hover */}
										<div
											className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
										></div>

										{/* Content */}
										<div className="relative z-10">
											{/* Icon with enhanced styling */}
											<div className="relative mb-4">
												<div
													className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
												>
													<item.icon className="h-7 w-7 text-white" />
												</div>
												{/* Glow effect */}
												<div
													className={`absolute inset-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
												></div>
											</div>

											{/* Text content */}
											<h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-900 transition-colors duration-300">
												{item.title}
											</h3>
											<p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
												{item.description}
											</p>
										</div>

										{/* Decorative corner element */}
										<div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100/60 to-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									</div>
								))}
							</div>
						</div>

						{/* Right Image with Enhanced Styling */}
						<div className="animate-slide-in-right">
							<div className="relative">
								{/* Main image container */}
								<div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
									<img
										src="/images/Skilled Workers at Technical Service Installation.png"
										alt="Why Choose Us - Skilled Workers"
										className="w-full h-auto"
									/>
									{/* Image overlay with gradient */}
									<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
								</div>
							</div>
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

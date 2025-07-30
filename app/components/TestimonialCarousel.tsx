"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
	{
		id: 1,
		name: "Ahmed Al Mansoori",
		company: "Tech Solutions Inc.",
		content:
			"Solid Serve handled our entire renovation with professionalism and efficiency. The results were beyond our expectations.",
		rating: 5,
	},
	{
		id: 2,
		name: "Emily Rodriguez",
		company: "Digital Innovations",
		content:
			"The best investment we made for our company. Their expertise and dedication made all the difference in our success.",
		rating: 5,
	},
	{
		id: 3,
		name: "Priyanka Mehta",
		company: "Growth Enterprises",
		content:
			"Reliable, responsive, and truly skilled. They delivered exactly what they promised — on time and within budget.",
	},
]

export default function TestimonialCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
			)
		}, 5000)

		return () => clearInterval(timer)
	}, [])

	const goToPrevious = () => {
		setCurrentIndex(
			currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
		)
	}

	const goToNext = () => {
		setCurrentIndex(
			currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
		)
	}

	return (
		<div className="relative bg-slate-50 py-16">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-slate-800 mb-4">
						What Our Clients Say
					</h2>
					<p className="text-slate-600">Don't just take our word for it</p>
				</div>

				<div className="relative">
					<div className="bg-white rounded-lg shadow-lg p-8 text-center">
						<div className="flex justify-center mb-4">
							{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
								<Star
									key={i}
									className="h-5 w-5 text-yellow-400 fill-current"
								/>
							))}
						</div>

						<blockquote className="text-lg text-slate-600 mb-6 italic">
							"{testimonials[currentIndex].content}"
						</blockquote>

						<div className="flex flex-col items-center justify-center">
							<div className="font-semibold text-slate-800">
								{testimonials[currentIndex].name}
							</div>
							<div className="text-sm text-slate-600">
								{testimonials[currentIndex].company}
							</div>
						</div>
					</div>

					{/* Navigation Buttons */}
					<button
						onClick={goToPrevious}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
					>
						<ChevronLeft className="h-6 w-6 text-slate-600" />
					</button>

					<button
						onClick={goToNext}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
					>
						<ChevronRight className="h-6 w-6 text-slate-600" />
					</button>
				</div>

				{/* Dots Indicator */}
				<div className="flex justify-center mt-8 space-x-2">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full transition-all duration-200 ${
								index === currentIndex ? "bg-blue-600" : "bg-slate-300"
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

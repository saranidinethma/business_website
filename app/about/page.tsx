import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Link from "next/link"
import { Target, Eye, Heart, Users, TrendingUp, CheckCircle, Linkedin, Twitter, Mail } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We are dedicated to delivering superior technical solutions, ensuring every project meets the highest standards of quality and precision.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We uphold honesty, transparency, and ethical conduct in all our operations, fostering trust with our clients across the UAE.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We value teamwork and strong client relationships, working closely to achieve shared goals and successful project outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We adopt cutting-edge technologies and creative approaches to provide innovative solutions for residential, commercial, and industrial projects.",
  },
]

const achievements = [
  {
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries",
  },
  {
    number: "250+",
    label: "Happy Clients",
    description: "Satisfied clients who trust us with their business needs",
  },
  {
    number: "5+",
    label: "Years Experience",
    description: "Years of expertise in delivering professional services",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Client satisfaction rate based on project feedback",
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* About Hero */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About
              <span className="text-blue-400"> Our Company</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
             We are passionate professionals dedicated to helping properties grow through innovative technical solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Founded in 2020, our company began with a simple mission to help properties thrive in the United Arab Emirates through innovative solutions and exceptional service. What started as a small team of skilled professionals has grown into a trusted partner for clients across residential, commercial, and industrial sectors.
                </p>
                <p>
                  We believe that every business has unique challenges and opportunities. That's why we take a personalized approach to every project, combining our expertise with your vision to create solutions that drive real results.
                </p>
                <p>
                  Over the years, we've had the privilege of working with amazing clients, from startups to established enterprises, helping them achieve their goals and exceed their expectations. Our success is measured by the success of our clients.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-primary">
                  Our Services
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Work With Us
                </Link>
              </div>
            </div>

            {/* Add your image here, remove animation */}
            <div className="hidden lg:block relative">
              <div className="relative w-full h-full">
                <img
                  src="/images/OUR story.jpg.png"
                  alt="Our Story"
                  className="w-full h-auto object-cover"
                  style={{ display: "block" }}
                />
                {/* Improved fade effect: pure white at all edges */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.7) 60%, rgba(255,255,255,1) 100%)",
                    zIndex: 2,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team of dedicated professionals brings together diverse expertise and a shared commitment to
              excellence.
            </p>
          </div>

          {/* Joseph Mervyn Profile */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img
                    src="/images/JOSEPH MERVYN.jpg"
                    alt="Joseph Mervyn"
                    className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                  />
                </div>

                <div className="lg:col-span-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">Joseph Mervyn</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">Founder & CEO</p>

                  <div className="space-y-4 text-slate-600 mb-6">
                    <p>
                   Joseph is the visionary behind our company, with a deep passion for innovation and a commitment to excellence. His expertise in business strategy and digital transformation inspires our team to deliver outstanding results for every client. With a strong background in technology and business development, Joseph has successfully led projects across diverse industries, driving sustainable growth and competitive advantage for our clients.
                    </p>
                    
                  </div>

                  

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="animate-slide-in-left">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
Solid Serve Technical Services LLC is committed to delivering high-quality technical solutions across the UAE with professionalism and precision. We prioritize safety, timely execution, and client satisfaction, building trust through exceptional service.

              </p>

              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-slate-800">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600">
                To be the UAE’s leading technical services provider, renowned for quality, reliability, and innovation, setting industry standards through sustainable practices and client-focused excellence.
              </p>
            </div>

            {/* Values */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Values</h2>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-100">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">{achievement.label}</div>
                <div className="text-sm text-blue-200">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how we can help your business achieve its goals and reach new heights of success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get In Touch
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

import Header from "../components/Header"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import ContactForm from "../components/ContactForm"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@yourbusiness.com", "support@yourbusiness.com"],
    action: "mailto:info@yourbusiness.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Business Street", "Suite 100, City, State 12345"],
    action: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    action: "#",
  },
]

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Contact Hero */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In
              <span className="text-blue-400"> Touch</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Contact Information</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center card-hover">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action !== "#" && (
                  <a
                    href={info.action}
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Contact Now
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
              <p className="text-lg text-slate-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. We're here to help with any questions
                or project inquiries.
              </p>
              <ContactForm />
            </div>

            {/* Map & Additional Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Visit Our Office</h2>
              <p className="text-lg text-slate-600 mb-8">
                We're located in the heart of the business district, easily accessible by public transportation and with
                ample parking available.
              </p>

              {/* Google Maps Embed */}
              <div className="bg-slate-200 rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
                  <p className="text-slate-600">Interactive Map</p>
                  <p className="text-sm text-slate-500">Google Maps integration would go here</p>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Quick Contact</h3>

                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <MessageSquare className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium text-slate-800">WhatsApp</div>
                    <div className="text-sm text-slate-600">Chat with us instantly</div>
                  </div>
                </a>

                <a
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-slate-800">Call Now</div>
                    <div className="text-sm text-slate-600">+1 (555) 123-4567</div>
                  </div>
                </a>

                <a
                  href="mailto:info@yourbusiness.com"
                  className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Mail className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-medium text-slate-800">Email Us</div>
                    <div className="text-sm text-slate-600">info@yourbusiness.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. Most projects are completed within 4-12 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we provide comprehensive ongoing support and maintenance packages to ensure your solution continues to perform optimally.",
              },
              {
                question: "What industries do you work with?",
                answer:
                  "We work with businesses across various industries including technology, healthcare, finance, retail, and professional services.",
              },
              {
                question: "How do you handle project communication?",
                answer:
                  "We maintain regular communication through scheduled check-ins, progress reports, and are always available for questions via email, phone, or video calls.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}

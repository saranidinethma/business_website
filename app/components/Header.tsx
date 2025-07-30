"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50" 
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <Link href="/">
                <img
                  src="/images/Logo Enhanced_enhanced.jpeg"
                  alt="Solid Serve Technical Services"
                  className="h-16 w-auto drop-shadow-sm"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ease-out group ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/25"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50/80 hover:shadow-md"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {pathname !== item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link 
                href="/contact" 
                className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-300 ease-out group overflow-hidden"
              >
                <span className="relative z-10 tracking-wide">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    }`} 
                  />
                  <X 
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    }`} 
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-slate-200/50 rounded-b-xl shadow-lg">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50 hover:translate-x-1"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
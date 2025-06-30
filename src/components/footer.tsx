import Link from "next/link"
import { Leaf, Github, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "Crop Recommendation", href: "/crop-recommendation" },
      { name: "Fertilizer Recommendation", href: "/fertilizer-recommendation" },
    ],
    social: [
      { name: "GitHub", href: "#", icon: Github },
      { name: "Email", href: "mailto:farmeaseinfo@gmail.com", icon: Mail },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SoilSense</h3>
                  <p className="text-sm text-gray-600">Smart Agriculture Assistant</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                Empowering farmers with AI-powered crop and fertilizer recommendations for optimal agricultural results.
                Make data-driven decisions for sustainable farming.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                <span>Serving farmers worldwide</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Features</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>AI-Powered Analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Soil Assessment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Crop Optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span>Fertilizer Guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>© {currentYear} SoilSense Project</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Built with ❤️ for farmers</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-green-600 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Copyright */}
          <div className="sm:hidden text-center mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">Built with ❤️ for sustainable agriculture</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

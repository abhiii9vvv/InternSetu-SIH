import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export function GovernmentFooter() {
  return (
    <footer className="bg-slate-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li className="text-gray-300">Helpline: 1800-XXX-XXXX</li>
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Government</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Ministry of Corporate Affairs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Digital India
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  MyGov
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  India.gov.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <Button size="sm" variant="ghost" className="text-white hover:bg-slate-700 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-slate-700 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-slate-700 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-slate-700 p-2">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-slate-700 p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Government of India. All rights reserved. | Last updated: December 2024</p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link';
import { Shield, Mail, Phone, MapPin, Globe, MessageSquare, Users } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F4C81] text-white pt-16 pb-8 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-[#F97316]" />
              <span className="text-2xl font-bold font-poppins tracking-tight">
                Infra<span className="text-[#F97316]">Tech</span>
              </span>
            </Link>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed">
              Leading provider of enterprise network design, robust IT infrastructure, and cutting-edge cloud solutions. Empowering your business to scale securely.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F97316] transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Completed Projects', href: '/projects' },
                { label: 'Tech Blog', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Network Setup', 'Server Deployment', 'Cybersecurity', 'Cloud Solutions', 'IT Support (AMC)'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-blue-200 hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-blue-200">
                <MapPin className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                <span>123 Enterprise Blvd, IT Tower, Mohali, India 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-200">
                <Phone className="w-5 h-5 text-[#F97316] shrink-0" />
                <span>+91 90176-24622</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-200">
                <Mail className="w-5 h-5 text-[#F97316] shrink-0" />
                <span>sahilsinhmar981@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-300">
            &copy; {currentYear} InfraTech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-blue-300">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Shield, PhoneCall } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-[#0F4C81] py-5 shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'bg-[#0F4C81]' : 'bg-white'}`}>
                <Shield className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-[#0F4C81]'}`} />
              </div>
              <span className={`text-2xl font-bold font-poppins tracking-tight ${isScrolled ? 'text-[#0F4C81]' : 'text-white'}`}>
                Infra<span className="text-[#F97316]">Tech</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#F97316] ${
                    pathname === link.href
                      ? 'text-[#F97316]'
                      : isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                Get a Quote
              </Link>
              
              <button
                className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 p-6 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-2xl font-bold font-poppins text-[#0F4C81]">
                  Infra<span className="text-[#F97316]">Tech</span>
                </span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500 hover:text-gray-900">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6 flex-grow">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium border-b border-gray-100 pb-3 ${
                      pathname === link.href ? 'text-[#F97316]' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex justify-center items-center gap-2 bg-[#F97316] text-white px-5 py-4 rounded-md font-semibold text-lg"
                >
                  <PhoneCall className="w-5 h-5" />
                  Get a Quote
                </Link>
              </div>
            </div>
          </>
      )}
    </>
  );
}

import { ArrowRight, Server, Shield, Cloud, Wifi, ChevronRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F4C81] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#F97316]/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Next-Generation IT & <br className="hidden md:block" />
              <span className="text-[#F97316]">Network Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Empowering enterprises with robust network design, secure server deployment, and cutting-edge cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact" className="bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center gap-2">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center gap-2">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#F97316] font-bold tracking-wider uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1E293B]">Enterprise IT Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'Network Infrastructure', desc: 'LAN/WAN design, routing, switching & wireless networks for seamless connectivity.' },
              { icon: Server, title: 'Server Deployment', desc: 'Windows & Linux server setups, Active Directory, virtualization (VMware/Hyper-V).' },
              { icon: Shield, title: 'Cybersecurity', desc: 'Firewall installation, endpoint protection, and comprehensive security audits.' },
              { icon: Cloud, title: 'Cloud Solutions', desc: 'AWS & Azure deployment, hybrid cloud architecture, and disaster recovery.' },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0F4C81] transition-colors">
                  <service.icon className="w-7 h-7 text-[#0F4C81] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-[#1E293B] mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-3">{service.desc}</p>
                <Link href="/services" className="text-[#F97316] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full bg-slate-200">
              {/* Fallback pattern in case image is missing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81] to-blue-400 opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Server className="w-32 h-32 text-white/50" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-[#F97316] font-bold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1E293B] mb-6">Building Reliable & Scalable Infrastructure</h3>
            <p className="text-lg text-gray-600 mb-8">
              We specialize in delivering high-performance IT environments that drive business growth. From structured cabling to complex cloud migrations, our certified engineers ensure your operations run without interruption.
            </p>
            <ul className="space-y-4">
              {[
                '24/7 Proactive Monitoring & Support',
                'Certified Network & Security Engineers',
                'Customized Solutions for Every Industry',
                'Minimal Downtime Guarantee'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F97316]" />
                  <span className="text-[#1E293B] font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/about" className="bg-[#0F4C81] hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2">
                About Our Company
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1E293B] py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your IT infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8">Get a free consultation and customized quotation for your business needs.</p>
          <Link href="/contact" className="bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 inline-block">
            Contact Our Experts Today
          </Link>
        </div>
      </section>
    </main>
  );
}

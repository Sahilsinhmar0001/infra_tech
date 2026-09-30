import { Users, Award, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Enterprise Clients', value: '20+' },
  { label: 'Expert Engineers', value: '30+' },
];

const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#F97316]" />,
    title: 'Uncompromising Security',
    description: 'We prioritize the security of your data and infrastructure above all else, implementing military-grade protection.'
  },
  {
    icon: <Award className="w-8 h-8 text-[#F97316]" />,
    title: 'Excellence in Execution',
    description: 'Our team delivers flawless implementation with rigorous testing and quality assurance at every step.'
  },
  {
    icon: <Clock className="w-8 h-8 text-[#F97316]" />,
    title: '24/7 Reliability',
    description: 'Your business never sleeps, and neither do our support and monitoring systems.'
  },
  {
    icon: <Users className="w-8 h-8 text-[#F97316]" />,
    title: 'Client-Centric Approach',
    description: 'We build lasting partnerships by aligning our IT strategies with your specific business goals.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0F4C81] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent to-white transform -skew-x-12"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mt-10">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6">
              Empowering Your <span className="text-[#F97316]">Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              InfraTech is a premier IT and network infrastructure provider dedicated to building robust, scalable, and secure technological foundations for modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2021, InfraTech emerged with a clear mission: to simplify the complex world of enterprise IT infrastructure. We recognized that businesses were struggling to keep pace with rapid technological advancements while maintaining security and efficiency.
                </p>
                <p>
                  Over the past decade, we have evolved from a boutique networking consultancy into a full-scale IT solutions provider. Our journey is defined by our commitment to continuous innovation and our unyielding dedication to client success.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Industry-leading technical expertise',
                    'Strategic technology partnerships',
                    'Proactive rather than reactive solutions',
                    'Future-proof architectural designs'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#F97316] shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                  <span className="text-4xl font-bold text-[#0F4C81] mb-2">{stat.value}</span>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our decisions, shape our culture, and drive our commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Partner with InfraTech to build a scalable, secure, and high-performance technological foundation for your business.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#F97316] font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-gray-50 transition-all hover:scale-105">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </main>
  );
}

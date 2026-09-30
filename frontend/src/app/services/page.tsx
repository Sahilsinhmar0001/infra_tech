import { Server, Shield, Wifi, Database, Cloud, Headset, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'network-infrastructure',
    icon: <Wifi className="w-10 h-10 text-[#F97316]" />,
    title: 'Network Infrastructure',
    description: 'Design, implementation, and optimization of enterprise-grade LAN, WAN, and wireless networks ensuring high availability and seamless connectivity.',
    features: ['SD-WAN Solutions', 'Wireless LAN Design', 'Network Assessment', 'Structured Cabling']
  },
  {
    id: 'cloud-computing',
    icon: <Cloud className="w-10 h-10 text-[#F97316]" />,
    title: 'Cloud Solutions',
    description: 'Seamless migration, deployment, and management of cloud environments across AWS, Azure, and Google Cloud, tailored to your workload requirements.',
    features: ['Cloud Migration', 'Hybrid Cloud Setup', 'Cloud Security', 'Cost Optimization']
  },
  {
    id: 'cybersecurity',
    icon: <Shield className="w-10 h-10 text-[#F97316]" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security postures to protect your critical data and infrastructure from evolving cyber threats and ensure regulatory compliance.',
    features: ['Threat Detection', 'Penetration Testing', 'Firewall Management', 'Zero Trust Architecture']
  },
  {
    id: 'data-center',
    icon: <Server className="w-10 h-10 text-[#F97316]" />,
    title: 'Data Center Solutions',
    description: 'End-to-end data center design, virtualization, and management to maximize computational efficiency, scalability, and disaster recovery readiness.',
    features: ['Server Virtualization', 'Disaster Recovery', 'Storage Area Networks', 'Power & Cooling Design']
  },
  {
    id: 'managed-it',
    icon: <Headset className="w-10 h-10 text-[#F97316]" />,
    title: 'Managed IT Services',
    description: 'Proactive 24/7 monitoring, maintenance, and helpdesk support to ensure your technology operates flawlessly while you focus on core business.',
    features: ['24/7 Helpdesk', 'Proactive Monitoring', 'Patch Management', 'IT Consulting']
  },
  {
    id: 'database-management',
    icon: <Database className="w-10 h-10 text-[#F97316]" />,
    title: 'Data & Analytics',
    description: 'Robust database architecture and management solutions to ensure data integrity, rapid access, and actionable business intelligence.',
    features: ['Database Architecture', 'Data Migration', 'Performance Tuning', 'Business Intelligence']
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0F4C81] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mt-10">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6">
              Our <span className="text-[#F97316]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Comprehensive IT solutions engineered to elevate your operational efficiency, enhance security, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-sm font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#0F4C81] rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href={`/contact?service=${service.id}`} className="inline-flex items-center text-[#F97316] font-semibold hover:text-orange-700 transition-colors mt-auto">
                  Request Solution <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">Our proven methodology ensures seamless delivery and exceptional results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your current infrastructure and business goals.' },
              { step: '02', title: 'Design', desc: 'Architecting a scalable, secure, and cost-effective solution.' },
              { step: '03', title: 'Deployment', desc: 'Meticulous implementation with zero to minimal downtime.' },
              { step: '04', title: 'Support', desc: 'Continuous monitoring, optimization, and dedicated support.' }
            ].map((phase, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-[#0F4C81] rounded-full flex items-center justify-center text-xl font-bold text-[#0F4C81] mb-6 shadow-md">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

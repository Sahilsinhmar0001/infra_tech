import Image from 'next/image';
import { Building2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Global Fintech Network Overhaul',
    client: 'FinServe International',
    category: 'Network Infrastructure',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2850&auto=format&fit=crop',
    metrics: ['99.999% Uptime', 'Zero Trust Implemented', '40% Latency Reduction'],
    description: 'Redesigned the entire global WAN architecture for a leading financial institution, migrating to an SD-WAN solution that vastly improved security and performance across 50+ international branches.'
  },
  {
    id: 2,
    title: 'Enterprise Cloud Migration',
    client: 'HealthCare Plus',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2872&auto=format&fit=crop',
    metrics: ['Petabyte Scale Data', 'HIPAA Compliant', 'Zero Data Loss'],
    description: 'Executed a flawless migration of legacy on-premise healthcare records to a highly secure, scalable AWS hybrid cloud environment, ensuring strict regulatory compliance.'
  },
  {
    id: 3,
    title: 'Smart Campus IT Foundation',
    client: 'Tech University',
    category: 'Data Center & Wireless',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2886&auto=format&fit=crop',
    metrics: ['15,000+ Concurrent Users', 'Wi-Fi 6 Integrated', 'Green Data Center'],
    description: 'Built a state-of-the-art intelligent network infrastructure for a massive university campus, featuring pervasive high-speed wireless connectivity and an energy-efficient localized data center.'
  },
  {
    id: 4,
    title: 'Ransomware Recovery & Hardening',
    client: 'Manufacturing Corp',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop',
    metrics: ['< 4h Recovery Time', '24/7 SOC Setup', 'Endpoint Protection'],
    description: 'Provided rapid incident response following a severe cyberattack, successfully recovering critical data, and completely overhauling their security posture to prevent future breaches.'
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0F4C81] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mt-10">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6">
              Featured <span className="text-[#F97316]">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of successful implementations. See how we&apos;ve helped leading organizations transform their IT landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <Image
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[#0F4C81] shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-2 text-sm font-bold text-[#F97316] uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Client: {project.client}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Key Achievements</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, mIndex) => (
                      <span key={mIndex} className="bg-blue-50 text-[#0F4C81] px-4 py-2 rounded-lg text-sm font-semibold border border-blue-100">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Link href={`/contact?interest=${encodeURIComponent(project.title)}`} className="inline-flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-[#F97316] transition-colors group">
                    Discuss a Similar Project 
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6">Let&apos;s Build Your Success Story</h2>
          <p className="text-gray-400 mb-8 text-lg">Our experts are ready to architect the perfect solution for your unique challenges.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-[#F97316] text-white font-bold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}

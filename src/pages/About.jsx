import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Leaf, 
  Award, 
  Mail, 
  MapPin, 
  Users, 
  ArrowUpRight,
  Target
} from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "Captain Marcus Mercer",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop",
      bio: "Former merchant marine officer with 25 years of maritime navigation and harbor master administration experience.",
      linkedin: "#",
      email: "mercer@Amarglobal.com"
    },
    {
      name: "Sonia Patel",
      role: "Chief of Customs Compliance",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=250&auto=format&fit=crop",
      bio: "Ex-customs officer. Specialized in international tariff regulations, trade compliance, and classification audits.",
      linkedin: "#",
      email: "patel@Amarglobal.com"
    },
    {
      name: "Arthur Pendelton",
      role: "VP of Global Operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop",
      bio: "Logistics strategist. Orchestrated multi-million ton freight movements across European and American air networks.",
      linkedin: "#",
      email: "pendelton@Amarglobal.com"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Founding & First Port Authority",
      desc: "Amar Global Trade was founded in Singapore, starting with two chartered cargo ships servicing the Singapore-Shanghai routes."
    },
    {
      year: "2018",
      title: "Rotterdam Terminal Expansion",
      desc: "Established our European headquarters in Rotterdam, unlocking comprehensive customs clearance and warehouse logistics."
    },
    {
      year: "2021",
      title: "Digital Route Automation",
      desc: "Launched our internal tracking and HS-code automated audit system, reducing port clearance hold-ups by 40%."
    },
    {
      year: "2025",
      title: "Zero-Carbon Cargo Commitment",
      desc: "Partnered with bio-fueled ocean fleets and electric overland carrier alliances to work towards net-zero logistics targets."
    }
  ];

  return (
    <div className="relative">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-24 bg-grid-pattern overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-950/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel border-primary-500/20 text-xs font-semibold text-primary-400 uppercase">
              <Target className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Bridging Distances, <span className="text-gradient-primary">Simplifying Commerce</span>
            </h1>
            <p className="text-slate-350 text-base sm:text-lg leading-relaxed">
              We started with a simple belief: global trade shouldn't be gated by customs complexity and opaque logistics. Today, we manage end-to-end freight distribution pipelines for partners across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES */}
      <section className="py-20 relative bg-navy-900/35 border-y border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Integrity */}
            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-950/60 border border-primary-500/20 text-primary-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Absolute Compliance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We navigate complex import-export codes with zero compromise. Our legal audits prevent shipment bottlenecks before they touch international berths.
              </p>
            </div>

            {/* Velocity */}
            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-950/60 border border-primary-500/20 text-primary-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Optimized Velocity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                By integrating ocean bulk routes with air corridors, we build reliable timelines tailored to our client's volume requirements.
              </p>
            </div>

            {/* Stewardship */}
            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-950/60 border border-primary-500/20 text-primary-400 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Sustainable Cargo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We lead green logistic initiatives by investing in alternative-fuel sea transport and routing algorithms that reduce empty backhauls.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TIMELINE SECTION */}
      {/* <section className="py-24 relative overflow-hidden bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-20">
            <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest">Company History</h2>
            <h3 className="text-3xl font-extrabold text-white">Our Journey Through Time</h3>
          </div>

          Timeline Tree
          <div className="relative border-l border-slate-800 ml-4 md:ml-0 md:left-1/2 md:border-l-0 md:before:absolute md:before:left-0 md:before:top-0 md:before:h-full md:before:w-[1px] md:before:bg-slate-800">
            {milestones.map((milestone, idx) => (
              <div 
                key={idx} 
                className={`relative mb-16 md:w-1/2 ${
                  idx % 2 === 0 
                    ? 'md:left-0 md:pr-12 md:text-right' 
                    : 'md:left-1/2 md:pl-12 md:text-left'
                }`}
              >
                Visual Circle indicator
                <div className={`absolute top-1.5 -left-[29px] w-5 h-5 rounded-full bg-navy-950 border-2 border-primary-500 flex items-center justify-center z-10 ${
                  idx % 2 === 0 
                    ? 'md:left-auto md:-right-[10px]' 
                    : 'md:-left-[10px]'
                }`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-ping" />
                </div>

                <div className="pl-6 md:pl-0">
                  Glass Card
                  <div className="glass-panel glass-panel-hover p-6 rounded-2xl relative inline-block text-left max-w-md w-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-950 border border-primary-500/20 text-xs font-bold text-primary-400 mb-3">
                      {milestone.year}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">{milestone.title}</h4>
                    <p className="text-slate-450 text-sm leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

      {/* 4. TEAM SECTION */}
      {/* <section className="py-24 relative overflow-hidden bg-navy-900/40 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-primary-500 uppercase tracking-widest">Leadership</h2>
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Orchestrators of Trade Lanes
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
              Our diverse executive suite brings together experts in customs regulation, maritime navigation, and global logistics tech.
            </p>
          </div>

          Team Grid
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-center text-center group">
                Photo
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-slate-800 group-hover:border-primary-500 transition-colors duration-300">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    src={member.image} 
                    alt={member.name} 
                  />
                </div>

                <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">{member.name}</h4>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{member.bio}</p>

                Team Social Connects
                <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/40 w-full justify-center">
                  <a href={member.linkedin} className="text-slate-500 hover:text-primary-400 transition-colors flex items-center text-xs gap-1 font-semibold" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                  </a>
                  <span className="text-slate-800">|</span>
                  <a href={`mailto:${member.email}`} className="text-slate-500 hover:text-primary-400 transition-colors flex items-center text-xs gap-1 font-semibold">
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section> */}

    </div>
  );
}

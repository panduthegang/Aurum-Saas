import React, { useState } from 'react';
import { TeamMember } from '../types';
import { Button } from '../components/Button';
import Marquee from '../components/Marquee';
import { ArrowRight } from 'lucide-react';

const teamMembers: TeamMember[] = [
  {
    name: "Alexander Vane",
    role: "Founder & Principal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Visionary. Purist. Obsessive."
  },
  {
    name: "Sarah Chen",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Weaving light into stone."
  },
  {
    name: "Marcus Thorne",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Structure is the only truth."
  },
  {
    name: "Elena Rossi",
    role: "Landscape",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Nature is the final architect."
  }
];

const designPillars = [
  {
    title: "Light",
    description: "Light is not merely illumination; it is a material. We sculpt it to create volume, define edges, and manipulate the perception of time within a space.",
    bgImage: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "Void",
    description: "The pause between notes is as important as the music. We design the silence where life happens, creating negative spaces that allow the mind to breathe.",
    bgImage: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "Texture",
    description: "Architecture must be felt. We favor raw, honest materials—rough stone, grain-rich wood, cold steel—that speak to the haptic senses.",
    bgImage: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    title: "Time",
    description: "We build for the next century. Our structures are designed to age with dignity, gathering a patina that records the passage of seasons.",
    bgImage: "https://images.unsplash.com/photo-1516156008625-3a9d60da923c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
];

const AboutPage: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <div className="bg-stone-950 text-stone-50">
      
      {/* Hero Section with BG */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
             alt="Office Interior" 
             className="w-full h-full object-cover opacity-50 animate-zoom-slow"
             // Hero image eagerly loaded
           />
           <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/60 mb-6 block animate-fade-in-up">The Studio</span>
           <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 max-w-4xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             Architects of <br/> the <span className="italic text-stone-400">Sublime</span>.
           </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
           <div className="md:col-span-4">
             <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500 mb-6">Our Manifesto</h2>
           </div>
           <div className="md:col-span-8">
             <p className="text-2xl md:text-4xl font-serif leading-relaxed text-stone-300 mb-12">
               We do not just build structures; we curate experiences. Every line drawn is a decision, every material chosen is a philosophy. We exist to challenge the permanence of stone and the fluidity of light.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-400 leading-loose">
               <p>
                 Aurum was born from a desire to return to the essential. In a world of noise, we design silence. Our approach is deeply rooted in the principles of reductionism, ensuring that what remains is only what is true.
               </p>
               <p>
                 From private residences in the Alps to corporate headquarters in Tokyo, our signature is invisible yet unmistakable. It is the feeling of a space that understands you.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* Interactive Philosophy Section (Refined Layout) */}
      <section className="relative h-screen min-h-[800px] flex items-center bg-stone-950 overflow-hidden border-b border-white/5">
        
        {/* Dynamic Background */}
        {designPillars.map((pillar, idx) => (
           <div 
             key={idx}
             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activePillar === idx ? 'opacity-100' : 'opacity-0'}`}
           >
             <img 
               src={pillar.bgImage} 
               alt={pillar.title} 
               className="w-full h-full object-cover grayscale opacity-40 animate-zoom-slow" 
               loading="lazy"
             />
             <div className="absolute inset-0 bg-stone-950/80 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
           </div>
        ))}
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-center">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full">
             
             {/* Left Column: Context & Dynamic Description */}
             <div className="md:col-span-4 flex flex-col justify-center h-full">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500">02 — Philosophy</span>
                    <span className="h-[1px] w-12 bg-stone-700"></span>
                  </div>
                  
                  <h2 className="text-4xl font-serif text-white mb-12">The Pillars of Creation</h2>
                  
                  <div className="relative h-48">
                    {designPillars.map((pillar, idx) => (
                      <div 
                        key={idx}
                        className={`absolute top-0 left-0 transition-all duration-700 ${activePillar === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      >
                         <p className="text-xl text-stone-300 leading-relaxed font-light border-l-2 border-white/20 pl-6">
                           {pillar.description}
                         </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button variant="ghost" className="text-white hover:text-stone-300 p-0" withArrow>Explore Methodology</Button>
                  </div>
                </div>
             </div>

             {/* Divider Line */}
             <div className="hidden md:block md:col-span-1 h-3/4 border-r border-white/5 mx-auto opacity-50"></div>

             {/* Right Column: Interactive List */}
             <div className="md:col-span-7 h-full flex items-center">
                <ul className="w-full space-y-4">
                  {designPillars.map((pillar, idx) => (
                    <li 
                      key={idx} 
                      onMouseEnter={() => setActivePillar(idx)}
                      className={`cursor-pointer group flex items-center justify-between border-b transition-all duration-500 py-8 ${activePillar === idx ? 'border-white pl-4' : 'border-white/10 hover:border-white/30'}`}
                    >
                      <span className={`text-6xl md:text-8xl font-serif transition-all duration-500 ${activePillar === idx ? 'text-white translate-x-4' : 'text-stone-700 group-hover:text-stone-500'}`}>
                        {pillar.title}
                      </span>
                      <div className="flex items-center gap-4">
                        <span className={`text-xs uppercase tracking-widest transition-opacity duration-300 ${activePillar === idx ? 'opacity-100 text-white' : 'opacity-0'}`}>
                           Explore
                        </span>
                        <ArrowRight className={`w-6 h-6 transition-all duration-300 ${activePillar === idx ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-4'}`} />
                      </div>
                    </li>
                  ))}
                </ul>
             </div>

           </div>
        </div>
      </section>

      {/* Team Section - Grayscale to Color */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-20">
             <h2 className="text-4xl font-serif">The Visionaries</h2>
             <Button variant="outline" className="hidden md:inline-flex border-white/20 text-white">Join Us</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group cursor-none relative">
                <div className="aspect-[3/4] overflow-hidden bg-stone-900 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                     <p className="text-white italic font-serif">"{member.bio}"</p>
                  </div>
                </div>
                <div className="pt-6">
                   <h3 className="text-xl font-serif text-white">{member.name}</h3>
                   <p className="text-xs uppercase tracking-widest text-stone-500 mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Marquee */}
      <Marquee items={["Design", "Architecture", "Planning", "Interiors", "Landscape", "Strategy"]} />

    </div>
  );
};

export default AboutPage;
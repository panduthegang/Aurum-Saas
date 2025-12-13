import React, { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import Marquee from '../components/Marquee';
import { Star, Globe, Clock, MapPin } from 'lucide-react';
import { Accordion } from '../components/Accordion';
import { FaqItem } from '../types';

// Data
const services = [
  { id: 1, title: "Residential", subtitle: "Private Sanctuaries", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, title: "Commercial", subtitle: "Corporate Monuments", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, title: "Restoration", subtitle: "Preserving History", img: "https://images.unsplash.com/photo-1505515714777-a8a29b4764d8?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, title: "Landscape", subtitle: "Organic Integration", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80" }
];

const elements = [
  {
    id: 1,
    title: "Concrete",
    desc: "Raw, honest, and unyielding. We use concrete not just as structure, but as a canvas for light. Its imperfections are its signature.",
    img: "https://fabdiz.com/wp-content/uploads/2023/12/concrete-walls-interior-trend-scandinavian-style-italianbark-1-e1515857457971-1024x683.jpg"
  },
  {
    id: 2,
    title: "Timber",
    desc: "A connection to the organic world. Sustainably sourced oak and cedar that warms the cold precision of modernism and ages with grace.",
    img: "https://sdg-migration-id.s3.amazonaws.com/Interior-Design-Hunan-Slurp-New-Practice-Studio-East-Village-NYC-WEB1-0918.jpg"
  },
  {
    id: 3,
    title: "Glass",
    desc: "The invisible barrier. We engineer frameless apertures that dissolve the boundary between shelter and horizon, inviting the outside in.",
    img: "https://blog.architizer.com/wp-content/uploads/4-71-scaled.jpg"
  },
  {
    id: 4,
    title: "Light",
    desc: "The fourth dimension of architecture. We study the sun's path to choreograph shadows throughout the day, creating living art.",
    img: "https://www.eyrc.com/hubfs/Imported_Blog_Media/Modern-home-interior-filled-with-natural-light-Jan-15-2025-04-13-42-1926-PM.jpg"
  }
];

const faqs: FaqItem[] = [
  { question: "What defines the Aurum aesthetic?", answer: "A relentless pursuit of reduction. We strip away the non-essential to reveal the profound beauty of space, light, and material truth." },
  { question: "How do you handle international commissions?", answer: "We operate a borderless studio model. Our core team in New York collaborates with local artisans worldwide to ensure cultural relevance and logistical precision." },
  { question: "What is the project minimum?", answer: "We specialize in high-stakes, high-impact projects. Our typical engagement starts at $2M for construction value to ensure the fidelity of our vision." },
];

const locations = [
  { 
    city: "New York", 
    country: "USA", 
    coords: "40.7128° N, 74.0060° W", 
    timezone: "America/New_York",
    status: "Active / Design Phase",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
  },
  { 
    city: "London", 
    country: "UK", 
    coords: "51.5074° N, 0.1278° W", 
    timezone: "Europe/London",
    status: "Active / Construction",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
  },
  { 
    city: "Tokyo", 
    country: "Japan", 
    coords: "35.6762° N, 139.6503° E", 
    timezone: "Asia/Tokyo",
    status: "Closed / Night Shift",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
  },
  { 
    city: "Paris", 
    country: "France", 
    coords: "48.8566° N, 2.3522° E", 
    timezone: "Europe/Paris",
    status: "Active / Planning",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
  }
];

const LandingPage: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeLocation, setActiveLocation] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeForZone = (timezone: string) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone,
      hour12: false
    }).format(time);
  };

  return (
    <div className="bg-stone-950 text-stone-50 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-stone-900 relative overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
               className="w-full h-full object-cover animate-zoom-slow opacity-60"
               alt="Hero Architecture"
               // Hero image loads eagerly by default
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-950"></div>
          </div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-between container mx-auto px-6 md:px-12 py-12 md:py-24">
          <div className="flex justify-between items-start pt-20">
             <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-70 border-l border-white/30 pl-4 animate-fade-in-up">
               Est. 2008 — Global
             </span>
          </div>

          <div className="max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-serif mix-blend-overlay opacity-90 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Architecture <br/>
              <span className="italic font-light opacity-80">of the</span> Void
            </h1>
            <div className="flex flex-col md:flex-row items-end gap-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <p className="max-w-md text-sm md:text-base leading-relaxed opacity-70 tracking-wide text-justify">
                We design spaces that exist between the physical and the ethereal. 
                Where structure meets silence, and luxury creates its own gravity.
              </p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                View Selected Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-8 border-y border-white/5 bg-stone-950">
        <Marquee items={["Award Winning Studio", "Sustainable Luxury", "Global Vision", "Timeless Design", "Precision Engineering", "Artistic Integrity"]} />
      </div>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 relative">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500 mb-8">The Philosophy</h2>
            <p className="text-3xl md:text-5xl font-serif leading-tight mb-12 text-stone-200">
              "We believe that a building is not just a shelter, but a <span className="italic text-stone-500">vessel for time</span>. It must age with grace and dignity."
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="block text-4xl font-display mb-1">240</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Projects</span>
              </div>
              <div>
                <span className="block text-4xl font-display mb-1">18</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Intl Awards</span>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full overflow-hidden group">
             <div className="absolute inset-0 bg-stone-800 animate-pulse"></div>
             <img 
               src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Interior Detail" 
               className="relative z-10 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
               loading="lazy"
             />
             <div className="absolute bottom-8 left-8 z-20 bg-white/10 backdrop-blur-md p-4 border border-white/10">
               <span className="block text-xs uppercase tracking-widest mb-1">Case Study</span>
               <span className="font-serif text-xl italic">The Silent House</span>
             </div>
          </div>
        </div>
      </section>

      {/* Interactive Services List */}
      <section className="py-24 bg-stone-900/50 relative border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
             <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500 mb-12 block">Our Expertise</span>
             <div className="space-y-0">
               {services.map((service, idx) => (
                 <div 
                   key={idx}
                   onMouseEnter={() => setActiveService(idx)}
                   className={`py-8 border-b border-white/10 cursor-pointer group transition-all duration-300 ${activeService === idx ? 'opacity-100 pl-4 border-white' : 'opacity-40 hover:opacity-70'}`}
                 >
                   <h3 className="text-4xl md:text-5xl font-serif mb-2">{service.title}</h3>
                   <p className="text-xs uppercase tracking-widest">{service.subtitle}</p>
                 </div>
               ))}
             </div>
          </div>
          <div className="md:w-1/2 relative h-[500px] md:h-auto overflow-hidden">
             {services.map((service, idx) => (
               <div 
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService === idx ? 'opacity-100' : 'opacity-0'}`}
               >
                 <img 
                   src={service.img} 
                   alt={service.title} 
                   className="w-full h-full object-cover grayscale opacity-60 mix-blend-lighten" 
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Elements Accordion - Materiality Section */}
      <section className="h-auto md:h-[80vh] flex flex-col md:flex-row bg-stone-950 border-y border-white/5 overflow-hidden relative z-20">
        {elements.map((el) => (
            <div key={el.id} className="relative flex-1 hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-0 h-[30vh] md:h-full">
                {/* Background Image */}
                <img 
                  src={el.img} 
                  alt={el.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-transparent transition-colors duration-700"></div>
                
                {/* Collapsed Label (Desktop) */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-10">
                    <h3 className="text-3xl font-serif text-white/50 -rotate-90 whitespace-nowrap tracking-[0.5em] uppercase transition-all duration-500 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-10">{el.title}</h3>
                </div>

                 {/* Collapsed Label (Mobile) */}
                <div className="absolute inset-0 md:hidden flex items-center justify-center pointer-events-none z-10 group-hover:opacity-0 transition-opacity">
                    <h3 className="text-2xl font-serif text-white/50 tracking-[0.5em] uppercase">{el.title}</h3>
                </div>

                {/* Expanded Content */}
                <div className="absolute bottom-0 left-0 p-8 md:p-16 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0 w-full bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-4 block border-l-2 border-white pl-4">Materiality 0{el.id}</span>
                    <h3 className="text-5xl md:text-7xl font-serif text-white mb-6">{el.title}</h3>
                    <p className="text-stone-300 max-w-lg text-lg leading-relaxed font-light">{el.desc}</p>
                </div>
            </div>
        ))}
      </section>

      {/* Spacer for Separation */}
      <div className="h-px bg-white/10 w-full"></div>
      
      {/* Visual Gap (Padding Wrapper) - Visible on all screens */}
      <div className="h-24 bg-stone-950 w-full"></div>

      {/* Global Operations - Network Section */}
      <section className="relative min-h-[85vh] h-auto overflow-hidden bg-stone-950 text-white border-b border-white/5">
         
         {/* Backgrounds */}
         {locations.map((loc, idx) => (
           <div 
             key={idx}
             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeLocation === idx ? 'opacity-40' : 'opacity-0'}`}
           >
              <img 
                src={loc.image} 
                className="w-full h-full object-cover grayscale" 
                alt={loc.city} 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone-950/50 mix-blend-multiply"></div>
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
           </div>
         ))}
         
         {/* Grid Overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

         <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center relative z-20 py-24">
            <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
               <div>
                 <div className="flex items-center gap-3 mb-4 text-xs font-bold tracking-[0.3em] uppercase text-stone-500">
                    <Globe className="w-4 h-4 animate-pulse" />
                    Global Operations
                 </div>
                 <h2 className="text-5xl md:text-7xl font-serif">The Network</h2>
               </div>
               <div className="hidden md:block text-right">
                 <p className="text-xs font-mono text-stone-500 uppercase tracking-widest mb-1">System Status</p>
                 <div className="flex items-center gap-2 justify-end">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-sm">Online</span>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {locations.map((loc, idx) => (
                 <div 
                   key={idx}
                   onMouseEnter={() => setActiveLocation(idx)}
                   className={`relative p-8 border border-white/10 bg-stone-950/40 backdrop-blur-sm transition-all duration-500 hover:bg-white/5 group cursor-crosshair ${activeLocation === idx ? 'border-white/40 ring-1 ring-white/10' : ''}`}
                 >
                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 transition-all group-hover:w-full group-hover:h-full group-hover:border-white/10"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>

                    <div className="flex justify-between items-start mb-8">
                       <span className="text-3xl font-serif text-white">{loc.city}</span>
                       <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500">{loc.country}</span>
                    </div>

                    <div className="space-y-4 font-mono text-xs text-stone-400">
                       <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="uppercase tracking-widest flex items-center gap-2">
                             <Clock className="w-3 h-3" /> Local Time
                          </span>
                          <span className="text-white">{getTimeForZone(loc.timezone)}</span>
                       </div>
                       <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="uppercase tracking-widest flex items-center gap-2">
                             <MapPin className="w-3 h-3" /> Coordinates
                          </span>
                          <span>{loc.coords}</span>
                       </div>
                       <div className="flex items-center justify-between pt-2">
                          <span className="uppercase tracking-widest">Status</span>
                          <span className={`text-stone-300 ${activeLocation === idx ? 'text-white' : ''}`}>{loc.status}</span>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 container mx-auto px-6 md:px-12 text-center">
         <Star className="w-6 h-6 text-stone-500 mx-auto mb-12" />
         <h2 className="text-2xl md:text-5xl font-serif leading-snug max-w-4xl mx-auto mb-12">
           "Aurum operates at the intersection of art and engineering. Their work is not just seen, it is felt."
         </h2>
         <p className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500">
           Jonathan Ive, <span className="text-stone-700">Former CDO Apple</span>
         </p>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/5 bg-stone-950">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-3xl font-serif mb-6">Inquiries</h3>
            <p className="text-stone-400 mb-8 text-sm leading-relaxed">
              We accept a limited number of commissions each year to maintain the highest standards of execution.
            </p>
            <Button variant="outline" className="border-white/20 text-white w-full md:w-auto">Start a Project</Button>
          </div>
          <div className="md:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
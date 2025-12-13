import React from 'react';
import { ArrowUpRight, MapPin, Calendar, Maximize, User } from 'lucide-react';
import { Button } from '../components/Button';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  lead: string;
  description: string;
  image: string;
  image2?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Obsidian Villa",
    category: "Residential",
    location: "Kyoto, Japan",
    year: "2023",
    area: "850 m²",
    lead: "A. Vane",
    description: "A monolith of black concrete nestled in the Arashiyama bamboo forest. The structure creates a stark dialogue between the organic chaos of nature and the disciplined silence of the built environment. Features a floating tea room and a subterranean gallery.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
    image2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Aeon Tower",
    category: "Commercial",
    location: "New York, USA",
    year: "2022",
    area: "42,000 m²",
    lead: "S. Chen",
    description: "Redefining the Manhattan skyline with a twisting glass facade that captures the changing light of the Hudson River. The tower prioritizes vertical gardens and communal sky-lobbies, challenging the isolation of traditional skyscrapers.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
    image2: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Desert Void",
    category: "Cultural",
    location: "Joshua Tree, USA",
    year: "2024",
    area: "1,200 m²",
    lead: "M. Thorne",
    description: "An art foundation buried partially underground to escape the desert heat. The architecture acts as a framing device for the sky, with light wells that track the movement of the sun, turning the building into a slow-moving clock.",
    image: "https://images.adsttc.com/media/images/5fe0/faa4/63c0/1783/2e00/0b28/newsletter/01.jpg?1608579701=&utm_source=chatgpt.com",
    image2: "https://parametric-architecture.com/wp-content/uploads/2024/12/ayla-golf-club-desert-architecture-4.webp?utm_source=chatgpt.com"
  },
  {
    id: 4,
    title: "Nordic Maritime Museum",
    category: "Public",
    location: "Oslo, Norway",
    year: "2021",
    area: "5,600 m²",
    lead: "A. Vane",
    description: "Situated on the water's edge, the museum mimics the form of drifting ice. The facade is clad in recycled white aluminum, reflecting the cold nordic sea. Inside, expansive timber halls provide warmth and acoustic perfection.",
    image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&w=2000&q=80",
    image2: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=800&q=80"
  }
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-stone-950 text-stone-50 min-h-screen">
      
      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-end pb-20 border-b border-white/5 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop" 
            alt="Architecture Texture" 
            className="w-full h-full object-cover opacity-40 animate-zoom-slow"
            // Hero image loads eagerly
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/10"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-stone-400 mb-6 block animate-fade-in-up">
             Curated Works
          </span>
          <h1 className="text-7xl md:text-9xl font-serif leading-[0.8] mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            The <span className="text-stone-500 italic">Archive</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="max-w-xl text-stone-300 text-lg leading-relaxed">
              A chronological curation of our most defining moments. Each project represents a unique answer to the question of how we should live.
            </p>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500 border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Total Projects: {projects.length}
            </span>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-screen border-b border-white/5 relative group`}
          >
            
            {/* Image Section - Sticky on Desktop */}
            <div className="lg:w-1/2 h-[60vh] lg:h-screen sticky top-0 overflow-hidden">
               <div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                 loading="lazy"
               />
               
               {/* Secondary Reveal Image */}
               <div className="absolute bottom-8 right-8 w-1/3 aspect-[4/3] overflow-hidden hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0 z-20 border border-white/20 box-border bg-stone-900">
                  <img 
                    src={project.image2 || project.image} 
                    className="w-full h-full object-cover" 
                    alt="Detail" 
                    loading="lazy"
                  />
               </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 bg-stone-950 flex flex-col justify-center p-8 md:p-20 lg:p-24 relative z-20 border-l border-white/5">
              
              {/* Background Number */}
              <span className="absolute top-10 right-10 lg:top-20 lg:right-20 text-[12rem] font-serif leading-none text-white/5 select-none pointer-events-none">
                0{project.id}
              </span>

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <span className="h-px w-12 bg-white/20"></span>
                  <span className="text-xs uppercase tracking-widest text-stone-500">Completed</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight group-hover:text-stone-300 transition-colors duration-500">
                  {project.title}
                </h2>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/10 py-8">
                  <div>
                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-2">
                      <MapPin size={12} /> Location
                    </span>
                    <span className="text-lg font-serif">{project.location}</span>
                  </div>
                  <div>
                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-2">
                      <Calendar size={12} /> Year
                    </span>
                    <span className="text-lg font-serif">{project.year}</span>
                  </div>
                  <div>
                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-2">
                      <Maximize size={12} /> Area
                    </span>
                    <span className="text-lg font-serif">{project.area}</span>
                  </div>
                  <div>
                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-2">
                      <User size={12} /> Lead Architect
                    </span>
                    <span className="text-lg font-serif">{project.lead}</span>
                  </div>
                </div>

                <p className="text-stone-400 text-lg leading-relaxed mb-12 max-w-lg">
                  {project.description}
                </p>

                <Button variant="outline" className="border-white/20 text-white w-full md:w-auto hover:bg-white hover:text-black transition-all duration-300">
                  View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
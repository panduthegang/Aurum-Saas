import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const navigate = Link;

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center relative overflow-hidden text-stone-50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          
          {/* Abstract Image Overlay */}
          <img 
            src="https://images.unsplash.com/photo-1486744360500-13f6e819b9fe?q=80&w=2574&auto=format&fit=crop" 
            alt="Abstract Architecture" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/80 to-stone-950"></div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5"></div>
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/5"></div>
          <div className="absolute top-1/3 left-0 right-0 h-px bg-white/5"></div>
          <div className="absolute bottom-1/3 left-0 right-0 h-px bg-white/5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full">
        
        {/* Large Background Typography */}
        <div className="absolute select-none pointer-events-none opacity-[0.03] mix-blend-difference">
           <h1 className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-serif leading-none tracking-tighter">
             404
           </h1>
        </div>

        {/* Foreground Content */}
        <div className="text-center space-y-8 relative backdrop-blur-sm p-12 border border-white/5 bg-stone-950/30">
             <div className="flex flex-col items-center gap-4">
                 <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                 <span className="text-xs font-bold tracking-[0.5em] uppercase text-stone-500">
                    System Error
                 </span>
             </div>

             <h2 className="text-5xl md:text-7xl font-serif text-white tracking-wide">
               Structural <span className="italic text-stone-500">Anomaly</span>
             </h2>
             
             <p className="text-stone-400 max-w-md mx-auto font-light text-lg leading-relaxed border-l border-white/10 pl-6 text-left">
               The spatial coordinate you are attempting to access has not been constructed or has been reclaimed by the void.
             </p>
             
             <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
                <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white hover:!text-stone-950 min-w-[200px] flex items-center justify-center gap-2"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft className="w-4 h-4" /> Return Home
                </Button>
                
                <button 
                   onClick={() => navigate('/projects')}
                   className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                >
                   View Archive instead
                </button>
             </div>
        </div>
      </div>
      
      {/* Footer Info */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between text-[10px] uppercase tracking-[0.2em] text-stone-600 z-10 hidden md:flex">
         <span>Error Code: 404_NOT_FOUND</span>
         <span>Aurum Architects</span>
         <span>Coordinates: Unknown</span>
      </div>

    </div>
  );
};

export default NotFoundPage;
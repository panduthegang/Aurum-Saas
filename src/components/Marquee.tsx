import React from 'react';

interface MarqueeProps {
  items: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {items.map((item, index) => (
            <span key={index} className="mx-12 text-sm uppercase tracking-[0.3em] font-medium flex items-center text-stone-500 opacity-60">
              {item} <span className="ml-12 w-1 h-1 bg-stone-700 rounded-full"></span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <span key={`dup-${index}`} className="mx-12 text-sm uppercase tracking-[0.3em] font-medium flex items-center text-stone-500 opacity-60">
              {item} <span className="ml-12 w-1 h-1 bg-stone-700 rounded-full"></span>
            </span>
          ))}
           {items.map((item, index) => (
            <span key={`dup2-${index}`} className="mx-12 text-sm uppercase tracking-[0.3em] font-medium flex items-center text-stone-500 opacity-60">
              {item} <span className="ml-12 w-1 h-1 bg-stone-700 rounded-full"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

export const Accordion: React.FC<{ items: FaqItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border-b border-white/10 last:border-0"
        >
          <button
            className="w-full py-10 flex items-center justify-between text-left group"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 ${openIndex === index ? 'text-white italic' : 'text-stone-400 group-hover:text-white'}`}>
              {item.question}
            </span>
            <span className={`transform transition-transform duration-300 border border-white/20 rounded-full p-2 ${openIndex === index ? 'rotate-180 bg-white text-black' : 'text-stone-400'}`}>
              {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100 mb-10' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-stone-400 leading-relaxed pr-8 max-w-2xl font-light text-lg">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
import React, { useState } from 'react';
import { VocabItem } from '../types';
import { RefreshCw } from 'lucide-react';

interface FlipCardProps {
  item: VocabItem;
}

const FlipCard: React.FC<FlipCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Dynamic Styles based on item properties
  const cardBgStyle = item.color ? { backgroundColor: item.color } : {};
  const textColorClass = item.text === 'white' ? 'text-white' : 'text-gray-900';
  const subTextColorClass = item.text === 'white' ? 'text-white/80' : 'text-gray-600';
  const borderColorClass = item.border ? 'border-gray-300' : 'border-gray-200';

  return (
    <div 
      className="group h-64 w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative h-full w-full text-center transition-transform duration-500 transform-style-3d shadow-lg rounded-xl border ${borderColorClass} ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Face */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center backface-hidden rounded-xl ${!item.color ? 'bg-white' : ''} p-4`}
          style={cardBgStyle}
        >
          {item.icon && <div className="text-4xl mb-4">{item.icon}</div>}
          <h3 className={`text-2xl font-bold ${textColorClass}`}>{item.it}</h3>
          <p className={`text-sm font-semibold mt-2 ${subTextColorClass}`}>{item.es}</p>
          <p className="font-mono text-xs mt-2 text-[#FFD700] uppercase bg-black/10 px-2 py-1 rounded">[{item.pron}]</p>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
             <span className="bg-[#006400] text-white text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                Ver Frase <RefreshCw size={12} />
             </span>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 flex flex-col items-center justify-center backface-hidden rotate-y-180 bg-[#006400] text-white rounded-xl p-6">
          <p className="text-xs uppercase tracking-widest text-[#3CB371] mb-2 font-bold">Frase de Ejemplo</p>
          <p className="text-lg italic mb-3 font-light text-center leading-tight">"{item.fraseIt || item.context}"</p>
          
          <p className="font-mono text-xs text-[#FFD700] uppercase mb-4 opacity-80">[{item.frasePron || '...'}]</p>
          
          <p className="text-xs uppercase tracking-widest text-[#3CB371] mb-1 font-bold">(Significado)</p>
          <p className="text-sm font-medium text-[#FACC15] text-center">"{item.fraseEs || item.context}"</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
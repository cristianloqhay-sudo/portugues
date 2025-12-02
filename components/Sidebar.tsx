import React from 'react';
import { MENU_ITEMS } from '../constants';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  isOpen: boolean;
  onClose: () => void;
  visitedCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, isOpen, onClose, visitedCount }) => {
  const totalModules = MENU_ITEMS.filter(i => i.id !== 'home' && i.id !== 'quiz').length;
  const progressPercent = Math.min(100, Math.round((visitedCount / totalModules) * 100));

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Container */}
      <nav 
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-[#006400] text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-full flex flex-col shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-[#3CB371]/30">
          <h1 className="text-2xl font-bold tracking-wide leading-tight">
            🇧🇷 Portugués<br/>
            <span className="text-sm font-normal text-[#C5D0E3] block mt-1">para el Uso Diario</span>
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-1 custom-scrollbar">
          {MENU_ITEMS.map((item) => {
            const isActive = currentView === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  if (window.innerWidth < 768) onClose();
                }}
                className={`w-full text-left px-6 py-3.5 flex items-center gap-3 transition-all duration-200 relative
                  ${isActive 
                    ? 'bg-[#1A803B] text-white font-semibold' 
                    : 'text-gray-100 hover:bg-[#1A803B]/50 hover:text-white'
                  }
                `}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FFD700]"></div>
                )}
                <Icon size={20} className={isActive ? 'text-[#FFD700]' : 'text-gray-300'} />
                <span className={isActive ? '' : 'font-light'}>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Progress Footer */}
        <div className="p-6 bg-[#185331] mt-auto border-t border-[#3CB371]/20">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs text-[#C5D0E3] font-medium">Progreso de sesión</span>
            <span className="text-xs text-[#FFD700] font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full bg-[#004d00] rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-[#FFD700] h-full rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-center mt-2 text-[#C5D0E3] opacity-70">
            {visitedCount}/{totalModules} Temas explorados
          </p>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
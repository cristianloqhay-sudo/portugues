import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FlipCard from './components/FlipCard';
import Quiz from './components/Quiz';
import { CATEGORIES } from './constants';
import { ViewState } from './types';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [visitedModules, setVisitedModules] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    if (view !== 'home' && view !== 'quiz') {
      setVisitedModules(prev => new Set(prev).add(view));
    }
  };

  const renderContent = () => {
    if (currentView === 'home') {
      return <Dashboard onNavigate={handleNavigate} />;
    }
    
    if (currentView === 'quiz') {
      return <Quiz />;
    }

    const category = CATEGORIES[currentView];
    if (category) {
      return (
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="mb-8 border-b border-gray-200 pb-6">
            <h2 className="text-3xl font-bold text-[#006400] mb-2">{category.title}</h2>
            <p className="text-gray-600 text-lg">{category.desc}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-8">
            {category.items.map((item, index) => (
              <FlipCard key={`${currentView}-${index}`} item={item} />
            ))}
          </div>
        </div>
      );
    }

    return <div>View Not Found</div>;
  };

  return (
    <div className="flex h-screen bg-[#F7FFF7] text-gray-800 overflow-hidden font-sans">
      <Sidebar 
        currentView={currentView} 
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        visitedCount={visitedModules.size}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="md:hidden bg-[#006400] text-white p-4 flex justify-between items-center z-10 shadow-md flex-none">
          <h1 className="text-lg font-bold flex items-center gap-2">
            🇧🇷 Léxico Portugués
          </h1>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12 scroll-smooth">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CATEGORIES } from '../constants';
import { Instagram, Facebook, Music, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface DashboardProps {
    onNavigate: (view: ViewState) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const chartData = Object.values(CATEGORIES).map(cat => ({
    name: cat.title.split(' ')[0],
    value: cat.items.length
  }));

  const COLORS = ['#006400', '#1A803B', '#3CB371', '#66CDAA', '#FFD700', '#DAA520', '#B8860B'];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-sm border-l-4 border-[#006400] p-6 md:p-8">
        <h2 className="text-3xl font-bold text-[#006400] mb-3">Bem-vindo! ¡Bienvenido!</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Esta aplicación interactiva está diseñada para ayudarte a dominar el vocabulario 
          <span className="font-bold text-[#006400]"> portugués</span> esencial. 
          Selecciona una categoría para comenzar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Info Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#FFD700] flex flex-col justify-center">
          <h3 className="font-bold text-xl mb-6 text-[#006400] flex items-center gap-2">
            <BookOpen size={24} className="text-[#FFD700]" />
            Cómo usar esta App
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="bg-green-100 text-[#006400] rounded-full p-1 mt-0.5"><ArrowRight size={14} /></span>
              <span>Navega por los temas usando el menú lateral.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-100 text-[#006400] rounded-full p-1 mt-0.5"><ArrowRight size={14} /></span>
              <span><strong>Haz clic en las tarjetas</strong> para girarlas y ver la frase de ejemplo.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-green-100 text-[#006400] rounded-full p-1 mt-0.5"><ArrowRight size={14} /></span>
              <span>Practica en voz alta usando la guía fonética.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-yellow-100 text-[#B8860B] rounded-full p-1 mt-0.5"><ArrowRight size={14} /></span>
              <span className="font-bold text-[#006400]">¡Haz el Test de Vocabulario para evaluar tu nivel!</span>
            </li>
          </ul>
          
          <button 
             onClick={() => onNavigate('quiz')}
             className="mt-8 w-full bg-[#006400] text-white py-3 rounded-lg font-bold hover:bg-[#004d00] transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            Ir al Test Ahora <ArrowRight size={18} />
          </button>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center min-h-[350px]">
          <h3 className="font-bold text-lg mb-4 text-[#006400]">Composición del Vocabulario</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value} palabras`, 'Cantidad']}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '20px', fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Social & CTA */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-8 text-center shadow-inner border border-gray-200">
        <h3 className="text-[#006400] font-bold text-2xl mb-2">¡Únete a la Comunidad!</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Síguenos en redes para más tips y contenido gratuito, o da el siguiente paso en tu aprendizaje.</p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="https://www.instagram.com/lexigo2.0/" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Instagram size={28} />
                </div>
                <span className="text-xs font-bold text-gray-600">Instagram</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583705050960" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Facebook size={28} />
                </div>
                <span className="text-xs font-bold text-gray-600">Facebook</span>
            </a>
            <a href="https://www.tiktok.com/@lexigo2.0" target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Music size={28} />
                </div>
                <span className="text-xs font-bold text-gray-600">TikTok</span>
            </a>
        </div>

        <a 
          href="https://go.hotmart.com/B103170175D" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center justify-center w-full md:w-auto bg-[#FFD700] text-[#006400] text-lg font-extrabold py-4 px-10 rounded-xl shadow-xl hover:bg-[#DAA520] hover:text-white transition-all transform hover:-translate-y-1"
        >
          <BookOpen className="mr-3" size={24} />
          Iniciar Curso Digital
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
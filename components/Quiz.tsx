import React, { useState, useEffect } from 'react';
import { CATEGORIES } from '../constants';
import { QuizQuestion, VocabItem } from '../types';
import { ExternalLink, RefreshCcw } from 'lucide-react';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Helper to shuffle array
  const shuffle = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const generateQuiz = () => {
    const allItems: VocabItem[] = [];
    Object.values(CATEGORIES).forEach(cat => allItems.push(...cat.items));

    // Get 10 random items
    const shuffledItems = shuffle(allItems).slice(0, 10);

    const newQuestions: QuizQuestion[] = shuffledItems.map(item => {
      const isPhraseQuestion = Math.random() < 0.5 && item.fraseIt && item.fraseEs;
      
      let questionText = `Traduce la palabra: "${item.it}"`;
      let correctAnswer = item.es;
      let optionsPool = allItems.filter(v => v.es !== item.es).map(v => v.es);

      if (isPhraseQuestion) {
        questionText = `Si alguien dice: "${item.fraseIt}", ¿cuál es el significado?`;
        correctAnswer = item.fraseEs;
        optionsPool = allItems.filter(v => v.fraseEs !== item.fraseEs && v.fraseEs).map(v => v.fraseEs);
      }

      // Select 2 random distractors
      const distractors = shuffle(optionsPool).slice(0, 2);
      const options = shuffle([correctAnswer, ...distractors]);

      return {
        question: questionText,
        correctAnswer,
        options
      };
    });

    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  useEffect(() => {
    generateQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  if (questions.length === 0) return <div className="p-8 text-center">Cargando test...</div>;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    let feedback = 'Necesitas práctica.';
    if (percentage >= 80) feedback = '¡Excelente dominio!';
    else if (percentage >= 50) feedback = '¡Vas por buen camino!';

    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg border-t-4 border-[#006400] text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-[#006400] mb-4">¡Test Completado!</h2>
        <div className="mb-6">
          <p className="text-gray-600 mb-2">Tu puntuación final:</p>
          <div className="text-6xl font-extrabold text-[#FFD700] mb-2">{score}/{questions.length}</div>
          <p className="text-xl font-medium text-[#006400]">{feedback}</p>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-8">
          <h4 className="text-lg font-bold text-[#006400] mb-2">¿Quieres dominar el portugués?</h4>
          <p className="text-gray-600 mb-4">Accede al curso completo con audio nativo y ejercicios avanzados.</p>
          <a 
            href="https://go.hotmart.com/B103170175D" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#006400] font-bold py-3 px-8 rounded-lg shadow-md hover:bg-[#DAA520] hover:text-white transition-all transform hover:scale-105"
          >
            Iniciar Curso Digital <ExternalLink size={20} />
          </a>
        </div>

        <button 
          onClick={generateQuiz}
          className="flex items-center justify-center gap-2 mx-auto text-gray-500 hover:text-[#006400] font-medium transition-colors"
        >
          <RefreshCcw size={18} /> Reiniciar Test
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border-t-4 border-[#006400] overflow-hidden">
        <div className="p-6 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
          <span className="font-bold text-gray-500">Pregunta {currentIndex + 1} de {questions.length}</span>
          <span className="text-[#006400] font-bold">Puntos: {score}</span>
        </div>
        
        <div className="p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#006400] mb-8 leading-relaxed">
            {currentQ.question}
          </h3>

          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              let btnClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 font-medium text-lg ";
              
              if (isAnswered) {
                if (option === currentQ.correctAnswer) {
                  btnClass += "bg-green-100 border-green-500 text-green-800";
                } else if (option === selectedOption) {
                  btnClass += "bg-red-100 border-red-500 text-red-800";
                } else {
                  btnClass += "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
                }
              } else {
                btnClass += "bg-white border-gray-200 hover:border-[#FFD700] hover:bg-yellow-50 text-gray-700 hover:shadow-md cursor-pointer";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  disabled={isAnswered}
                  className={btnClass}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="h-2 bg-gray-100 w-full">
           <div 
             className="h-full bg-[#FFD700] transition-all duration-500 ease-out"
             style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
           ></div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
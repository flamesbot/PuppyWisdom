import React, { useState } from 'react';
import { puppyQuotes } from './quotes';
import { Sparkles, Brain } from 'lucide-react';

export default function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [quote, setQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * puppyQuotes.length);
    return puppyQuotes[randomIndex];
  };

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setQuote(getRandomQuote());
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }, 1000);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isAnimating ? 'bg-gradient-to-br from-indigo-100 via-purple-100 to-fuchsia-100' : 'bg-slate-50'} flex flex-col items-center justify-center p-4 relative overflow-hidden`}>
      {/* Meditation circles */}
      <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isAnimating ? 'opacity-30' : 'opacity-0'}`}>
        <div className="w-[600px] h-[600px] rounded-full border border-indigo-300 animate-ripple-1"></div>
        <div className="w-[500px] h-[500px] rounded-full border border-purple-300 animate-ripple-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-[400px] h-[400px] rounded-full border border-indigo-200 animate-ripple-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="text-center relative z-10 w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-all duration-300 overflow-hidden mb-8 border border-white/20">
          <div className="relative h-64 bg-gradient-to-b from-indigo-50/50 to-purple-50/50 p-6 flex flex-col justify-end">
            <div className={`puppy-face drop-shadow-lg transition-transform duration-1000 ${isAnimating ? 'scale-90' : 'scale-100'}`}>
              <div className="relative mx-auto w-48 -mb-4">
                {/* Ears */}
                <div className="absolute -top-8 -left-6 w-12 h-16 bg-amber-800 rounded-t-[2rem] transform -rotate-12"></div>
                <div className="absolute -top-8 -right-6 w-12 h-16 bg-amber-800 rounded-t-[2rem] transform rotate-12"></div>
                {/* Inner Ears */}
                <div className="absolute -top-6 -left-4 w-8 h-12 bg-amber-700 rounded-t-[1.5rem] transform -rotate-12"></div>
                <div className="absolute -top-6 -right-4 w-8 h-12 bg-amber-700 rounded-t-[1.5rem] transform rotate-12"></div>
                {/* Face */}
                <div className="w-48 h-40 bg-amber-800 rounded-2xl">
                  {/* White Face Patch */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-amber-100 rounded-2xl"></div>
                  {/* Eyes */}
                  <div className={`eyes transition-all duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="absolute top-14 left-12 w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                    </div>
                    <div className="absolute top-14 right-12 w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                    </div>
                    {['left', 'right'].map((side) => (
                      <div key={`eye-${side}`} className={`absolute top-14 ${side === 'left' ? 'left-12' : 'right-12'} w-6 h-6 bg-[#3E2723] rounded-full flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                      </div>
                    ))}
                  </div>
                  {/* Nose */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-stone-900 rounded-[1rem]"></div>
                  {/* Mouth */}
                  <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 w-16 h-8 border-b-4 border-stone-900 rounded-b-full transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              <Sparkles className="w-6 h-6 text-purple-500" />
              Puppy Wisdom
              <Sparkles className="w-6 h-6 text-indigo-500" />
            </h1>
            
            <button
              onClick={handleClick}
              disabled={isAnimating}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl py-4 px-6 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
            >
              <Brain className="w-5 h-5" />
              {isAnimating ? 'Contemplating Void...' : 'Seek Validation'}
            </button>
            
            <div className={`mt-6 transition-all duration-500 ease-out ${quote ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
              <p className="text-xl text-slate-700 font-medium leading-relaxed italic border-l-4 border-purple-300 pl-4 py-1 text-left">{quote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

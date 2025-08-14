'use client';

import { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoadingComplete?: () => void;
  duration?: number;
  className?: string;
}

const JKSkyPreloader = ({ 
  onLoadingComplete, 
  duration = 4000,
  className = "" 
}: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    // Complete loading after duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 500); // Wait for fade out animation
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center
      bg-gradient-to-br from-slate-800 via-slate-900 to-black
      transition-opacity duration-500 ease-out
      ${!isVisible ? 'opacity-0' : 'opacity-100'}
      ${className}
    `}>
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative text-center">
        {/* Glow Effect */}
        <div className="absolute -inset-10 bg-gradient-radial from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-xl animate-pulse" />
        
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Main Logo */}
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wider z-100">
              <span className="inline-block text-white transform transition-all duration-1000 ease-out animate-[slideInLeft_1s_ease-out]">
                JK
              </span>
              <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent transform transition-all duration-1000 ease-out animate-[slideInRight_1s_ease-out_0.3s_both]">
                SKY
              </span>
            </h1>
            
            {/* Lightning Bolt */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-16 md:w-10 md:h-20 z-10">
              <svg 
                viewBox="0 0 24 48" 
                className="w-full h-full animate-[lightningStrike_2s_infinite_ease-in-out_1s]"
              >
                <path 
                  d="M12 2 L7 20 L14 20 L9 46 L17 28 L11 28 L12 2 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-40 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-white/90 text-sm md:text-base tracking-[0.3em] font-light mb-10 opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_both]">
          YOUR SAFETY, OUR PRIORITY
        </div>

        {/* Loading Bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white/70 text-xs md:text-sm tracking-[0.2em] font-light animate-pulse">
          LOADING...
        </div>

        {/* Progress Percentage */}
        <div className="mt-4 text-blue-400 text-sm font-medium opacity-0 animate-[fadeIn_1s_ease-out_2s_both]">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes lightningStrike {
          0%, 90%, 100% {
            opacity: 0.8;
            filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.8));
          }
          5%, 15% {
            opacity: 1;
            filter: drop-shadow(0 0 15px rgba(59, 130, 246, 1)) drop-shadow(0 0 25px rgba(34, 211, 238, 0.6));
          }
          10% {
            opacity: 0.4;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default JKSkyPreloader;
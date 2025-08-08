'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: 'Innovative Manufacturing',
    description: 'Delivering precision and quality with every product we create.',
    image: 'https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg',
  },
  {
    id: 2,
    title: 'Technology at Core',
    description: 'We integrate advanced tech to boost efficiency and performance.',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg',
  },
  {
    id: 3,
    title: 'Sustainability Driven',
    description: 'Eco-friendly practices are embedded in our production.',
    image: 'https://images.pexels.com/photos/2965260/pexels-photo-2965260.jpeg',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden border-t-2 border-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-blue-500/30 z-10" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 md:p-10 z-20">
            <h1 className="text-2xl md:text-5xl font-bold">{slide.title}</h1>
            <p className="mt-4 text-sm md:text-lg max-w-xl">{slide.description}</p>
            <button className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

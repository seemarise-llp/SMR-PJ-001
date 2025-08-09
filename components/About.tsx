'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects' },
  { value: 50, suffix: '+', label: 'Countries' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

export default function AboutSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1500; // animation time in ms
    const frameRate = 24; // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(stat.value * progress);
          return newCounts;
        });
        if (frame === totalFrames) {
          clearInterval(counter);
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.value;
            return newCounts;
          });
        }
      }, 1000 / frameRate);
    });
  }, []);

  return (
    <section className="bg-white py-12 lg:py-16 pt-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6">
        
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2b6c] mb-6">
            About JK SKY GROUP
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
            For over two decades, JK SKY GROUP has been at the forefront of the manufacturing industry, delivering exceptional quality products and innovative solutions to clients worldwide.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
            Our state-of-the-art facilities and expert team of engineers and technicians work tirelessly to ensure that every product we create meets the highest standards of precision, durability, and performance.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base">
            We pride ourselves on our commitment to sustainable manufacturing practices, cutting-edge technology, and unparalleled customer service. When you choose JK SKY GROUP, you're choosing a partner dedicated to your success.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#1f2b6c]">
                  {counts[i]}
                  {stat.suffix}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="bg-[#1f2b6c] text-white px-6 py-3 rounded-md shadow hover:bg-black transition">
            Learn More About Us
          </button>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative w-full">
          <div className="relative w-full h-64 sm:h-[380px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg"
              alt="Factory"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[-2rem] left-[-1rem] sm:bottom-[-2rem] sm:left-[-2rem] w-40 h-28 sm:w-56 sm:h-40 rounded-lg overflow-hidden shadow-lg border-1">
            <Image
              src="https://images.pexels.com/photos/4484042/pexels-photo-4484042.jpeg"
              alt="Manufacturing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

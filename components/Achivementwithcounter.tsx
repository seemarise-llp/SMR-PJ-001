"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  number: number;
  suffix?: string;
  label: string;
}

const stats: Stat[] = [
  { number: 20, suffix: "+", label: "Years in Business" },
  { number: 100, suffix: "+", label: "Global Clients" },
  { number: 15, suffix: "", label: "Countries Served" },
  { number: 500, suffix: "+", label: "Projects Completed" },
];

export default function OurAchievements() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-[#0a2150] to-[#0a68ff] py-16"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-10">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <h3 className="text-4xl font-bold">
                {visible ? <Counter target={stat.number} /> : 0}
                {stat.suffix}
              </h3>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // animation duration in ms
    const increment = Math.ceil(target / (duration / 16)); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
}

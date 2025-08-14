import AboutSection from "@/components/About";
import { FaCertificate, FaLightbulb, FaHandshake, FaLeaf } from "react-icons/fa";
import OurAchievements from "@/components/Achivementwithcounter";
import type { Metadata } from "next";
import Image from "next/image";
import CallToAction from "@/components/CalltoAction";

export const metadata: Metadata = {
  title: "About",
  description: "About page of the website",
};

export default function About() {
  const values = [
    {
      icon: <FaCertificate className="text-[#0a2150] text-2xl" />,
      title: "Quality",
      description:
        "We are committed to excellence in every product and service we deliver.",
    },
    {
      icon: <FaLightbulb className="text-[#0a2150] text-2xl" />,
      title: "Innovation",
      description:
        "We continuously seek new technologies and methods to improve our solutions.",
    },
    {
      icon: <FaHandshake className="text-[#0a2150] text-2xl" />,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical business practices.",
    },
    {
      icon: <FaLeaf className="text-[#0a2150] text-2xl" />,
      title: "Sustainability",
      description:
        "We prioritize environmentally responsible manufacturing processes.",
    },
  ];
  const milestones = [
    {
      year: "2002",
      title: "Company Founded",
      description:
        "JK SKY GROUP was established with a focus on local manufacturing solutions.",
    },
    {
      year: "2008",
      title: "International Expansion",
      description:
        "Opened our first international office and began serving clients across Asia.",
    },
    {
      year: "2012",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001 and ISO 14001 certifications for our quality and environmental management systems.",
    },
    {
      year: "2018",
      title: "Technology Innovation",
      description:
        "Launched our advanced automation division and integrated IoT solutions into our manufacturing processes.",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description:
        "Named one of the top manufacturing companies in the industry with operations in 15 countries.",
    },
  ];
  return <>
  <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-left bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg')" }} // place image in /public
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60"></div>

      {/* Text Content */}
      <div className="relative text-left ml-auto md:ml-50 text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          About JK SKY GROUP
        </h1>
        <p className="text-sm md:text-lg mt-2">
          Precision Manufacturing | Global Partnerships
        </p>
      </div>
    </section>
    {/* <AboutSection></AboutSection> */}
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        
        {/* Left Side - Image */}
        <div className="flex-1">
          <Image
            src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg" // change to your actual image path
            alt="Our Story"
            width={800}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#0a2150] mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Founded in 2002, JK SKY GROUP has grown from a small local manufacturer
            to a global leader in precision manufacturing. Our journey began with
            a simple mission: to deliver high-quality manufacturing solutions with
            integrity and innovation.
          </p>

          <h3 className="text-xl font-semibold text-[#1A4DB4] mb-2">Our Vision</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            To be the world's most trusted partner for innovative manufacturing
            solutions that drive industrial progress and sustainability.
          </p>

          <h3 className="text-xl font-semibold text-[#1A4DB4] mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            We strive to exceed client expectations through precision engineering,
            technological innovation, and exceptional service while maintaining the
            highest standards of quality and environmental responsibility.
          </p>
        </div>
      </div>
    </section>   
     {/* Core Values */}
    <section className="bg-[#f9fbff] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0a2150] mb-12">
          Our Core Values
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-[0_0_20px_3px_rgba(56,189,248,0.6)] transition-shadow duration-300"
            >
              <div className="flex justify-center items-center w-12 h-12 mx-auto mb-4 bg-[#e8f0ff] rounded-full">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0a2150] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* <Achievements /> */}
    <OurAchievements />
    {/* Milestones */}
     <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0a2150] mb-12">
          Our Journey
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-4 border-[#68A7F5]"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`mb-12 flex items-start ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="w-1/2 px-6">
                <h3 className="text-[#0a68ff] font-bold">{milestone.year}</h3>
                <h4 className="font-semibold text-gray-800">
                  {milestone.title}
                </h4>
                <p className="text-gray-600 mt-1">{milestone.description}</p>
              </div>

              {/* Dot */}
              <div className="relative flex items-center justify-center">
                <div className="w-4 h-4 bg-[#0a68ff] rounded-full z-10"></div>
              </div>

              {/* Empty side */}
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  
    {/* CTA */}
    <CallToAction
  title="Partner with Us for Your Next Project"
  description="Experience the JK SKY GROUP difference with our precision manufacturing and innovative solutions tailored to your needs."
  buttonText="Get In Touch"
/>

  </>;
}
// components/AboutBanner.tsx
'use client';

import { FC } from 'react';
import {
  Cog6ToothIcon,
  BuildingOffice2Icon,
  CubeTransparentIcon,
  PencilSquareIcon,
  ShieldCheckIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  icon: FC<{ className?: string }>;
}

const services: Service[] = [
  {
    title: 'CNC Machining',
    description:
      'Precision machining services with state-of-the-art CNC technology for complex components',
    icon: Cog6ToothIcon,
  },
  {
    title: 'Automation Solutions',
    description:
      'Customized industrial automation systems to enhance productivity and efficiency',
    icon: CubeTransparentIcon,
  },
  {
    title: 'Metal Fabrication',
    description:
      'Expert metal fabrication services for diverse industrial applications',
    icon: BuildingOffice2Icon,
  },
  {
    title: 'Engineering Design',
    description:
      'Comprehensive design services from concept to production-ready specifications',
    icon: PencilSquareIcon,
  },
  {
    title: 'Quality Testing',
    description:
      'Rigorous quality assurance and testing to ensure product reliability',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Logistics Support',
    description:
      'End-to-end logistics solutions for efficient product delivery worldwide',
    icon: TruckIcon,
  },
];

const CoreServices: FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Core Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Comprehensive manufacturing solutions tailored to meet your specific industry requirements
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-transparent hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.6)] transition-all duration-300 text-left"
            >
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;

'use client';

import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-white text-gray-900 px-6 py-12 md:px-16 lg:px-24 flex flex-col items-center justify-center lg:flex-row gap-12">
      {/* Left Form */}
      <div className="w-full max-w-2xl mr-auto ml-auto">
        <h2 className="text-3xl font-bold text-[#1C2E56] mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions about our products or services? Our team is here to help. Fill out the form and we’ll get back to you as soon as possible.
        </p>

        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input type="text" placeholder="Name" className="w-full border px-4 py-2 rounded-md" />
            <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md" />
          </div>
          <input type="text" placeholder="Subject" className="w-full border px-4 py-2 rounded-md" />
          <textarea rows={5} placeholder="Message" className="w-full border px-4 py-2 rounded-md resize-none" />

          <button
            type="submit"
            className="bg-[#1C2E56] text-white px-6 py-2 rounded-md hover:bg-[#162447] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Info Card */}
      <div className="bg-[#f7f9fc] p-8 rounded-lg shadow-md max-w-sm w-full mr-auto">
        <h3 className="text-xl font-semibold text-[#1C2E56] mb-6">Contact Information</h3>

        <ul className="space-y-6 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1"><MapPin /></span>
            <div className=' ml-4'>
              <p className="font-medium text-[#1C2E56]">Address</p>
              <p>123 Manufacturing Way<br />Industrial District New<br />York, NY 10001</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1"><Phone /></span>
            <div className=' ml-4'>
              <p className="font-medium text-[#1C2E56]">Phone</p>
              <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1"><Mail /></span>
            <div className=' ml-4'>
              <p className="font-medium text-[#1C2E56]">Email</p>
              <p>info@jkskygroup.com<br />sales@jkskygroup.com</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-blue-600 mt-1"><Clock /></span>
            <div className=' ml-4'>
              <p className="font-medium text-[#1C2E56]">Working Hours</p>
              <p>Monday - Friday: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 1:00 PM<br />Sunday: Closed</p>
            </div>
          </li>
        </ul>

        {/* Social Links */}
        <div className="mt-6">
          <p className="font-medium text-[#1C2E56] mb-2">Follow Us</p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-500 hover:text-blue-700"><FaFacebookF /></a>
            <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaLinkedinIn /></a>
            <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

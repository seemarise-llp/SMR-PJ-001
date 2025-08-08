'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NAV_ITEMS = [
  {
    label: 'Product',
    dropdown: [
      { label: 'Analytics', href: '#' },
      { label: 'Engagement', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  { label: 'Features', href: '#' },
  { label: 'Marketplace', href: '#' },
  { label: 'Company', href: '#' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.2 p-1.5" aria-label="Home">
            <div className="flex items-center">
            <span className="text-4xl font-[1000] text-blue-950">JK</span>
            <span className="text-4xl font-[1000] text-sky-400 ml-1">SKY</span>
          </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center gap-x-1 text-base font-semibold text-gray-900"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                >
                  {item.label}
                  <ChevronDownIcon className="h-5 mt-1 w-5 font-[1000] text-gray-700 group-hover:text-gray-900" />
                </button>
                <div className="absolute left-0 mt-2 hidden w-56 rounded-md bg-white p-2 shadow-lg group-hover:block z-50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="text-base font-semibold text-gray-900"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Login (desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.2 p-1.2" aria-label="Home">
            <div className="flex items-center">
            <span className="text-4xl font-[1000] text-blue-950">JK</span>
            <span className="text-4xl font-[1000] text-sky-400 ml-1">SKY</span>
          </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-1000 inline-flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            {NAV_ITEMS.map((item) =>
              item.dropdown ? (
                <details key={item.label} className="group">
                  <summary className="flex w-full items-center justify-between cursor-pointer text-base font-semibold text-gray-900 hover:bg-gray-50 p-2 rounded-md">
                    {item.label}
                  </summary>
                  <div className="pl-4 space-y-2 mt-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block text-sm text-gray-700 hover:bg-gray-50 p-2 rounded-md"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block text-base font-semibold text-gray-900 hover:bg-gray-50 p-2 rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="#"
              className="block text-base font-semibold text-gray-900 hover:bg-gray-50 p-2 rounded-md"
            >
              Log in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

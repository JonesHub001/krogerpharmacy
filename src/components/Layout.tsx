import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Order Now', href: '/order' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'About Us', href: '/about' },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="flex items-center space-x-2">
                <ShieldCheckIcon className="h-8 w-8 text-purple-600" />
                <span className="text-xl font-semibold text-gray-900">Kroger Pharmacy</span>
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* Sign-in button removed */}
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="flex items-center space-x-2">
                  <ShieldCheckIcon className="h-8 w-8 text-purple-600" />
                  <span className="text-xl font-semibold text-gray-900">Kroger</span>
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Main content */}
      <main className="min-h-screen pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2025 Kroger Pharmacy. Licensed and regulated pharmacy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
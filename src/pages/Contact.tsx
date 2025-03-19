
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <motion.div 
        className="relative isolate overflow-hidden bg-gradient-to-b from-purple-100/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions? Our team is here to help you on your journey to better health.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact information */}
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <PhoneIcon className="h-12 w-12 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-600">Mon-Fri, 8am-8pm EST</p>
            <p className="mt-2 text-lg font-medium text-purple-600">(555) 123-4567</p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <EnvelopeIcon className="h-12 w-12 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">24/7 Support</p>
            <p className="mt-2 text-lg font-medium text-purple-600">support@krogerpharmacy.com</p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <MapPinIcon className="h-12 w-12 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Location</h3>
            <p className="mt-2 text-gray-600">Main Office</p>
            <p className="mt-2 text-lg font-medium text-purple-600">123 Health Street, Medical District</p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg">
            <ClockIcon className="h-12 w-12 text-purple-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Hours</h3>
            <div className="mt-2 space-y-1 text-gray-600">
              <p>Mon-Fri: 8am-8pm</p>
              <p>Sat: 9am-6pm</p>
              <p>Sun: 10am-4pm</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact form */}
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="px-6 py-12 sm:p-12">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

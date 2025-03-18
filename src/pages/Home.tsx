import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';
import LiveOrderLedger from '../components/Home/LiveOrderLedger';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    name: 'Mounjaro',
    genericName: 'Tirzepatide',
    doses: ['2.5mg', '5mg', '7.5mg', '10mg', '12.5mg', '15mg'],
    description: 'A revolutionary treatment for weight management, helping you achieve your health goals.',
    imageSrc: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Wegovy',
    genericName: 'Semaglutide',
    doses: ['0.25mg', '0.5mg', '1mg', '1.7mg', '2.4mg'],
    description: 'Clinically proven weight management medication for long-term results.',
    imageSrc: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Semaglutide',
    genericName: 'Semaglutide',
    doses: ['0.25mg', '0.5mg', '1mg'],
    description: 'Effective treatment for weight management with proven results.',
    imageSrc: 'https://images.unsplash.com/photo-1631549916768-4119b4123a21?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Tirzepatide',
    genericName: 'Tirzepatide',
    doses: ['2.5mg', '5mg', '7.5mg', '10mg'],
    description: 'Advanced medication for comprehensive weight management support.',
    imageSrc: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800',
  },
];

const testimonials = [
  {
    id: 1,
    quote: "I've lost 50 pounds in 6 months with their program. The medical support was exceptional!",
    author: "Sarah M.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
    rating: 5,
  },
  {
    id: 2,
    quote: "The professional guidance and medication helped me achieve my weight loss goals safely.",
    author: "Michael R.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    rating: 5,
  },
  {
    id: 3,
    quote: "Outstanding support and results. I'm down 35 pounds and feeling great!",
    author: "Jennifer L.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <motion.div 
        className="relative isolate overflow-hidden bg-gradient-to-b from-purple-100/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-purple-600/10 px-3 py-1 text-sm font-semibold leading-6 text-purple-600 ring-1 ring-inset ring-purple-600/10">
                  FDA Approved
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Licensed Healthcare Providers</span>
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Life, 
              <span className="text-purple-600"> Embrace Your Future</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join thousands who have discovered their path to wellness through our medically-supervised weight management programs. Your journey to a healthier, more confident you starts here.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#products"
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Start Your Journey
              </a>
              <a href="#testimonials" className="text-sm font-semibold leading-6 text-gray-900">
                View Success Stories <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-x-8 gap-y-6 text-sm leading-6">
              <div>
                <p className="font-semibold text-gray-900">98%</p>
                <p className="text-gray-600">Patient Satisfaction</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">24/7</p>
                <p className="text-gray-600">Medical Support</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">50k+</p>
                <p className="text-gray-600">Success Stories</p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                alt="Medical professionals"
                className="w-[76rem] rounded-md bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Products section */}
      <motion.div 
        id="products" 
        className="bg-white py-24 sm:py-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Products</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              FDA-approved medications for effective weight management
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.id} className="flex flex-col items-start">
                <div className="w-full">
                  <div className="relative w-full">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime="2020-03-16" className="text-gray-500">
                        FDA Approved
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <span>
                          <span className="absolute inset-0" />
                          {product.name}
                        </span>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{product.description}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900">Available Doses:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {product.doses.map((dose) => (
                          <span
                            key={dose}
                            className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
                          >
                            {dose}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Live Order Ledger section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <LiveOrderLedger />
      </motion.div>

      {/* Testimonials section */}
      <motion.div 
        id="testimonials" 
        className="bg-white py-24 sm:py-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Read about real experiences from our satisfied customers
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="rounded-2xl bg-gray-50 p-8">
                    <img
                      src={testimonial.image}
                      alt="Before and After"
                      className="aspect-[4/3] w-full rounded-lg object-cover"
                    />
                    <div className="mt-6 flex items-center">
                      <div className="flex-1">
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className="h-5 w-5 text-yellow-400"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <blockquote className="mt-4">
                          <p className="text-base italic text-gray-600">{testimonial.quote}</p>
                        </blockquote>
                        <p className="mt-4 text-sm font-semibold text-gray-900">{testimonial.author}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
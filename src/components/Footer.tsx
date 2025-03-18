import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      className="bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-500">
            Kroger Pharmacy - FDA Licensed Facility #12345-B • DEA Registration #XY1234567 • NABP Digital Pharmacy Accredited
          </p>
          <p className="text-center text-sm leading-5 text-gray-500 mt-2">
            ISO 9001:2015 Certified • HIPAA Compliant • PCI DSS Level 1 Certified • Joint Commission Accredited
          </p>
          <p className="text-center text-sm leading-5 text-gray-500 mt-2">
            Member of: American Society of Health-System Pharmacists • National Community Pharmacists Association
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 md:order-2">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Contact</a>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1590087986431-72b0f52af221?auto=format&fit=crop&q=80&w=200" 
            alt="Verified Pharmacy Seal" 
            className="h-16 w-auto"
          />
        </div>
      </div>
    </motion.footer>
  );
} 
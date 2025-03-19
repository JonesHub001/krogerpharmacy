import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';

const categories = [
  { id: 'all', name: 'All Stories' },
  { id: '50plus', name: '50+ lbs Lost' },
  { id: '25to50', name: '25-50 lbs Lost' },
  { id: 'under25', name: 'Under 25 lbs Lost' },
];

const successStories = [
  {
    id: 1,
    category: '50plus',
    name: 'Sarah Mitchell',
    weightLost: 65,
    duration: '8 months',
    medication: 'Mounjaro',
    quote: "I never thought I could achieve such amazing results. The medical support and medication made all the difference in my journey.",
    tips: [
      "Stay consistent with medication schedule",
      "Track your meals",
      "Stay hydrated",
      "Regular exercise, even just walking"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: '50plus',
    name: 'Michael Rodriguez',
    weightLost: 55,
    duration: '6 months',
    medication: 'Wegovy',
    quote: "The structured approach and professional guidance helped me achieve what I thought was impossible.",
    tips: [
      "Plan meals ahead",
      "Join support groups",
      "Regular check-ins with healthcare provider",
      "Set realistic goals"
    ],
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: '25to50',
    name: 'Jennifer Lee',
    weightLost: 35,
    duration: '4 months',
    medication: 'Semaglutide',
    quote: "The combination of medication and lifestyle changes transformed my life. I feel healthier than ever.",
    tips: [
      "Listen to your body",
      "Focus on protein-rich foods",
      "Stay active daily",
      "Keep a progress journal"
    ],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: '25to50',
    name: 'David Thompson',
    weightLost: 40,
    duration: '5 months',
    medication: 'Tirzepatide',
    quote: "The support from the medical team and the effectiveness of the medication exceeded my expectations.",
    tips: [
      "Regular sleep schedule",
      "Mindful eating practices",
      "Weekly progress photos",
      "Celebrate small victories"
    ],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    category: 'under25',
    name: 'Emily Wilson',
    weightLost: 20,
    duration: '3 months',
    medication: 'Mounjaro',
    quote: "Even though my goal was smaller, the professional support made the journey much easier.",
    tips: [
      "Set realistic expectations",
      "Regular exercise routine",
      "Balanced meal planning",
      "Stay motivated with goals"
    ],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    category: '50plus',
    name: 'Robert Chen',
    weightLost: 75,
    duration: '10 months',
    medication: 'Wegovy',
    quote: "The journey wasn't just about weight loss; it was about reclaiming my health and confidence. The results speak for themselves.",
    tips: [
      "Make small, sustainable changes",
      "Find an exercise you enjoy",
      "Keep a food diary",
      "Build a support network"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    category: '25to50',
    name: 'Amanda Foster',
    weightLost: 45,
    duration: '6 months',
    medication: 'Mounjaro',
    quote: "The medication helped control my appetite, and with the right guidance, I achieved more than I thought possible.",
    tips: [
      "Meal prep is key",
      "Stay accountable",
      "Celebrate non-scale victories",
      "Find healthy alternatives to favorite foods"
    ],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    category: 'under25',
    name: 'James Parker',
    weightLost: 22,
    duration: '3.5 months',
    medication: 'Semaglutide',
    quote: "Even a moderate weight loss made a significant impact on my health and daily life. The professional support was invaluable.",
    tips: [
      "Focus on progress, not perfection",
      "Regular health check-ups",
      "Stay consistent with medication",
      "Find healthy stress management techniques"
    ],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
    category: '50plus',
    name: 'Lisa Martinez',
    weightLost: 60,
    duration: '7 months',
    medication: 'Tirzepatide',
    quote: "The comprehensive approach to weight management, combining medication with lifestyle changes, was exactly what I needed.",
    tips: [
      "Trust the process",
      "Stay patient with results",
      "Build healthy habits gradually",
      "Keep moving, even on tough days"
    ],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 10,
    category: '25to50',
    name: 'Thomas Wright',
    weightLost: 38,
    duration: '5 months',
    medication: 'Wegovy',
    quote: "The structured program and medical supervision gave me the confidence to pursue my weight loss goals effectively.",
    tips: [
      "Set both short and long-term goals",
      "Track progress regularly",
      "Stay connected with healthcare team",
      "Find joy in the journey"
    ],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
  }
];

export default function SuccessStories() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredStories = selectedCategory === 'all'
    ? successStories
    : successStories.filter(story => story.category === selectedCategory);

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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Success Stories</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real results from real people. Get inspired by these incredible transformations.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Category filters */}
      <motion.div 
        className="bg-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 py-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Success stories grid */}
      <motion.div 
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            >
              <div className="relative h-64">
                <img
                  src={story.image}
                  alt={`${story.name}'s transformation`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                    {story.weightLost} lbs lost
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Duration: {story.duration} • Medication: {story.medication}
                </p>
                <blockquote className="mt-4">
                  <p className="text-base italic text-gray-600">"{story.quote}"</p>
                </blockquote>
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900">Success Tips:</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                    {story.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to action */}
      <motion.div 
        className="bg-purple-50"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block text-purple-600">Join our success stories today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-5 py-3 text-base font-medium text-white hover:bg-purple-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
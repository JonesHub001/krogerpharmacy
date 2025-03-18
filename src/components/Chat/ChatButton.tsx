import React, { useState } from 'react';
import { Chat } from './Chat';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatButtonProps {
  userId: string;
  username: string;
  userRole: string;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ userId, username, userRole }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Fixed Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-[999]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-[500px] h-[600px] z-[998]"
          >
            <div className="relative w-full h-full bg-white rounded-lg shadow-2xl">
              <button
                className="absolute -top-4 -right-4 bg-gray-800 text-white p-2 rounded-full z-[999] hover:bg-gray-700 transition-colors"
                onClick={() => setIsChatOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="h-full overflow-hidden rounded-lg">
                <Chat userId={userId} username={username} userRole={userRole} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 
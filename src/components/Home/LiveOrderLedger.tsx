import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, TruckIcon } from '@heroicons/react/24/outline';

// Static data for demonstration
const staticOrders = [
  {
    id: 'ORD-2025-1234',
    date: new Date().toISOString().split('T')[0],
    time: '14:23',
    destination: 'Austin, Texas',
    product: 'Wegovy',
    status: 'Delivered',
  },
  {
    id: 'ORD-2025-1235',
    date: new Date().toISOString().split('T')[0],
    time: '15:45',
    destination: 'Miami, Florida',
    product: 'Mounjaro',
    status: 'In Transit',
  },
  {
    id: 'ORD-2025-1236',
    date: new Date().toISOString().split('T')[0],
    time: '16:10',
    destination: 'Seattle, Washington',
    product: 'Ozempic',
    status: 'Delivered',
  },
  {
    id: 'ORD-2025-1237',
    date: new Date().toISOString().split('T')[0],
    time: '16:55',
    destination: 'Denver, Colorado',
    product: 'Zepbound',
    status: 'In Transit',
  },
  {
    id: 'ORD-2025-1238',
    date: new Date().toISOString().split('T')[0],
    time: '17:30',
    destination: 'Boston, Massachusetts',
    product: 'Tirzepatide',
    status: 'Delivered',
  },
  {
    id: 'ORD-2025-1239',
    date: new Date().toISOString().split('T')[0],
    time: '18:15',
    destination: 'Chicago, Illinois',
    product: 'Mounjaro',
    status: 'In Transit',
  },
  {
    id: 'ORD-2025-1240',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    destination: 'Portland, Oregon',
    product: 'Wegovy',
    status: 'Delivered',
  },
  {
    id: 'ORD-2025-1241',
    date: new Date().toISOString().split('T')[0],
    time: '19:45',
    destination: 'San Diego, California',
    product: 'Tirzepatide',
    status: 'In Transit',
  },
  {
    id: 'ORD-2025-1242',
    date: new Date().toISOString().split('T')[0],
    time: '20:30',
    destination: 'Nashville, Tennessee',
    product: 'Ozempic',
    status: 'Delivered',
  },
  {
    id: 'ORD-2025-1243',
    date: new Date().toISOString().split('T')[0],
    time: '21:15',
    destination: 'Dallas, Texas',
    product: 'Zepbound',
    status: 'In Transit',
  },

];

const LiveOrderLedger: React.FC = () => {
  const [displayedOrders, setDisplayedOrders] = useState(staticOrders);

  // Simulate live updates by rotating orders
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedOrders(prev => {
        const newOrders = [...prev];
        // Move last order to front with updated time
        const lastOrder = { ...newOrders.pop()! };
        const now = new Date();
        lastOrder.time = now.getHours().toString().padStart(2, '0') + ':' + 
                        now.getMinutes().toString().padStart(2, '0');
        lastOrder.status = Math.random() > 0.5 ? 'Delivered' : 'In Transit';
        lastOrder.date = new Date().toISOString().split('T')[0];
        newOrders.unshift(lastOrder);
        return newOrders;
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Live Order Updates</h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch our real-time deliveries across the United States
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
          <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <div className="grid grid-cols-6 gap-4 text-sm font-medium">
              <div>Order ID</div>
              <div>Date</div>
              <div>Time</div>
              <div>Destination</div>
              <div>Product</div>
              <div>Status</div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {displayedOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-4 py-4 sm:px-6 hover:bg-gray-50"
              >
                <div className="grid grid-cols-6 gap-4 text-sm">
                  <div className="font-medium text-purple-600">{order.id}</div>
                  <div className="text-gray-600">{order.date}</div>
                  <div className="text-gray-600">{order.time}</div>
                  <div className="text-gray-900">{order.destination}</div>
                  <div className="text-gray-900 font-medium">{order.product}</div>
                  <div className="flex items-center">
                    {order.status === 'Delivered' ? (
                      <>
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-1" />
                        <span className="text-green-600">Delivered</span>
                      </>
                    ) : (
                      <>
                        <TruckIcon className="h-5 w-5 text-blue-500 mr-1" />
                        <span className="text-blue-600">In Transit</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <div className="text-gray-600">
                Updated every 5 seconds
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Delivered</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">In Transit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveOrderLedger;

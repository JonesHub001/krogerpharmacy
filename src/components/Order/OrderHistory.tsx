import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface Order {
  order_id: string;
  medication_details: {
    name: string;
    dosage: string;
  };
  delivery_preferences: string;
  order_status: string;
  order_date: string;
  payment_information: {
    method: string;
    amount: number;
  };
}

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setError('Please log in to view your orders');
          return;
        }

        const { data, error: ordersError } = await supabase
          .from('orders')
          .select('*')
          .eq('user_id', user.id)
          .order('order_date', { ascending: false });

        if (ordersError) throw ordersError;
        setOrders(data as Order[]);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">You haven't placed any orders yet.</p>
        <a href="/order" className="text-blue-600 hover:text-blue-500">
          Place your first order
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.order_id}
            className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Order ID</h3>
                <p className="mt-1 text-sm text-gray-900">{order.order_id}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Medication</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {order.medication_details.name} ({order.medication_details.dosage})
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <p className={`mt-1 text-sm ${
                  order.order_status === 'completed' ? 'text-green-600' :
                  order.order_status === 'pending' ? 'text-yellow-600' :
                  'text-gray-900'
                }`}>
                  {order.order_status.charAt(0).toUpperCase() + order.order_status.slice(1)}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Order Date</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {new Date(order.order_date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Delivery Preference</h3>
                  <p className="mt-1 text-sm text-gray-900">{order.delivery_preferences}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Payment</h3>
                  <p className="mt-1 text-sm text-gray-900">
                    {order.payment_information.method} - ${order.payment_information.amount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;

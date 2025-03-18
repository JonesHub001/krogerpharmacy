import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

interface UserProfile {
  id: string;
  full_name: string;
  username: string;
  email: string;
}

const WelcomeInterface: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [orderCount, setOrderCount] = useState<number>(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Fetch user profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileData) {
          setProfile(profileData);
        }

        // Fetch order count
        const { count } = await supabase
          .from('orders')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id);

        setOrderCount(count || 0);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {profile ? (
        <div className="space-y-8">
          {/* Welcome Message */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome back, {profile.full_name}!
            </h1>
            <p className="text-lg text-gray-600">
              You have placed {orderCount} order{orderCount !== 1 ? 's' : ''} with us.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/order"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Place New Order</h2>
              <p className="text-gray-600">Order your medications quickly and securely.</p>
            </Link>
            <Link
              to="/order-history"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">View Order History</h2>
              <p className="text-gray-600">Track and manage your previous orders.</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Kroger Pharmacy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your trusted partner in healthcare management
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Easy Ordering
                </h3>
                <p className="text-blue-700">
                  Order your medications with just a few clicks
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Secure Platform
                </h3>
                <p className="text-green-700">
                  Your health information is safe with us
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Our team is always here to help you
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <div className="flex justify-center space-x-4">
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🏥</div>
                <h3 className="font-semibold mb-2">Licensed Pharmacy</h3>
                <p className="text-gray-600">Fully licensed and regulated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚚</div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick and reliable shipping</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💊</div>
                <h3 className="font-semibold mb-2">Quality Medications</h3>
                <p className="text-gray-600">Genuine and certified products</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <h3 className="font-semibold mb-2">Competitive Prices</h3>
                <p className="text-gray-600">Best value for your money</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeInterface;

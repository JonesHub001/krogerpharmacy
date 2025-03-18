import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { User } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClass = (path: string) => {
    const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
    return isActive(path)
      ? `${baseClass} bg-purple-100 text-purple-700`
      : `${baseClass} text-gray-700 hover:text-purple-600`;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-purple-600">Kroger Pharmacy</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className={getLinkClass('/')}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={getLinkClass('/products')}
              >
                Products
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/order"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transform transition-all duration-200 ease-in-out ${
                    isActive('/order')
                      ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                  }`}
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>Order Now</span>
                </Link>
              </motion.div>
              <Link
                to="/success-stories"
                className={getLinkClass('/success-stories')}
              >
                Success Stories
              </Link>
              <Link
                to="/contact"
                className={getLinkClass('/contact')}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className={getLinkClass('/dashboard')}
                >
                  Dashboard
                </Link>
                <Link
                  to="/order-history"
                  className={getLinkClass('/order-history')}
                >
                  Order History
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/login')
                      ? 'bg-purple-700 text-white'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive('/signup')
                      ? 'bg-purple-100 text-purple-700 border border-purple-700'
                      : 'border border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

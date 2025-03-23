import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
 

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <nav className="space-y-2">
            <a 
              href="/admin/orders" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Orders
            </a>
            <a 
              href="/admin" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Dashboard
            </a>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 p-6">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin</span>
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {children ? children : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

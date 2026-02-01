import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wheat, BarChart3 } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Wheat className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-gray-700">
                Grain Quality Analyzer
              </span>
            </div>
            
            <div className="flex space-x-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                Purity Dashboard
              </Link>
              <Link
                to="/realtime"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === '/realtime'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <BarChart3 className="w-4 h-4 inline mr-2" />
                Real-Time Analysis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  );
};

export default Layout;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-primary/30 group-hover:border-primary/50 transition-all duration-300 group-hover:animate-glow group-hover:scale-110">
              <img 
                src="/logoTre.jpg" 
                alt="TreFund Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-primary group-hover:text-gradient-animated transition-all">TreFund</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 relative group">
                About us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 relative group">
                Funds
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 relative group">
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 relative group">
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-all duration-300 relative group">
                Contact us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="btn-outline glow-primary">
              Connect Wallet
            </button>
            <button className="px-6 py-2 bg-transparent border border-gray-600 text-white rounded-full hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

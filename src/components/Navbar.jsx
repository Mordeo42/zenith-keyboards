import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePreOrderClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const section = document.getElementById('customize');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('customize');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="container mx-auto px-6 py-6 relative z-50">
      <div className="flex justify-between items-center">
        
        {/* mag design kaya kog akoang logo noh */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-emerald-400 z-50 relative">
          ZENITH
        </Link>

        <ul className="hidden md:flex space-x-8 font-medium text-slate-300">
          <li><Link to="/products" className="hover:text-emerald-400 transition">Products</Link></li>
          <li><Link to="/community" className="hover:text-emerald-400 transition">Community</Link></li>
          <li><button onClick={handlePreOrderClick} className="hover:text-emerald-400 transition">Customize</button></li>
          <li><Link to="/about" className="hover:text-emerald-400 transition">About</Link></li>
        </ul>

        <div className="hidden md:block">
          <button 
            onClick={handlePreOrderClick}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-2 rounded-full font-bold transition hover:scale-105"
          >
            Pre-Order
          </button>
        </div>

        {/* katong button bitaw, unsay bisaya sa button gani? */}
        <button 
          className="md:hidden text-white z-50 focus:outline-none relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu ig */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-8 text-2xl font-bold text-white md:hidden z-40">
          <Link to="/products" onClick={handleLinkClick} className="hover:text-emerald-400">Products</Link>
          <Link to="/community" onClick={handleLinkClick} className="hover:text-emerald-400">Community</Link>
          <button onClick={handlePreOrderClick} className="hover:text-emerald-400">Customize</button>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-emerald-400">About</Link>
          
          <button 
            onClick={handlePreOrderClick}
            className="bg-emerald-500 text-slate-900 px-8 py-3 rounded-full mt-4"
          >
            Pre-Order Now
          </button>
        </div>
      )}
    </nav>
  );
}

// IKAPILA NAKO GA BALIK BALIK ANI
// Do I really need to explain everything? Learn on your own.
import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-50">
      
      {/* LOOK AT THE LOGO NEO, LOOK AT IT */}
      <Link to="/" className="text-2xl font-bold tracking-tighter text-emerald-400 hover:scale-105 transition">
        ZENITH
      </Link>

      <ul className="hidden md:flex space-x-8 font-medium text-slate-300">
        <li>
          <Link to="/products" className="hover:text-emerald-400 cursor-pointer transition">
            Products
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-emerald-400 cursor-pointer transition">
            Customize
          </Link>
        </li>
        <li>
          <Link to="/community" className="hover:text-emerald-400 cursor-pointer transition">
            Community
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-emerald-400 cursor-pointer transition">
            About
          </Link>
        </li>
      </ul>

      <Link 
        to="/"
        className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-2 rounded-full font-bold transition hover:scale-105"
      >
        Pre-Order
      </Link>

    </nav>
  );
}

// IKAPILA NAKO GA BALIK BALIK ANI
// Do I really need to explain everything? Learn on your own.
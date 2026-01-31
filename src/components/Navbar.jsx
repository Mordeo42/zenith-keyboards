import React from 'react';

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-50">
      
      {/* FUCKING LOGO */}
      <div className="text-2xl font-bold tracking-tighter text-emerald-400">
        ZENITH
      </div>

      <ul className="hidden md:flex space-x-8 font-medium text-slate-300">
        <li>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); alert("More products coming soon!"); }}
            className="hover:text-emerald-400 cursor-pointer transition"
          >
            Products
          </a>
        </li>
        <li>
          <a 
            href="#customize" 
            className="hover:text-emerald-400 cursor-pointer transition"
          >
            Customize
          </a>
        </li>
        <li>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); alert("Zenith Keyboards v1.0 \nBuilt by Neo Decena"); }}
            className="hover:text-emerald-400 cursor-pointer transition"
          >
            About
          </a>
        </li>
      </ul>

      <button 
        className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-2 rounded-full font-bold transition hover:scale-105"
        onClick={() => document.getElementById('customize').scrollIntoView({ behavior: 'smooth' })}
      >
        Pre-Order
      </button>

    </nav>
  );
}

// IKAPILA NAKO GA BALIK BALIK ANI
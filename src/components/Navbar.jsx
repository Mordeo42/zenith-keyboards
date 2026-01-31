import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full p-6 flex justify-between items-center bg-slate-900/80 backdrop-blur-md z-50 text-white">
      {/* Mfking Logo */}
      <div className="text-2xl font-bold text-emerald-400 tracking-tighter">
        ZENITH
      </div>

      {}
      <ul className="flex space-x-8 font-medium">
        <li className="hover:text-emerald-400 cursor-pointer transition">Products</li>
        <li className="hover:text-emerald-400 cursor-pointer transition">Customize</li>
        <li className="hover:text-emerald-400 cursor-pointer transition">About</li>
      </ul>

      {}
      <button className="bg-emerald-500 hover:bg-emerald-400 px-5 py-2 rounded-full font-bold transition text-slate-900">
        Pre-Order
      </button>
    </nav>
  );
}
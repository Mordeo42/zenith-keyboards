import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <h1 className="text-4xl font-bold text-white text-center mb-12">Product Lineup</h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500 transition-all duration-300">
          <div className="h-64 bg-gradient-to-br from-slate-800 to-black flex items-center justify-center">
             <div className="w-48 h-24 bg-emerald-500/20 rounded-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:scale-110 transition duration-500"></div>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Zenith Model-X</h2>
              <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">AVAILABLE</span>
            </div>
            <p className="text-slate-400 mb-6">The flagship. Customizable chassis, hot-swappable switches, and neon bloom integration.</p>
            <Link to="/" className="inline-block w-full text-center bg-white text-black font-bold py-3 rounded-lg hover:bg-emerald-400 hover:text-white transition">
              Configure Now
            </Link>
          </div>
        </div>

        <div className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="h-64 bg-black flex items-center justify-center">
             <div className="w-48 h-24 bg-slate-800 rounded-lg shadow-2xl"></div>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Zenith Stealth</h2>
              <span className="bg-slate-800 text-slate-500 text-xs font-bold px-3 py-1 rounded-full">COMING 2027</span>
            </div>
            <p className="text-slate-500 mb-6">Silent switches, dampening foam, and a blackout matte finish for office stealth.</p>
            <button disabled className="w-full bg-slate-800 text-slate-500 font-bold py-3 rounded-lg cursor-not-allowed">
              Waitlist Full
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
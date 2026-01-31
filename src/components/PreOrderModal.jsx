import React, { useState } from 'react';

export default function PreOrderModal({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">Secure Your Build</h2>
        <p className="text-slate-400 mb-6 text-sm">
          Join the waitlist for the Zenith Model-X. We will notify you when production begins.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              required
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              placeholder="neo@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-3 rounded-lg transition transform active:scale-95"
          >
            Confirm Pre-Order
          </button>
        </form>

      </div>
    </div>
  );
}
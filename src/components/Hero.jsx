import React, { useState } from 'react';
import KeyboardModel from './KeyboardModel';
import PreOrderModal from './PreOrderModal';
import { supabase } from '../supabaseClient';

//KUPAL 
export default function Hero() {
  const [buildColor, setBuildColor] = useState("#34d399");
  const [isNeon, setIsNeon] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleFinalSubmit = async (email) => {
    setLoading(true); //LOAD UG TARONG BAH YAWA
    setIsModalOpen(false);
    const { data, error } = await supabase
      .from('orders')
      .insert([
        { 
          email: email, 
          configuration: { color: buildColor, model: "Zenith Model-X", neonMode: isNeon } 
        },
      ]);
    setLoading(false);
    if (error) {
      alert("Error saving order: " + error.message);
    } else {
      alert("Success! Check your email for confirmation.");
    }
  };

  return (
    <section id="customize" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-black z-0" />
      
      <PreOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleFinalSubmit} />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        
        <div className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Typing, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Redefined.
            </span>
          </h1>
          
          <div className="space-y-4">
            {/* NEON MODE HAHAHHHA */}
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className={`text-sm font-bold tracking-widest ${isNeon ? "text-emerald-400" : "text-slate-500"}`}>
                NEON MODE
              </span>
              <button 
                onClick={() => setIsNeon(!isNeon)}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${isNeon ? "bg-emerald-500" : "bg-slate-700"}`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isNeon ? "translate-x-6" : "translate-x-0"}`} />
              </button>
            </div>

            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Select Chassis Finish
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <button onClick={() => setBuildColor("#34d399")} className={`w-10 h-10 rounded-full bg-emerald-400 border-2 transition-all ${buildColor === "#34d399" ? "border-white scale-110 ring-2 ring-emerald-500/50" : "border-transparent opacity-50 hover:opacity-100"}`} />
              <button onClick={() => setBuildColor("#a855f7")} className={`w-10 h-10 rounded-full bg-purple-500 border-2 transition-all ${buildColor === "#a855f7" ? "border-white scale-110 ring-2 ring-purple-500/50" : "border-transparent opacity-50 hover:opacity-100"}`} />
              <button onClick={() => setBuildColor("#f97316")} className={`w-10 h-10 rounded-full bg-orange-500 border-2 transition-all ${buildColor === "#f97316" ? "border-white scale-110 ring-2 ring-orange-500/50" : "border-transparent opacity-50 hover:opacity-100"}`} />
              <button onClick={() => setBuildColor("#94a3b8")} className={`w-10 h-10 rounded-full bg-slate-400 border-2 transition-all ${buildColor === "#94a3b8" ? "border-white scale-110 ring-2 ring-slate-400/50" : "border-transparent opacity-50 hover:opacity-100"}`} />
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <button 
              onClick={handleOpenModal}
              className="bg-emerald-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition hover:scale-105"
            >
              Pre-Order Build
            </button>
          </div>
        </div>

        <div className="h-[300px] md:h-[400px] w-full bg-slate-800/30 rounded-2xl border border-slate-700/50 relative backdrop-blur-sm overflow-hidden order-1 md:order-2 touch-none">
           <KeyboardModel currentBuildColor={buildColor} isNeon={isNeon} />
           <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl -z-10 pointer-events-none transition-colors duration-500 ${isNeon ? "bg-emerald-500/40" : "bg-emerald-500/20"}`}></div>
        </div>

      </div>
    </section>
  );
}
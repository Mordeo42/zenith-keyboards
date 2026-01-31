import React, { useState } from 'react';
import KeyboardModel from './KeyboardModel';
import PreOrderModal from './PreOrderModal'; 
import { supabase } from '../supabaseClient';
//NGANONG NAAY GHOST ERROR OI WTFF

export default function Hero() {
  const [buildColor, setBuildColor] = useState("#34d399");
  const [loading, setLoading] = useState(false); // mura siyag ga load or something idk
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleFinalSubmit = async (email) => { //GIVE ME YOUR FUCKING EMAIL
    setLoading(true);
    setIsModalOpen(false); 

    const { data, error } = await supabase
      .from('orders')
      .insert([
        { 
          email: email, 
          configuration: { color: buildColor, model: "Zenith Model-X" } 
        },
      ]);

    setLoading(false);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Success! Check your email for confirmation.");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-900 to-black z-0" />
      
      <PreOrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleFinalSubmit} 
      />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Typing, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Redefined.
            </span>
          </h1>
          
          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Select Chassis Finish
            </p>
            <div className="flex space-x-4">
              <button onClick={() => setBuildColor("#34d399")} className={`w-10 h-10 rounded-full bg-emerald-400 border-2 transition-all ${buildColor === "#34d399" ? "border-white scale-110 ring-2 ring-emerald-500/50" : "border-transparent opacity-50 hover:opacity-100"}`} />
              <button onClick={() => setBuildColor("#a855f7")} className={`w-10 h-10 rounded-full bg-purple-500 border-2 transition-all ${buildColor === "#a855f7" ? "border-white scale-110 ring-2 ring-purple-500/50" : "border-transparent opacity-50 hover:opacity-100"}`} />
              <button onClick={() => setBuildColor("#f97316")} className={`w-10 h-10 rounded-full bg-orange-500 border-2 transition-all ${buildColor === "#f97316" ? "border-white scale-110 ring-2 ring-orange-500/50" : "border-transparent opacity-50 hover:opacity-100"}`} />
              <button onClick={() => setBuildColor("#94a3b8")} className={`w-10 h-10 rounded-full bg-slate-400 border-2 transition-all ${buildColor === "#94a3b8" ? "border-white scale-110 ring-2 ring-slate-400/50" : "border-transparent opacity-50 hover:opacity-100"}`} />
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <button 
              onClick={handleOpenModal} //open modal na siya yay
              className="bg-emerald-500 text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition hover:scale-105"
            >
              Pre-Order Build
            </button>
          </div>
        </div>

        <div className="h-[400px] w-full bg-slate-800/30 rounded-2xl border border-slate-700/50 relative backdrop-blur-sm overflow-hidden">
           <KeyboardModel currentBuildColor={buildColor} />
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
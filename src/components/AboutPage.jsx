import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 flex flex-col items-center">
      
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Ambition at its finest.
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Zenith Keyboards started as a university project and evolved into a pursuit of the ultimate typing experience. 
          We believe a keyboard isn't just a peripheral—it's an extension of your mind. This is purely project based and
          I do not own any real-life products or companies under the name 'Zenith Keyboards'. If ever it is real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mt-16">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition">
          <div className="text-emerald-400 text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold text-white mb-2">Speed First</h3>
          <p className="text-slate-500">Low-latency firmware designed for competitive gaming and high-speed typing.</p>
        </div>

        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition">
          <div className="text-purple-400 text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold text-white mb-2">Aesthetic</h3>
          <p className="text-slate-500">Every board is unique and can be pleasing to look at, featuring programmable neon lighting.</p>
        </div>

        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition">
          <div className="text-orange-400 text-4xl mb-4">🛠️</div>
          <h3 className="text-xl font-bold text-white mb-2">Built with Precision</h3>
          <p className="text-slate-500">Designed and engineered in the Philippines by Neo Decena.</p>
        </div>
      </div>

    </div>
  );
}
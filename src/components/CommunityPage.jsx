import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function CommunityPage() {
  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBuilds();
  }, []);

  const fetchBuilds = async () => {
    // Share your creativity, bahalag gamay ra kaayo ang combinations HAHAAHA
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error fetching builds:', error);
    } else {
      setBuilds(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-32 px-6 pb-12">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Community <span className="text-emerald-400">Builds</span>
        </h1>
        <p className="text-slate-400 text-lg">
          The latest configurations designed by architects like you.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-emerald-400 animate-pulse">Loading the archive...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {builds.map((build) => {
             // dire mn siguro ang data, nakalimot ko
             const config = build.configuration || {};
             const caseColor = config.caseColor || "#333";
             const keyColor = config.keyColor || "#555";
             
             return (
              <div key={build.id} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition duration-300 group">
                <div className="h-40 mb-6 rounded-xl flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
                    <div 
                      className="w-48 h-24 rounded-lg shadow-2xl relative flex items-center justify-center transition-transform group-hover:scale-105 duration-500"
                      style={{ 
                        backgroundColor: caseColor,
                        boxShadow: `0 20px 25px -5px ${caseColor}40` 
                      }}
                    >
                      <div className="grid grid-cols-6 gap-1 p-2 w-full h-full">
                         {[...Array(12)].map((_, i) => (
                           <div key={i} className="rounded-sm opacity-90" style={{ backgroundColor: keyColor }}></div>
                         ))}
                      </div>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Designed By
                    </p>
                    <p className="text-white font-medium truncate w-32 md:w-48">
                      {/* Hahays, since 'ethical' mn ko, I'll hide your emails, don't worry */}
                      {build.email.split('@')[0]}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-2">
                       <div className="w-4 h-4 rounded-full border border-slate-600" style={{ background: caseColor }} title="Case Color" />
                       <div className="w-4 h-4 rounded-full border border-slate-600" style={{ background: keyColor }} title="Key Color" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// unsa pamay lain nakong e butang dire? 
// I like Chinitas and Morenas, fam
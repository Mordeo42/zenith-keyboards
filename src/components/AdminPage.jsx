import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  
  const SECRET_PIN = "zenith2026"; // THIS IS THE CODE, AYAW KALIMTE, or you could just check here hehe

  const handleLogin = (e) => {
    e.preventDefault(); 
    
    console.log("Typed Password:", password); 

    if (password.trim() === SECRET_PIN) {
      setIsAuthenticated(true);
      fetchOrders();
    } else {
      alert("Wrong PIN. Try 'zenith2026'");
    }
  };

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error("Error fetching orders:", error);
    else setOrders(data);
  };

  // NEO, THIS IS THE LOG-IN SCREN, OK??
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center space-y-4 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-white">Admin Access</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-2 text-white text-center tracking-widest focus:outline-none focus:border-emerald-500"
              placeholder="Enter PIN"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* submit type shit */}
            <button 
              type="submit" 
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded transition"
            >
              Unlock Dashboard
            </button>
          </form>
          
        </div>
      </div>
    );
  }

  // still the data dashboard
  return (
    <div className="min-h-screen pt-32 px-6 pb-12 bg-black text-slate-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h1 className="text-3xl font-bold text-white">Incoming Orders</h1>
          <div className="text-emerald-400 font-mono text-sm">
            Total Records: {orders.length}
          </div>
        </div>

        <div className="overflow-x-auto bg-slate-900 rounded-xl border border-slate-800">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-xs uppercase tracking-wider text-slate-500">
                <th className="p-4">Date</th>
                <th className="p-4">Customer Email</th>
                <th className="p-4">Case</th>
                <th className="p-4">Keys</th>
                <th className="p-4 text-center">Neon Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {orders.map((order) => {
                const config = order.configuration || {};
                return (
                  <tr key={order.id} className="hover:bg-slate-800/50 transition">
                    <td className="p-4 font-mono text-sm text-slate-400">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-white font-medium">
                      {order.email}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full border border-slate-600" style={{ background: config.caseColor }} />
                        <span className="text-xs uppercase">{config.caseColor}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full border border-slate-600" style={{ background: config.keyColor }} />
                        <span className="text-xs uppercase">{config.keyColor}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      {config.neonMode ? (
                        <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded font-bold">ON</span>
                      ) : (
                        <span className="text-slate-600 text-xs">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// HEHEHE SNEAKY BEAKY LIKE A SNEK
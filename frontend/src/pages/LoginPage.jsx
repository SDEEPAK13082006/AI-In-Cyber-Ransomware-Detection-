import React, { useState } from 'react';
import { ShieldAlert, Lock, User, KeyRound, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('AdminAnalyst');
  const [password, setPassword] = useState('••••••••••••');
  const [role, setRole] = useState('admin');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, role, 'mock_jwt_token_defender_2026');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6 z-10">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="p-3 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-xl shadow-xl shadow-cyan-500/20">
            <ShieldAlert className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl font-extrabold text-slate-100 tracking-tight">Microsoft Defender AI</h1>
          <p className="text-xs text-cyan-400 font-medium">Enterprise Ransomware Detection Console</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Analyst Username</label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-950/70 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Secret Access Key / Password</label>
            <div className="relative">
              <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-950/70 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Access Role (RBAC)</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-950/70 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="admin">Administrator / Threat Hunter</option>
              <option value="analyst">Security Analyst</option>
              <option value="auditor">Compliance Auditor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all mt-2"
          >
            <span>Authenticate & Access Console</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-[10px] text-slate-500 font-mono">
          JWT Encrypted Session • OAuth 2.0 / RBAC Protected
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

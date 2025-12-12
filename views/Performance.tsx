import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_PERFORMANCE_DATA } from '../constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle, TrendingUp, Activity, Zap } from 'lucide-react';

export const Performance: React.FC = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white tracking-tight">System <span className="text-[#03DAC6]">Metrics</span></h1>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="flex flex-col items-center justify-center py-6 bg-gradient-to-br from-white/5 to-[#03DAC6]/10">
          <Activity className="text-[#03DAC6] mb-2" size={24} />
          <span className="text-2xl font-bold font-mono-tech neon-text-cyan">98.5%</span>
          <span className="text-[10px] text-gray-400 uppercase mt-1">Accuracy</span>
        </GlassCard>
        <GlassCard className="flex flex-col items-center justify-center py-6 bg-gradient-to-br from-white/5 to-[#BB86FC]/10">
          <Zap className="text-[#BB86FC] mb-2" size={24} />
          <span className="text-2xl font-bold font-mono-tech neon-text-purple">3.2s</span>
          <span className="text-[10px] text-gray-400 uppercase mt-1">Latency</span>
        </GlassCard>
      </div>

      {/* Risk Alert */}
      <div className="border border-[#CF6679]/40 bg-[#CF6679]/10 rounded-xl p-4 flex items-start gap-3 animate-pulse">
        <AlertTriangle className="text-[#CF6679] shrink-0" size={20} />
        <div>
          <h3 className="text-[#CF6679] font-bold text-sm">RISK DETECTED</h3>
          <p className="text-[#CF6679]/80 text-xs mt-1">Keyword "Market Crash" showing abnormal spike in user comments. Suggested Action: Enable 'Reassurance' mode.</p>
        </div>
      </div>

      {/* Chart */}
      <GlassCard title="Engagement Stream" headerAction={<TrendingUp size={16} className="text-[#03DAC6]" />}>
        <div className="h-64 w-full -ml-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={MOCK_PERFORMANCE_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis 
                dataKey="time" 
                stroke="#666" 
                tick={{fill: '#666', fontSize: 10, fontFamily: 'monospace'}} 
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#666" 
                tick={{fill: '#666', fontSize: 10, fontFamily: 'monospace'}} 
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0A0A1F', border: '1px solid #03DAC6', borderRadius: '8px' }}
                itemStyle={{ color: '#03DAC6', fontFamily: 'monospace' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#03DAC6" 
                strokeWidth={2} 
                dot={{fill: '#0A0A1F', stroke: '#03DAC6', strokeWidth: 2, r: 4}}
                activeDot={{r: 6, fill: '#03DAC6'}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    </div>
  );
};

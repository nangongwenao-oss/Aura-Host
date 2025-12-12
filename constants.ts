import { ServiceItem } from './types';

export const COLORS = {
  background: '#0A0A1F',
  purple: '#BB86FC',
  cyan: '#03DAC6',
  error: '#CF6679',
  surface: 'rgba(255,255,255,0.05)'
};

export const MOCK_SERVICES: ServiceItem[] = [
  { id: '1', name: 'AI Value Corpus Training', price: 2999, description: 'Deep learning based on mainstream media values.' },
  { id: '2', name: 'NeRF 4K Render Time (10h)', price: 800, description: 'High-fidelity cloud rendering credits.' },
  { id: '3', name: 'Dedicated Server Deployment', price: 5000, description: 'Low latency edge node allocation.' },
];

export const MOCK_PERFORMANCE_DATA = [
  { time: '08:00', value: 400 },
  { time: '10:00', value: 1200 },
  { time: '12:00', value: 3400 },
  { time: '14:00', value: 2800 },
  { time: '16:00', value: 4500 },
  { time: '18:00', value: 5100 },
  { time: '20:00', value: 6800 },
];

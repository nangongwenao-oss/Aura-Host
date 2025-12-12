export enum View {
  LOGIN = 'LOGIN',
  MODEL_CONFIG = 'MODEL_CONFIG',
  SCRIPT_CENTER = 'SCRIPT_CENTER',
  PERFORMANCE = 'PERFORMANCE',
  SETTINGS = 'SETTINGS',
}

export interface MetricData {
  time: string;
  value: number;
}

export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ScriptConfig {
  theme: string;
  emotion: number;
  syncRate: number;
  speed: number;
}

import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { NeonButton } from '../components/NeonButton';
import { MOCK_SERVICES } from '../constants';
import { CreditCard, CheckCircle, X } from 'lucide-react';

export const Settings: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleBuy = (id: string) => {
    setSelectedService(id);
    setShowPaymentModal(true);
  };

  const selectedItem = MOCK_SERVICES.find(s => s.id === selectedService);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white tracking-tight">System <span className="text-gray-500">Config</span></h1>
      </header>

      <div className="space-y-4">
        <h2 className="text-sm uppercase text-gray-400 tracking-wider ml-1">Enterprise Services</h2>
        {MOCK_SERVICES.map((service) => (
          <GlassCard key={service.id} className="group relative transition-all hover:bg-white/10">
             <div className="flex justify-between items-start">
               <div>
                 <h3 className="font-bold text-white group-hover:text-[#03DAC6] transition-colors">{service.name}</h3>
                 <p className="text-xs text-gray-400 mt-1 max-w-[80%]">{service.description}</p>
               </div>
               <div className="text-right">
                 <div className="text-lg font-mono-tech text-[#BB86FC]">¥{service.price}</div>
               </div>
             </div>
             <NeonButton 
               variant="secondary" 
               className="mt-4 w-full text-xs py-2"
               onClick={() => handleBuy(service.id)}
             >
               PURCHASE
             </NeonButton>
          </GlassCard>
        ))}
      </div>

      {/* Mock Payment Modal */}
      {showPaymentModal && selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            
            <div className="bg-[#07C160] p-6 text-center">
              <div className="mx-auto bg-white rounded-full w-12 h-12 flex items-center justify-center mb-3">
                 <span className="text-[#07C160] font-bold text-xl">¥</span>
              </div>
              <h3 className="text-white font-bold text-lg">WeChat Pay</h3>
            </div>
            
            <div className="p-6 text-center">
              <p className="text-gray-500 text-sm mb-1">Paying for</p>
              <h4 className="font-bold text-gray-800 text-lg mb-6">{selectedItem.name}</h4>
              <div className="text-3xl font-bold text-gray-900 mb-8 font-mono">¥{selectedItem.price}.00</div>
              
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 mb-6 flex flex-col items-center justify-center bg-gray-50">
                 {/* QR Code Placeholder */}
                 <div className="w-32 h-32 bg-gray-900 rounded-sm relative overflow-hidden">
                    <img src="https://picsum.photos/200?grayscale" alt="QR" className="mix-blend-overlay opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-8 h-8 bg-[#07C160] rounded-sm"></div>
                    </div>
                 </div>
                 <p className="text-[10px] text-gray-400 mt-2">Scan with WeChat to pay</p>
              </div>
              
              <NeonButton variant="wechat" fullWidth onClick={() => {
                alert("PAYMENT SUCCESS");
                setShowPaymentModal(false);
              }}>
                Confirm Payment
              </NeonButton>
            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

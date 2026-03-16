import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="聯絡我們"
        description="準備好為您的下一個活動打造震撼的視覺體驗了嗎？立即與我們聯絡，獲取免費諮詢與報價。"
      />

      <Section darker>
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Let's Create Something <span className="text-pink-400">MAD</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <a href="https://wa.me/85296665858" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 transition-all group">
                <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                  <MessageCircle size={32} />
                </div>
                <div className="text-center">
                  <h4 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">WhatsApp</h4>
                  <p className="text-white text-2xl font-bold mb-1">+852 9666 5858</p>
                  <p className="text-[#25D366] text-sm">點擊立即對話</p>
                </div>
              </a>

              <a href="mailto:info@madproduction.ai" className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-500/40 transition-all group">
                <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Mail size={32} />
                </div>
                <div className="text-center">
                  <h4 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">Email</h4>
                  <p className="text-white text-xl font-bold mb-1">info@madproduction.ai</p>
                  <p className="text-purple-400 text-sm">點擊發送電郵</p>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center gap-3 text-gray-400 mb-16">
              <MapPin size={20} className="text-pink-400" />
              <span>Hong Kong (Available for worldwide projects)</span>
            </div>

            {/* Business Card Preview */}
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-900/40 to-[#0a0a0a] border border-purple-500/30 relative overflow-hidden group max-w-2xl mx-auto shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/500/500')] opacity-10 mix-blend-overlay" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <img 
                  src="/logo.png" 
                  alt="MAD PRODUCTION" 
                  className="h-24 w-auto object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
                  onError={(e) => { 
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }} 
                />
                <div className="hidden w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center p-[2px] shadow-[0_0_20px_rgba(168,85,247,0.5)] shrink-0">
                  <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-5xl">M</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-black text-3xl tracking-wider mb-1">MAD PRODUCTION</h3>
                  <p className="text-purple-400 text-lg tracking-widest mb-4 font-medium">瘋製作</p>
                  <div className="h-px w-full bg-gradient-to-r from-purple-500/50 to-transparent mb-4" />
                  <p className="text-white text-xl font-bold">許正道 Gentle Hui</p>
                  <p className="text-gray-400">創辦人 Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import PriceCard from '../components/PriceCard';
import PortfolioGrid from '../components/PortfolioGrid';
import { motion } from 'motion/react';

export default function HologramFan() {
  return (
    <div>
      <PageHeader 
        title="3D Hologram Fan Display" 
        subtitle="全息投影設備與動畫"
        description="最吸睛的科技展示方案。我們提供 3D Hologram Fan 設備租用及專屬 3D 動畫內容設計，讓您的產品與品牌在空中立體呈現。"
      />

      <Section darker title="使用場景" subtitle="Applications">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { name: '展覽 Booth', img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=400' },
            { name: '新店開張', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400' },
            { name: '餐廳 Promotion', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=400' },
            { name: '商場活動', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400' },
            { name: '品牌展示', img: 'https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=400' },
            { name: '舞台科技效果', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=400' }
          ].map((item, index) => (
            <div key={index} className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all aspect-square flex items-end p-4">
              <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity group-hover:scale-110 duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="relative z-10 text-gray-200 font-medium text-sm group-hover:text-white transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="長期展示方案 (Subscription)" subtitle="Monthly Plans">
        <div className="text-center mb-12">
          <p className="text-gray-400 max-w-2xl mx-auto">
            適合餐廳、商場及零售店鋪的長期展示方案，定期更新影片內容，持續吸引顧客目光。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PriceCard 
            title="Basic Plan"
            price="HKD 2,200"
            period="/ 月"
            features={[
              '1 把 Hologram Fan',
              '2 條 Hologram Video',
              '每月更新影片 1 次',
              '設備維護及技術支援'
            ]}
          />
          <PriceCard 
            title="Business Plan"
            price="HKD 3,800"
            period="/ 月"
            isPopular
            features={[
              '2 把 Hologram Fan',
              '4 條 Hologram Video',
              '每月更新影片 2 次',
              '設備維護及技術支援',
              '專屬客戶經理'
            ]}
            delay={0.1}
          />
          <PriceCard 
            title="Premium Plan"
            price="HKD 5,200"
            period="/ 月"
            features={[
              '3 把 Hologram Fan',
              '6 條 Hologram Video',
              '每月更新影片 3 次',
              '設備維護及技術支援',
              '優先技術支援',
              '客製化展示架設計'
            ]}
            delay={0.2}
          />
        </div>
      </Section>

      <Section darker title="短期租用及動畫製作" subtitle="Rental & Production">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Rental Pricing */}
          <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-purple-500/30 pb-4">設備租用</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-pink-400 font-semibold mb-3">單日租用</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"/> 1 把 Fan</span> <span>HKD 500 / 日</span></div>
                  <div className="flex justify-between text-gray-300"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"/> 2 把 Fan</span> <span>HKD 900 / 日</span></div>
                  <div className="flex justify-between text-gray-300"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"/> 3 把 Fan</span> <span>HKD 1,200 / 日</span></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-pink-400 font-semibold mb-3">3日活動租用</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500"/> 1 把 Fan</span> <span>HKD 1,200</span></div>
                  <div className="flex justify-between text-gray-300"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500"/> 2 把 Fan</span> <span>HKD 2,100</span></div>
                  <div className="flex justify-between text-gray-300"><span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-pink-500"/> 3 把 Fan</span> <span>HKD 2,800</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Production Pricing */}
          <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-pink-500/30 pb-4">3D Hologram Video</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">基本 Hologram Video</h4>
                  <p className="text-gray-400 text-sm">Logo 旋轉、簡單文字特效</p>
                </div>
                <span className="text-purple-400 font-bold">HKD 600</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">進階 Hologram Animation</h4>
                  <p className="text-gray-400 text-sm">產品 3D 建模展示、複雜特效</p>
                </div>
                <span className="text-purple-400 font-bold">HKD 900</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">客製動畫</h4>
                  <p className="text-gray-400 text-sm">完全度身訂造的 3D 視覺體驗</p>
                </div>
                <span className="text-purple-400 font-bold">HKD 1,500 起</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <h4 className="text-white font-medium">額外影片</h4>
                <span className="text-purple-400 font-bold">HKD 500 / 條</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Hologram 展示案例" subtitle="Gallery">
        <PortfolioGrid 
          items={[
            { id: 301, title: 'Sneaker 3D Showcase', category: 'Retail Display', image: 'https://picsum.photos/seed/holo1/800/600' },
            { id: 302, title: 'Restaurant Menu Hologram', category: 'F&B Promotion', image: 'https://picsum.photos/seed/holo2/800/600' },
            { id: 303, title: 'Tech Expo Booth Setup', category: 'Exhibition', image: 'https://picsum.photos/seed/holo3/800/600' },
            { id: 304, title: 'Jewelry Floating Display', category: 'Luxury Brand', image: 'https://picsum.photos/seed/holo4/800/600' },
            { id: 305, title: 'Bar Logo Animation', category: 'Nightlife', image: 'https://picsum.photos/seed/holo5/800/600' },
            { id: 306, title: 'Stage Hologram Effects', category: 'Event Production', image: 'https://picsum.photos/seed/holo6/800/600' },
          ]}
        />
      </Section>
    </div>
  );
}

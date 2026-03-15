import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import PriceCard from '../components/PriceCard';
import PortfolioGrid from '../components/PortfolioGrid';

export default function GraphicDesign() {
  return (
    <div>
      <PageHeader 
        title="Event Graphic Design" 
        subtitle="平面設計服務"
        description="為您的活動及品牌打造極具視覺衝擊力的專業設計，從線上宣傳到線下佈置，提供全方位視覺解決方案。"
      />

      <Section darker title="設計服務項目" subtitle="Services">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: '活動海報設計', img: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=400' },
            { name: '社交媒體宣傳圖', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400' },
            { name: 'Backdrop 設計', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400' },
            { name: 'Rollup Banner', img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=400' },
            { name: 'Event Banner', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400' },
            { name: '場刊設計', img: 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&q=80&w=400' },
            { name: 'LED 背景畫面', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=400' },
            { name: '電子邀請卡', img: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=400' },
            { name: 'Sponsor Board', img: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&q=80&w=400' },
            { name: '活動證件 / Pass', img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=400' }
          ].map((item, index) => (
            <div key={index} className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all aspect-square flex items-end p-4">
              <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity group-hover:scale-110 duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="relative z-10 text-gray-200 font-medium group-hover:text-white transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="設計套餐" subtitle="Design Packages">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PriceCard 
            title="Basic Event Design"
            price="HKD 2,800"
            features={[
              '活動海報設計 x 1',
              '社交媒體宣傳圖 x 2',
              'Rollup Banner 設計 x 1',
              'Backdrop 設計 x 1',
              '包 2 次免費修改'
            ]}
          />
          <PriceCard 
            title="Professional Event Design"
            price="HKD 5,800"
            isPopular
            features={[
              '活動海報設計 x 1',
              '社交媒體宣傳圖 x 4',
              'Backdrop 設計 x 1',
              'Rollup Banner 設計 x 2',
              'Sponsor Board 設計 x 1',
              '場刊封面 + 4頁內頁排版',
              '包 3 次免費修改',
              '優先處理'
            ]}
            delay={0.2}
          />
        </div>
      </Section>

      <Section darker title="單項設計價目表" subtitle="A La Carte Pricing">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden">
          <div className="divide-y divide-white/10">
            {[
              { name: '活動海報設計', price: 'HKD 800 起' },
              { name: '社交媒體宣傳圖', price: 'HKD 400 / 張' },
              { name: '社交媒體圖 3 張套裝', price: 'HKD 1,000' },
              { name: 'Backdrop 設計', price: 'HKD 1,500 起' },
              { name: 'Rollup Banner', price: 'HKD 900' },
              { name: 'Event Banner', price: 'HKD 900' },
              { name: '場刊封面', price: 'HKD 800' },
              { name: '場刊內頁排版', price: 'HKD 180 / 頁' },
              { name: 'LED 背景畫面', price: 'HKD 1,200 起' },
              { name: '電子邀請卡', price: 'HKD 600' },
              { name: 'Sponsor Board', price: 'HKD 1,000' },
              { name: 'Pass 設計', price: 'HKD 500' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-6 hover:bg-white/5 transition-colors">
                <span className="text-gray-300 font-medium">{item.name}</span>
                <span className="text-pink-400 font-bold tracking-wide">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="設計作品展示" subtitle="Portfolio">
        <PortfolioGrid 
          items={[
            { id: 101, title: 'EDM Festival Poster', category: 'Poster Design', image: 'https://picsum.photos/seed/poster1/800/600' },
            { id: 102, title: 'Corporate Gala Backdrop', category: 'Backdrop', image: 'https://picsum.photos/seed/backdrop1/800/600' },
            { id: 103, title: 'Cafe Social Media Campaign', category: 'Social Media', image: 'https://picsum.photos/seed/social1/800/600' },
            { id: 104, title: 'Tech Summit Rollup', category: 'Banner', image: 'https://picsum.photos/seed/banner1/800/600' },
            { id: 105, title: 'VIP Invitation Card', category: 'Invitation', image: 'https://picsum.photos/seed/invite1/800/600' },
            { id: 106, title: 'Exhibition Sponsor Board', category: 'Event Design', image: 'https://picsum.photos/seed/sponsor1/800/600' },
          ]}
        />
      </Section>
    </div>
  );
}

import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import PriceCard from '../components/PriceCard';
import PortfolioGrid from '../components/PortfolioGrid';

export default function VideoProduction() {
  return (
    <div>
      <PageHeader 
        title="Promotional Video & Motion Graphics" 
        subtitle="影片製作與動畫"
        description="透過動態影像捕捉觀眾眼球。我們提供高質素的宣傳影片、創意動畫及活動視覺內容，讓您的品牌故事更具感染力。"
      />

      <Section darker title="影片服務項目" subtitle="Services">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: '活動宣傳片', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400' },
            { name: 'LED 屏幕動畫', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=400' },
            { name: 'Motion Graphics', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400' },
            { name: '活動倒數片', img: 'https://images.unsplash.com/photo-1470229722913-7c092db62220?auto=format&fit=crop&q=80&w=400' },
            { name: 'Opening Video', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=400' },
            { name: '活動 Highlight 回顧影片', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400' },
            { name: 'Loop Video', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
            { name: 'Social Media 短影片', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400' },
            { name: '舞台背景動畫', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=400' },
            { name: '產品展示動畫', img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=400' }
          ].map((item, index) => (
            <div key={index} className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-pink-500/30 transition-all aspect-square flex items-end p-4">
              <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity group-hover:scale-110 duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <span className="relative z-10 text-gray-200 font-medium group-hover:text-white transition-colors">{item.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="影片套餐" subtitle="Video Packages">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PriceCard 
            title="Basic Video Package"
            price="HKD 2,800"
            features={[
              '30秒 宣傳片 x 1',
              'Social Media 短影片 x 2',
              '包含基本配樂及字幕',
              '包 2 次免費修改'
            ]}
          />
          <PriceCard 
            title="Event Video Package"
            price="HKD 5,500"
            isPopular
            features={[
              '30秒 宣傳片 x 1',
              'Opening Video x 1',
              'LED Screen Animation x 1',
              'Loop Video x 1',
              '包含專業配樂、特效及字幕',
              '包 3 次免費修改',
              '專屬視覺風格設定'
            ]}
            delay={0.2}
          />
        </div>
      </Section>

      <Section darker title="單項影片價目表" subtitle="A La Carte Pricing">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden">
          <div className="divide-y divide-white/10">
            {[
              { name: '15秒宣傳片', price: 'HKD 900 起' },
              { name: '30秒宣傳片', price: 'HKD 1,500 起' },
              { name: '60秒宣傳片', price: 'HKD 2,500 起' },
              { name: 'LED 屏動畫', price: 'HKD 1,500 起' },
              { name: 'Motion Graphics', price: 'HKD 1,800 起' },
              { name: '活動倒數片', price: 'HKD 800 起' },
              { name: 'Opening Video', price: 'HKD 1,200 起' },
              { name: 'Highlight Video', price: 'HKD 2,000 起' },
              { name: 'Loop Video', price: 'HKD 1,000 起' },
              { name: 'Social Media 短影片', price: 'HKD 700' },
              { name: '舞台動畫', price: 'HKD 2,000 起' },
              { name: '產品動畫', price: 'HKD 1,500 起' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center p-6 hover:bg-white/5 transition-colors">
                <span className="text-gray-300 font-medium">{item.name}</span>
                <span className="text-purple-400 font-bold tracking-wide">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="影片作品展示" subtitle="Portfolio">
        <PortfolioGrid 
          items={[
            { id: 201, title: 'Brand Story Promo', category: 'Promo Video', image: 'https://picsum.photos/seed/video1/800/600' },
            { id: 202, title: 'Concert Opening Animation', category: 'Opening Video', image: 'https://picsum.photos/seed/video2/800/600' },
            { id: 203, title: 'Product 3D Showcase', category: 'Motion Graphics', image: 'https://picsum.photos/seed/video3/800/600' },
            { id: 204, title: 'Event Highlight Reel', category: 'Highlight Video', image: 'https://picsum.photos/seed/video4/800/600' },
            { id: 205, title: 'IG Reels Campaign', category: 'Social Media', image: 'https://picsum.photos/seed/video5/800/600' },
            { id: 206, title: 'Stage LED Background', category: 'LED Animation', image: 'https://picsum.photos/seed/video6/800/600' },
          ]}
        />
      </Section>
    </div>
  );
}

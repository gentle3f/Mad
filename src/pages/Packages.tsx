import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import PriceCard from '../components/PriceCard';

export default function Packages() {
  return (
    <div>
      <PageHeader 
        title="Event Packages" 
        subtitle="活動宣傳套餐"
        description="整合平面設計、宣傳影片及 3D Hologram 展示，為您的活動提供一站式、高性價比的宣傳解決方案。"
      />

      <Section darker title="精選套餐" subtitle="Featured Packages">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <PriceCard 
            title="Starter Package"
            price="HKD 3,800"
            features={[
              '活動海報設計 x 1',
              '社交媒體宣傳圖 x 2',
              '15秒 宣傳片 x 1',
              '適合小型活動及 Popup Store'
            ]}
            delay={0}
          />
          <PriceCard 
            title="Event Promotion"
            price="HKD 6,800"
            isPopular
            features={[
              '活動海報設計 x 1',
              '社交媒體宣傳圖 x 4',
              'Backdrop 設計 x 1',
              '30秒 宣傳片 x 1',
              'LED 動畫 x 1',
              '適合中型發布會及展覽'
            ]}
            delay={0.1}
          />
          <PriceCard 
            title="Premium Launch"
            price="HKD 9,800"
            features={[
              '活動海報設計 x 1',
              '社交媒體宣傳圖 x 6',
              'Backdrop 設計 x 1',
              'Rollup Banner 設計 x 2',
              '30秒 宣傳片 x 1',
              'Opening Video x 1',
              'LED Animation x 1',
              '適合大型品牌發布及年會'
            ]}
            delay={0.2}
          />
          <PriceCard 
            title="Hologram Event"
            price="HKD 12,800"
            features={[
              '活動海報設計 x 1',
              '社交媒體宣傳圖 x 4',
              '30秒 宣傳片 x 1',
              '3 把 Hologram Fan (3日租用)',
              '4 條 Hologram Video',
              '專人現場安裝及技術支援',
              '極致科技感視覺體驗'
            ]}
            delay={0.3}
          />
        </div>
      </Section>

      <Section title="需要度身訂造？" subtitle="Custom Solution">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-5 mix-blend-overlay" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">找不到合適的套餐？</h3>
            <p className="text-gray-300 mb-8 text-lg">
              告訴我們您的活動規模、預算及具體需求，我們的創意團隊將為您度身設計專屬的視覺宣傳方案。
            </p>
            <button 
              onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              聯絡我們獲取報價
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

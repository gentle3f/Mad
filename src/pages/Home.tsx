import { motion } from 'motion/react';
import { Palette, Video, Fan, Package, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-tight">
              創意製作與<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                活動宣傳方案
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-8 max-w-3xl mx-auto">
              Graphic Design · Promotional Video · Motion Graphics · 3D Hologram Display
            </p>
            
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              我們提供專業的活動視覺設計、宣傳影片、動畫內容及 3D Hologram 展示，幫助品牌在各類活動及宣傳中大幅提升吸引力與曝光率。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button to="/packages" variant="primary" className="w-full sm:w-auto text-lg px-10 py-4">
                查看服務
              </Button>
              <Button isContact variant="outline" className="w-full sm:w-auto text-lg px-10 py-4">
                立即查詢
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Intro */}
      <Section darker title="關於我們" subtitle="About Us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
              為您的品牌打造<br />
              <span className="text-pink-400">最具視覺衝擊力</span>的體驗
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              MAD PRODUCTION 瘋製作 專注於提供全方位的創意視覺解決方案。從活動平面設計、宣傳影片、Motion Graphics 到最前沿的 3D Hologram Fan 展示，我們致力於將您的創意轉化為令人驚嘆的視覺盛宴。
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-white font-semibold mb-3 border-b border-purple-500/30 pb-2">核心服務</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 活動平面設計</li>
                  <li>• 宣傳影片製作</li>
                  <li>• Motion Graphics</li>
                  <li>• 3D Hologram 展示</li>
                  <li>• 活動宣傳內容製作</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 border-b border-pink-500/30 pb-2">服務對象</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• 餐廳 / Cafe / 酒吧</li>
                  <li>• 商場 Popup / 展覽 Booth</li>
                  <li>• 品牌活動 / 新店開張</li>
                </ul>
              </div>
            </div>
            
            <Button to="/about" variant="secondary">
              了解更多公司背景 <ArrowRight size={16} className="ml-2 inline" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/agency/800/800?blur=2" 
                alt="Agency Workspace" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 border-2 border-white/10 rounded-3xl group-hover:border-purple-500/50 transition-colors duration-500" />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-10 -left-10 bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <span className="font-bold text-xl">10+</span>
                </div>
                <div>
                  <p className="text-white font-bold">Years Experience</p>
                  <p className="text-gray-400 text-sm">In Creative Industry</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Core Services */}
      <Section title="核心服務" subtitle="Our Services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Graphic Design"
            description="專業活動海報、社交媒體宣傳圖、Backdrop 及各類宣傳品設計。"
            icon={<Palette size={28} />}
            link="/graphic-design"
            delay={0}
          />
          <ServiceCard 
            title="Video Production"
            description="高質素宣傳影片、Motion Graphics、LED 屏幕動畫及活動 Highlight。"
            icon={<Video size={28} />}
            link="/video-production"
            delay={0.1}
          />
          <ServiceCard 
            title="3D Hologram Fan"
            description="吸睛的 3D 全息投影設備租用及專屬 3D 動畫內容設計。"
            icon={<Fan size={28} />}
            link="/hologram-fan"
            delay={0.2}
          />
          <ServiceCard 
            title="Event Packages"
            description="一站式活動宣傳套餐，整合設計、影片及全息投影，極具性價比。"
            icon={<Package size={28} />}
            link="/packages"
            delay={0.3}
          />
        </div>
      </Section>

      {/* Application Scenarios */}
      <Section darker title="應用場景" subtitle="Applications">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { name: '新店開張', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600' },
            { name: '展覽 Booth', img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=600' },
            { name: '商場活動', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600' },
            { name: '品牌發布', img: 'https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=600' },
            { name: '酒吧 Promotion', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600' },
            { name: '舞台活動', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600' }
          ].map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] group"
            >
              <img 
                src={scenario.img} 
                alt={scenario.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h4 className="text-white text-xl font-bold tracking-wide">{scenario.name}</h4>
                <div className="h-1 w-12 bg-pink-500 mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Portfolio */}
      <Section title="精選作品" subtitle="Featured Work">
        <PortfolioGrid 
          items={[
            { id: 1, title: '2025 科技高峰會', category: '平面設計', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
            { id: 2, title: '夏日音樂祭', category: '影片製作', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800' },
            { id: 3, title: '螢光派對視覺', category: '活動動畫', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800' },
            { id: 4, title: '限量球鞋發佈會', category: '3D 全息投影', image: 'https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=800' },
            { id: 5, title: '企業週年晚宴', category: '活動應用', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
            { id: 6, title: '精品咖啡廳開幕', category: '平面設計', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800' },
          ]}
        />
        <div className="text-center mt-12">
          <Button to="/portfolio" variant="outline">
            查看更多作品
          </Button>
        </div>
      </Section>
    </div>
  );
}

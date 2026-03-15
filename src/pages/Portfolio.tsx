import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import PortfolioGrid from '../components/PortfolioGrid';
import { motion } from 'motion/react';

const categories = ['全部', '平面設計', '影片製作', '活動動畫', '3D 全息投影', '活動應用'];

const portfolioData = [
  { id: 1, title: '2025 科技高峰會', category: '平面設計', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: '夏日音樂祭', category: '影片製作', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: '螢光派對視覺', category: '活動動畫', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: '限量球鞋發佈會', category: '3D 全息投影', image: 'https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: '企業週年晚宴', category: '活動應用', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: '精品咖啡廳開幕', category: '平面設計', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800' },
  { id: 7, title: '產品宣傳短片', category: '影片製作', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: '舞台 LED 視覺', category: '活動動畫', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: '名錶 3D 展示', category: '3D 全息投影', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800' },
  { id: 10, title: '商場快閃店', category: '活動應用', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { id: 11, title: '展覽攤位設計', category: '平面設計', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=800' },
  { id: 12, title: '酒吧宣傳影片', category: '影片製作', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredItems = activeCategory === '全部' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <div>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="作品展示"
        description="探索我們過往的創意專案。從平面設計到 3D 全息投影，我們為每個品牌打造獨一無二的視覺體驗。"
      />

      <Section darker>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid with Animation */}
        <motion.div 
          layout
          className="min-h-[600px]"
        >
          <PortfolioGrid items={filteredItems} />
        </motion.div>
      </Section>
    </div>
  );
}

import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import { motion } from 'motion/react';
import { Target, Zap, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="關於瘋製作"
        description="MAD PRODUCTION 瘋製作 是一家位於香港的高端創意製作公司，專注於為各類活動及品牌提供極具視覺衝擊力的宣傳方案。"
      />

      <Section darker>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              將瘋狂的創意<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                化為真實的視覺震撼
              </span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                在資訊爆炸的時代，平庸的宣傳已經無法吸引消費者的目光。MAD PRODUCTION 的理念很簡單：用最「瘋狂」的創意，結合最專業的製作技術，為客戶打造令人過目不忘的視覺體驗。
              </p>
              <p>
                我們不僅僅是一家設計公司或影片製作公司，我們是您的「視覺戰略夥伴」。從活動前期的預熱海報、社交媒體宣傳，到活動現場的震撼 Opening Video、LED 屏幕動畫，再到最前沿的 3D Hologram 全息投影展示，我們提供一站式的視覺解決方案。
              </p>
              <p>
                無論是新店開張、商場 Popup、酒吧派對還是大型展覽，我們都能根據您的品牌定位與活動性質，量身定制最具性價比且效果顯著的宣傳方案。
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <img src="https://picsum.photos/seed/about1/400/500" alt="Studio" className="rounded-2xl w-full object-cover aspect-[4/5] shadow-lg border border-white/5" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/about2/400/300" alt="Team" className="rounded-2xl w-full object-cover aspect-[4/3] shadow-lg border border-white/5" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/about3/400/300" alt="Equipment" className="rounded-2xl w-full object-cover aspect-[4/3] shadow-lg border border-white/5" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/about4/400/500" alt="Event" className="rounded-2xl w-full object-cover aspect-[4/5] shadow-lg border border-white/5" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section title="我們的優勢" subtitle="Why Choose Us">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Sparkles size={32} />, title: '極致視覺', desc: '追求高端、具設計感的視覺呈現，拒絕平庸。' },
            { icon: <Zap size={32} />, title: '一站式服務', desc: '從平面、影片到 3D 全息投影，無縫銜接。' },
            { icon: <Target size={32} />, title: '精準定位', desc: '深入了解品牌需求，提供最合適的宣傳策略。' },
            { icon: <Users size={32} />, title: '專業團隊', desc: '經驗豐富的設計師與動畫師，確保高品質產出。' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 transition-colors group"
            >
              <div className="text-pink-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}

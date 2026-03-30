import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import PriceCard from '../components/PriceCard';
import { Check, Minus } from 'lucide-react';

export default function WebDesign() {
  return (
    <div>
      <PageHeader 
        title="Website Design" 
        subtitle="網站設計及製作服務方案"
        description="我們為客戶提供網站設計、製作、上線及後續管理服務。無論你是初創公司、中小企、個人品牌，或希望建立更專業的企業形象，我們都可按你的需要提供合適方案。所有網站均以清晰、專業、實用為原則，並兼顧美感、流動裝置體驗及基本商業用途。"
      />

      <Section darker title="網站設計方案" subtitle="Website Packages">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <PriceCard 
            title="Basic Starter"
            price="HKD 4,800"
            period="起"
            features={[
              '1 至 3 頁網站設計及製作',
              '手機版及平板版適配',
              '基本文字及圖片排版',
              '聯絡表格',
              'WhatsApp / 電話 / Email 聯絡按鈕',
              '基本 SEO 設定',
              '協助網站上線',
              '1 次修改'
            ]}
            delay={0}
          />
          <PriceCard 
            title="Business Pro"
            price="HKD 8,800"
            period="起"
            isPopular
            features={[
              '5 至 8 頁網站設計及製作',
              '手機版及平板版適配',
              '首頁、關於我們、服務介紹、作品／案例、聯絡頁',
              '聯絡表格及 Google Map 嵌入',
              'WhatsApp 即時聯絡功能',
              '基本 SEO 設定及速度優化',
              '後台簡單教學',
              '2 次修改'
            ]}
            delay={0.1}
          />
          <PriceCard 
            title="Brand Showcase"
            price="HKD 14,800"
            period="起"
            features={[
              '8 至 15 頁網站設計及製作',
              '客製化版面設計',
              '作品展示／Gallery／Case Study 版面',
              '較佳動態效果及視覺呈現',
              'FAQ / Call-to-Action 設計',
              '基本 SEO 設定及網站速度優化',
              '後台教學',
              '3 次修改'
            ]}
            delay={0.2}
          />
          <PriceCard 
            title="E-commerce / Advanced"
            price="HKD 18,800"
            period="起"
            features={[
              '基本網店或進階功能網站製作',
              '商品上架（首 20 件）',
              '手機版及平板版適配',
              '基本 SEO 設定',
              '聯絡表格',
              '基本後台教學',
              '3 次修改',
              '付款系統、物流、會員制度等另行報價'
            ]}
            delay={0.3}
          />
        </div>
      </Section>

      <Section title="套餐功能比較" subtitle="Feature Comparison">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-purple-500/30">
                <th className="p-4 text-gray-400 font-medium w-1/4">功能 / 服務</th>
                <th className="p-4 text-white font-bold text-center w-[18%]">Basic Starter<br/><span className="text-sm text-purple-400 font-normal">HKD 4,800起</span></th>
                <th className="p-4 text-white font-bold text-center w-[18%] bg-purple-900/20 rounded-t-xl">Business Pro<br/><span className="text-sm text-pink-400 font-normal">HKD 8,800起</span></th>
                <th className="p-4 text-white font-bold text-center w-[18%]">Brand Showcase<br/><span className="text-sm text-purple-400 font-normal">HKD 14,800起</span></th>
                <th className="p-4 text-white font-bold text-center w-[18%]">E-commerce<br/><span className="text-sm text-purple-400 font-normal">HKD 18,800起</span></th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">適合對象</td>
                <td className="p-4 text-center text-sm">初創、小店、個人品牌</td>
                <td className="p-4 text-center text-sm bg-purple-900/10">中小企、專業服務</td>
                <td className="p-4 text-center text-sm">重視品牌形象及視覺</td>
                <td className="p-4 text-center text-sm">網店、預約、會員系統</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">頁面數量</td>
                <td className="p-4 text-center">1 - 3 頁</td>
                <td className="p-4 text-center bg-purple-900/10">5 - 8 頁</td>
                <td className="p-4 text-center">8 - 15 頁</td>
                <td className="p-4 text-center">按需求而定</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">設計風格</td>
                <td className="p-4 text-center text-sm">基本排版</td>
                <td className="p-4 text-center text-sm bg-purple-900/10">標準商業設計</td>
                <td className="p-4 text-center text-sm">客製化、較佳動態效果</td>
                <td className="p-4 text-center text-sm">進階功能導向</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">手機及平板適配</td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">聯絡表格 / 按鈕</td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">Google Map 嵌入</td>
                <td className="p-4 text-center"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">作品展示 / Case Study</td>
                <td className="p-4 text-center"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">網店 / 購物車 / 付款</td>
                <td className="p-4 text-center"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">商品上架</td>
                <td className="p-4 text-center"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center">首 20 件</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">基本 SEO 設定</td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
                <td className="p-4 text-center"><Check className="inline text-pink-500" size={20} /></td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">速度優化</td>
                <td className="p-4 text-center"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10">基本</td>
                <td className="p-4 text-center">進階</td>
                <td className="p-4 text-center">進階</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">後台教學</td>
                <td className="p-4 text-center"><Minus className="inline text-gray-600" size={20} /></td>
                <td className="p-4 text-center bg-purple-900/10">簡單教學</td>
                <td className="p-4 text-center">詳細教學</td>
                <td className="p-4 text-center">詳細教學</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">免費修改次數</td>
                <td className="p-4 text-center">1 次</td>
                <td className="p-4 text-center bg-purple-900/10 rounded-b-xl">2 次</td>
                <td className="p-4 text-center">3 次</td>
                <td className="p-4 text-center">3 次</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">製作時間</td>
                <td className="p-4 text-center">7 - 14 個工作天</td>
                <td className="p-4 text-center bg-purple-900/10">14 - 21 個工作天</td>
                <td className="p-4 text-center">21 - 30 個工作天</td>
                <td className="p-4 text-center">按功能另議</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-400 mt-4">
            備註：以上報價為參考起步價，實際收費將按網站頁數、功能、設計要求及內容複雜程度而定。所有方案均包含指定次數修改，超出部分將另行收費。
          </p>
        </div>
      </Section>

      <Section darker title="Hosting 及網站管理方案" subtitle="Hosting & Maintenance">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">A｜客戶自行管理</h3>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">HKD 0</div>
            <ul className="space-y-3 mb-6 text-sm text-gray-300">
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 我們完成網站製作後協助上線</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 客戶自行購買及管理網域、Hosting、Email 等服務</li>
            </ul>
            <div className="text-sm text-gray-400 mt-auto pt-4 border-t border-white/10">
              適合：已有技術支援，想自行控制所有網站帳戶的客戶
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">B｜Basic Hosting</h3>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">HKD 1,800 <span className="text-sm text-gray-400 font-normal">/ 年</span></div>
            <ul className="space-y-3 mb-6 text-sm text-gray-300">
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 1 個網域代管理</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 基本 Hosting & SSL 安全憑證</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 網站正常運作監察</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 每年 1 次小型更新</li>
            </ul>
            <div className="text-sm text-gray-400 mt-auto pt-4 border-t border-white/10">
              不包括：頻繁內容修改、大型版面更新、緊急技術支援
            </div>
          </div>

          <div className="bg-gradient-to-b from-purple-900/40 to-[#0a0a0a] border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] rounded-3xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
              Recommended
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">C｜Standard</h3>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">HKD 3,800 <span className="text-sm text-gray-400 font-normal">/ 年</span></div>
            <ul className="space-y-3 mb-6 text-sm text-gray-300">
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 1 個網域代管理 & Hosting</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> SSL 安全憑證 & 基本備份</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 定期系統更新</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 每月最多 1 次小修改</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 基本技術支援</li>
            </ul>
            <div className="text-sm text-gray-400 mt-auto pt-4 border-t border-white/10">
              適合：一般中小企，想有人代為管理網站但預算中等的客戶
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-white mb-2">D｜Premium</h3>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">HKD 6,800 <span className="text-sm text-gray-400 font-normal">/ 年</span></div>
            <ul className="space-y-3 mb-6 text-sm text-gray-300">
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 1 個網域代管理 & 高穩定 Hosting</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 定期更新及備份</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 每月最多 3 次內容修改</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 優先技術支援 & 網站表現監察</li>
              <li className="flex items-start gap-2"><Check size={16} className="text-pink-500 shrink-0 mt-0.5" /> 小型圖片 / Banner 更換協助</li>
            </ul>
            <div className="text-sm text-gray-400 mt-auto pt-4 border-t border-white/10">
              適合：希望網站有人長期跟進，經常需要更新內容的公司或品牌
            </div>
          </div>
        </div>
      </Section>

      <Section title="網域名稱說明" subtitle="Domain Name">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-3xl p-8">
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            如客戶需要指定網域名稱，網域費用將按實際註冊情況另計。不同網域尾綴（如 .com、.hk、.com.hk、.ai 等）收費均有所不同。
          </p>
          <h4 className="text-lg font-medium text-white mb-4">一般安排如下：</h4>
          <ul className="space-y-4 mb-8 text-gray-300">
            <li className="flex items-start gap-3">
              <Check size={20} className="text-pink-500 shrink-0 mt-0.5" />
              <span>如網域尚未被註冊，可代為協助購買及設定，費用按實際價格收取</span>
            </li>
            <li className="flex items-start gap-3">
              <Check size={20} className="text-pink-500 shrink-0 mt-0.5" />
              <span>如客戶指定之網域已被他人註冊，則需另行查詢能否購買或轉讓，價格另議</span>
            </li>
            <li className="flex items-start gap-3">
              <Check size={20} className="text-pink-500 shrink-0 mt-0.5" />
              <span>網域續費將按註冊商當時實際收費計算</span>
            </li>
            <li className="flex items-start gap-3">
              <Check size={20} className="text-pink-500 shrink-0 mt-0.5" />
              <span>客戶亦可選擇自行購買網域，我們協助進行網站連接及設定</span>
            </li>
          </ul>
          <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-4">
            <p className="text-sm text-gray-400">
              <span className="font-bold text-purple-400">備註：</span>網域名稱供應及價格會因註冊商及當時市場情況而有所變動，最終以實際購買價格為準。
            </p>
          </div>
        </div>
      </Section>

      <Section darker title="額外服務收費及付款方式" subtitle="Add-ons & Payment">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">1</span>
              額外服務收費
            </h3>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">額外頁面設計</span>
                  <span className="text-pink-400 font-medium">HKD 500 – 800 / 頁</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">中英雙語網站</span>
                  <span className="text-pink-400 font-medium">HKD 2,000 起</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">文案整理 / 潤稿</span>
                  <span className="text-pink-400 font-medium">HKD 1,500 起</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">Logo / 基本品牌視覺整理</span>
                  <span className="text-pink-400 font-medium">HKD 2,000 起</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">額外修改</span>
                  <span className="text-pink-400 font-medium">HKD 500 / 次 起</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">緊急修改（48 小時內）</span>
                  <span className="text-pink-400 font-medium">HKD 800 起</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">網站搬遷</span>
                  <span className="text-pink-400 font-medium">HKD 1,500 起</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">Google Analytics / Search Console 基本設定</span>
                  <span className="text-pink-400 font-medium">HKD 1,000 起</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-gray-300">電郵設定協助</span>
                  <span className="text-pink-400 font-medium">HKD 800 起</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-300">商品額外上架</span>
                  <span className="text-pink-400 font-medium">HKD 50 – 100 / 件</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">2</span>
              付款方式
            </h3>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-medium text-white mb-4">一般付款安排</h4>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 bg-purple-900/20 rounded-xl p-4 text-center border border-purple-500/20">
                  <div className="text-2xl font-bold text-purple-400 mb-1">50%</div>
                  <div className="text-sm text-gray-400">訂金</div>
                </div>
                <div className="text-gray-500">+</div>
                <div className="flex-1 bg-pink-900/20 rounded-xl p-4 text-center border border-pink-500/20">
                  <div className="text-2xl font-bold text-pink-400 mb-1">50%</div>
                  <div className="text-sm text-gray-400">網站完成及上線前支付</div>
                </div>
              </div>

              <h4 className="text-lg font-medium text-white mb-4">較大型項目安排</h4>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-purple-900/20 rounded-xl p-3 text-center border border-purple-500/20">
                  <div className="text-xl font-bold text-purple-400 mb-1">50%</div>
                  <div className="text-xs text-gray-400">訂金</div>
                </div>
                <div className="text-gray-500 text-sm">+</div>
                <div className="flex-1 bg-purple-900/20 rounded-xl p-3 text-center border border-purple-500/20">
                  <div className="text-xl font-bold text-purple-400 mb-1">40%</div>
                  <div className="text-xs text-gray-400">初稿確認後支付</div>
                </div>
                <div className="text-gray-500 text-sm">+</div>
                <div className="flex-1 bg-pink-900/20 rounded-xl p-3 text-center border border-pink-500/20">
                  <div className="text-xl font-bold text-pink-400 mb-1">10%</div>
                  <div className="text-xs text-gray-400">正式上線前支付</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">3</span>
              備註條款
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 list-disc pl-5">
              <li>客戶需按時提供文字、圖片、Logo、產品資料及其他相關內容。如客戶提供資料延遲，交付時間將相應順延。</li>
              <li>如需額外拍攝、影片製作、動畫、進階 SEO、廣告落地頁或品牌包裝，可另行報價。</li>
              <li>Hosting、網域、第三方插件、付費字體或外部服務，如有實際成本，將另行列明。</li>
              <li>客戶確認設計方向後，如需大幅改動整體風格、結構或功能，將視為新增項目另行報價。</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

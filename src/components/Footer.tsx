import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-[#050505] border-t border-purple-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              {!imgError ? (
                <img 
                  src="/logo.png" 
                  alt="MAD PRODUCTION" 
                  className="h-12 w-auto object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center p-[2px]">
                    <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">M</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-wider text-white leading-tight">MAD PRODUCTION</span>
                    <span className="text-[10px] text-purple-400 tracking-widest font-medium">瘋製作</span>
                  </div>
                </>
              )}
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              創意製作與活動宣傳方案。我們提供視覺設計、宣傳影片、動畫內容及 3D Hologram 展示，為您的品牌創造無限可能。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">SERVICES</h3>
            <ul className="space-y-3">
              <li><Link to="/graphic-design" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">Graphic Design</Link></li>
              <li><Link to="/video-production" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">Video Production</Link></li>
              <li><Link to="/hologram-fan" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">3D Hologram Fan</Link></li>
              <li><Link to="/packages" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">Event Packages</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link to="/portfolio" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wider">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-purple-400 shrink-0 mt-0.5" />
                <span>+852 9666 5858</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-purple-400 shrink-0 mt-0.5" />
                <span>gentle@madproduction.ai</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Hong Kong</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} MAD PRODUCTION 瘋製作. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <Link to="#" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

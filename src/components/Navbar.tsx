import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: '首頁', path: '/' },
  { name: '平面設計', path: '/graphic-design' },
  { name: '影片製作', path: '/video-production' },
  { name: '3D 全息投影', path: '/hologram-fan' },
  { name: '活動套餐', path: '/packages' },
  { name: '作品展示', path: '/portfolio' },
  { name: '關於我們', path: '/about' },
  { name: '聯絡我們', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  scrolled
    ? 'bg-[#050505]/90 backdrop-blur-md border-b border-purple-500/20 py-3'
    : 'bg-transparent py-4'
}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            {!imgError ? (
              <img 
                src="/logo.png" 
                alt="MAD PRODUCTION" 
                className="h-20 w-auto object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center p-[2px] shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] transition-all">
                  <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-xl">M</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-wider text-white leading-tight">MAD PRODUCTION</span>
                  <span className="text-xs text-purple-400 tracking-widest font-medium">瘋製作</span>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-pink-400 bg-purple-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-purple-500/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-pink-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, link, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>
        
        <Link 
          to={link}
          className="inline-flex items-center text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors group/link"
        >
          了解更多 
          <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Button from './Button';

interface PriceCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

export default function PriceCard({ title, price, period, features, isPopular, delay = 0 }: PriceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-3xl p-8 ${
        isPopular 
          ? 'bg-gradient-to-b from-purple-900/40 to-[#0a0a0a] border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' 
          : 'bg-[#0a0a0a] border border-white/10'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(236,72,153,0.5)]">
          Most Popular
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {price}
          </span>
          {period && <span className="text-gray-400 text-sm">{period}</span>}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300">
            <Check size={20} className="text-pink-500 shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <Button isContact variant={isPopular ? 'primary' : 'outline'} className="w-full">
        立即查詢
      </Button>
    </motion.div>
  );
}

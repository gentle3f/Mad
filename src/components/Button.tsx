import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import type { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: (e?: MouseEvent) => void;
  isContact?: boolean;
}

export default function Button({ children, to, href, variant = 'primary', className = '', onClick, isContact }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 relative overflow-hidden group cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10",
    outline: "bg-transparent text-white border-2 border-purple-500 hover:bg-purple-500/10 shadow-[inset_0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[inset_0_0_20px_rgba(168,85,247,0.4)]"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  const handlePress = (e: MouseEvent) => {
    if (isContact) {
      e.preventDefault();
      window.dispatchEvent(new Event('open-contact-modal'));
    }
    if (onClick) onClick(e);
  };

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={handlePress}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={handlePress} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={combinedClasses} 
      onClick={handlePress}
    >
      {content}
    </motion.button>
  );
}

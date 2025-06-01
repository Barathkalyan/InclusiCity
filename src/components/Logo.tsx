import React from 'react';
import { Accessibility } from 'lucide-react';
import { cn } from '../utils/cn';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md',
  className,
  iconOnly = false
}) => {
  const sizes = {
    sm: { icon: 20, text: 'text-lg' },
    md: { icon: 24, text: 'text-xl' },
    lg: { icon: 32, text: 'text-2xl' }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <Accessibility 
        size={sizes[size].icon}
        className="text-violet-600" 
        strokeWidth={2.5}
      />
      {!iconOnly && (
        <div className="flex items-baseline ml-2">
          <span className={cn("font-bold tracking-tight", sizes[size].text)}>
            Inclusi<span className="text-violet-600">City</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
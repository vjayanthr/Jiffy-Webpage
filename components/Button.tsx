
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = 'px-8 py-3 font-bold rounded-md transition-all duration-300 text-lg';

  const variantClasses = {
    primary: 'bg-brand-black text-brand-white hover:bg-brand-white hover:text-brand-black border-2 border-brand-black',
    secondary: 'bg-transparent text-brand-black border-2 border-brand-black hover:bg-brand-black hover:text-brand-white',
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

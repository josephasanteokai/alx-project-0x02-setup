// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  const sizeClass = sizeClasses[size];
  const shapeClass = shapeClasses[shape];

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClass} ${shapeClass} hover:bg-blue-700 transition duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;

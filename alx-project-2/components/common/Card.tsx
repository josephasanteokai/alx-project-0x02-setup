import React from 'react';
import { CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}

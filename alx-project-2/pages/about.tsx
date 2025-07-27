// pages/about.tsx
import React from 'react';
import Header from '@/components/layout/Header'; // ✅ Import Header
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div>
      <Header /> {/* ✅ Add Header at the top */}
      <div style={{ padding: '2rem' }}>
        <h1>About Page</h1>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Button size="small" shape="rounded-sm">Small</Button>
          <Button size="medium" shape="rounded-md">Medium</Button>
          <Button size="large" shape="rounded-full">Large</Button>
        </div>
      </div>
    </div>
  );
};

export default About;

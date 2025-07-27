// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header'; // ✅ Import Header

const Posts = () => {
  return (
    <div>
      <Header /> {/* ✅ Add Header */}
      <div style={{ padding: '2rem' }}>
        <h1>Posts Page</h1>
        <p>This page will list all the blog posts or articles.</p>
      </div>
    </div>
  );
};

export default Posts;

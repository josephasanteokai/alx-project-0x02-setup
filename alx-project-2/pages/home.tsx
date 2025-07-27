// pages/home.tsx
import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header'; // ✅ Import the Header

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div>
      <Header /> {/* ✅ Add the Header at the top */}

      <div style={{ padding: '2rem' }}>
        <h1>Home Page</h1>
        <button onClick={() => setIsModalOpen(true)}>Add Post</button>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        <div style={{ marginTop: '2rem' }}>
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

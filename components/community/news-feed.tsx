'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { CreatePost } from './create-post';
import { PostCard } from './post-card';
import { Post } from '@/lib/community/types';
import { useAuth } from '@/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function NewsFeed() {
  const { user } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);

  const handleNewPost = (post: Post) => {
    if (!user) {
      router.push('/auth/login?redirect=/community');
      return;
    }
    setPosts([post, ...posts]);
  };

  return (
    <div className="space-y-6">
      {user ? (
        <CreatePost onPost={handleNewPost} />
      ) : (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Join the Community</h3>
          <p className="text-muted-foreground mb-4">
            Sign in to create posts and interact with the community.
          </p>
          <Button onClick={() => router.push('/auth/login?redirect=/community')}>
            Sign In
          </Button>
        </Card>
      )}
      
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} isGuest={!user} />
        ))}
      </div>
    </div>
  );
}
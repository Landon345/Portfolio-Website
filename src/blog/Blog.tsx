import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import PostCard from "src/blog/PostCard";

interface Props {}

const Blog: React.FC = (props: Props) => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Post1", description: "I talk about basketball" },
    { id: 2, title: "Post2", description: "I talk about coding" },
  ]);
  return (
    <Box textAlign="center">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Box>
  );
};

export default Blog;

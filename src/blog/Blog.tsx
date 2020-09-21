import React from "react";
import { Box } from "@chakra-ui/core";
import PostCard from "src/blog/PostCard";
import { PostData } from "src/blog/PostData";

interface Props {}

const Blog: React.FC = (props: Props) => {
  return (
    <Box textAlign="center">
      {PostData.Posts.map((post) => (
        <PostCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          description={post.description}
          tags={post.hashTags}
        />
      ))}
    </Box>
  );
};

export default Blog;

import React, { useState } from "react";
import { Box } from "@chakra-ui/core";
import PostCard from "src/blog/PostCard";
import { PostData } from "src/blog/PostData";

interface Props {}

const Blog: React.FC = (props: Props) => {
  const [allPosts] = useState(PostData.Posts);
  const [posts, setPosts] = useState(PostData.Posts);

  const filter = (tagname: string) => {
    const newPosts = allPosts.filter((post) => post.hashTags.includes(tagname));
    setPosts(newPosts);
  };
  return (
    <Box textAlign="center">
      <Box bg="CardBackground" d="flex" flexWrap="wrap" p="10px">
        <Box
          d="inline-block"
          cursor="pointer"
          color="CardTagText"
          bg="CardTagBackground"
          p="10px 25px"
          m="10px"
          rounded="10px"
          onClick={() => setPosts(allPosts)}
        >
          All
        </Box>

        {PostData.allTags.map((tag) => (
          <Box
            cursor="pointer"
            color="CardTagText"
            bg="CardTagBackground"
            p="10px 25px"
            m="10px"
            rounded="10px"
            onClick={() => filter(tag)}
          >
            {tag}
          </Box>
        ))}
      </Box>
      {posts.map((post) => (
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

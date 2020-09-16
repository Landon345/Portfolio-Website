import React from "react";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";

type PostCardProps = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <Box bg="CardBackground" m="5%" p="30px">
      <Box color="CardHeadline">{title}</Box>
      <Box color="CardParagraph">{description}</Box>
      {image && (
        <Box>
          <img src={image} alt="" />
        </Box>
      )}
      <Box>
        <Link to={`/blog/${id}`}>Read More &gt;&gt;</Link>
      </Box>
    </Box>
  );
};

export default PostCard;

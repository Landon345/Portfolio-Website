import React from "react";
import { css } from "emotion";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tags?: Array<string>;
};

const PostCard: React.FC<PostCardProps> = ({
  slug,
  title,
  description,
  image,
  tags,
}) => {
  return (
    <Box bg="CardBackground" m="5%" p="30px" rounded="10px">
      <Box color="CardHeadline" fontSize="40px" my="30px">
        {title}
      </Box>
      <Box color="CardParagraph" fontSize="22px" my="20px">
        {description}
      </Box>
      {image && (
        <Box>
          <img src={image} alt="" />
        </Box>
      )}
      <Box
        color="CardTagBackground"
        fontSize="large"
        className={css`
          :hover {
            text-decoration: underline;
          }
        `}
      >
        <Link to={`/blog/${slug}`}>Read More &gt;&gt;</Link>
      </Box>
      <Box d="flex" justifyContent="flex-end">
        {tags?.map((tag) => (
          <Box
            bg="CardTagBackground"
            color="CardTagText"
            padding="10px"
            m="10px"
            borderRadius="10px"
          >
            {tag}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PostCard;

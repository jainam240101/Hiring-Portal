/** @format */

import { gql } from "@apollo/client";

export const createCommentMutation = gql`
  mutation createComment($postId: String!, $comment: String!) {
    createComment(input: { postId: $postId, comment: $comment }) {
      success
      message
    }
  }
`;

export const createLikeMutation = gql`
  mutation likePost($postId: String!) {
    likePost(input: { postId: $postId }) {
      success
      message
    }
  }
`;

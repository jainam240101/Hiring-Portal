/** @format */

import { gql } from "@apollo/client";

export const Queries = gql`
  query getPosts($pageNo: Int!) {
    getPosts(input: { pageNo: $pageNo }) {
      success
      message
      error
      data {
        id
        likes
        description
        mediaLink
        doesUserLike
        postedBy {
          id
          name
          email
          gender
          profilePic
          bio
        }
        comments {
          comment
          id
          userData {
            id
            name
            email
            gender
            profilePic
          }
        }
      }
    }
  }
`;

export const getProfilePic = gql`
  query getProfilePic {
    getMe {
      profilePic
      name
    }
  }
`;

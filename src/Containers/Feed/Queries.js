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

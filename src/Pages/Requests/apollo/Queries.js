/** @format */

import { gql } from "@apollo/client";

export const Queries = gql`
  query getRequestedUsers {
    getRequestedUsers {
      success
      message
      error
      data {
        id
        name
        profilePic
      }
    }
  }
`;

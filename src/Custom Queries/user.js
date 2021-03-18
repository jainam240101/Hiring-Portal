/** @format */

import { gql } from "@apollo/client";

export const IS_LOGGED_IN = gql`
  query getMe {
    getMe {
      loggedIn @client
      id @client
      name @client
      gender @client
      email @client
      profilePic @client
      bio @client
      userType @client
    }
  }
`;

export const me = gql`
  query getMe {
    getMe {
      id
      name
      gender
      email
      profilePic
      bio
      userType
    }
  }
`;

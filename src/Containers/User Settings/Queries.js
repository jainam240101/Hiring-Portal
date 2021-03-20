/** @format */

import { gql } from "@apollo/client";
export const getProfilePic = gql`
  query getProfilePic {
    getMe {
      id
      name
      email
      profilePic
      bio
      skills
    }
  }
`;

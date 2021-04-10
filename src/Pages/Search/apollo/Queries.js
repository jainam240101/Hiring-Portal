/** @format */

import { gql } from "@apollo/client";

export const Queries = gql`
  query searchUsers($search: String, $skills: [String], $pageNo: Int!) {
    searchUsers(input: { search: $search, skills: $skills, pageNo: $pageNo }) {
      success
      message
      error
      data {
        id
        name
        email
        gender
        profilePic
        bio
        userType
      }
    }
  }
`;

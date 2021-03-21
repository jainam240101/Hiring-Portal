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

export const updateUserMutation = gql`
  mutation updateUserMutation(
    $name: String
    $email: String
    $bio: String
    $skills: [String]
    $profilePic: String
  ) {
    updateUser(
      input: {
        name: $name
        email: $email
        bio: $bio
        skills: $skills
        profilePic: $profilePic
      }
    ) {
      message
      success
    }
  }
`;

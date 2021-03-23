import { gql } from "@apollo/client";

export const getProfileData = gql`
  query getProfileData {
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

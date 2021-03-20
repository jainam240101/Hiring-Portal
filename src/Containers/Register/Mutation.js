/** @format */

import { gql } from "@apollo/client";

export const RegisterHandler = gql`
  mutation SignUp(
    $name: String!
    $email: String!
    $password: String!
    $gender: String!
    $bio: String!
  ) {
    signUp(
      input: {
        name: $name
        email: $email
        password: $password
        gender: $gender
        bio: $bio
      }
    ) {
      success
      message
      data {
        name
        email
        gender
      }
    }
  }
`;

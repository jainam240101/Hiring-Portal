/** @format */

import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignIn($email:String!,$password:String!){
    signIn(input: { email: $email, password: $password }) {
      success
      cookie
      data {
        name
        email
        gender
      }
    }
  }
`;
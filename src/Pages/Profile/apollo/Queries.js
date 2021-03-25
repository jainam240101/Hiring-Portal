/** @format */

import { gql } from "@apollo/client";

export const getUserQuery = gql`
  query getUser($userId: ID!) {
    getUser(input: { userId: $userId }) {
      success
      message
      error
      userRelation {
        isAdmin
        isFollowing
        isFollower
        hasSentRequest
        hasReceivedRequest
      }
      data {
        id
        name
        email
        gender
        profilePic
        bio
        userType
        skills
        totalFollowers
        totalFollowing
      }
    }
  }
`;

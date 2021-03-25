import { gql, useMutation } from "@apollo/client";

export const acceptFollowRequestMutation = gql`
  mutation acceptFollowRequestMutation($requestedTo: ID!) {
    acceptFollowRequest(input: {requestedTo: $requestedTo}) {
      success
      message
      error
    }
  }
`;
export const requestToFollowUserMutation = gql`
  mutation requestToFollowUserMutation($requestedTo: ID!) {
    requestToFollowUser(input: {requestedTo: $requestedTo}) {
      success
      message
      error
    }
  }
`;

export const revokeToFollowUserRequestMutation = gql`
  mutation revokeToFollowUserRequestMutation($requestedTo: ID!) {
    revokeToFollowUserRequest(input: {requestedTo: $requestedTo}) {
      success
      message
      error
    }
  }
`;

export const declineFollowRequestMutation = gql`
  mutation declineFollowRequestMutation($requestedTo: ID!) {
    declineFollowRequest(input: {requestedTo: $requestedTo}) {
      success
      message
      error
    }
  }
`;
export const unFollowUserMutation = gql`
  mutation unFollowUserMutation($requestedTo: ID!) {
    unFollowUser(input: {requestedTo: $requestedTo}) {
      success
      message
      error
    }
  }
`;

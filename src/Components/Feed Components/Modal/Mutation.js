import { gql } from "@apollo/client"

export const createPostMutation = gql`
  mutation CreatePost(
    $postType: String!
    $description: String!
    $mediaLink: String!
  ) {
    createPost(
      input: {
        postType: $postType
        description: $description 
        mediaLink: $mediaLink
      }
    ) {
      success
      message
      data {
        postedBy {
          name
          email
        }
        postType
        description
      }
    }
  }
`;
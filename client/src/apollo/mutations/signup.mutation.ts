import { gql } from "@apollo/client";

export const signupMutation = gql`
  mutation signup($email: String!, $username: String!, $password: String!) {
    signup(
      SignupInput: { email: $email, username: $username, password: $password }
    ) {
      user {
        id
        email
        username
        firstname
        lastname
      }
      access_token
    }
  }
`;

import { gql } from "@apollo/client";

export const signupMutation = gql`
  mutation signup($email: String!, $username: String!, $password: String!) {
    signup(
      SignupInput: { email: $email, username: $username, password: $password }
    ) {
      access_token
    }
  }
`;

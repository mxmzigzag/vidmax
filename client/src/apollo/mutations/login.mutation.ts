import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(LoginInput: { email: $email, password: $password }) {
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

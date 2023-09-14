import { gql } from "@apollo/client";

export const updateMutation = gql`
  mutation update($email: String!, $password: String!) {
    update(LoginInput: { email: $email, password: $password }) {
      user {
        id
        email
        role
        username
      }
      access_token
    }
  }
`;

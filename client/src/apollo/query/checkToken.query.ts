import { gql } from "@apollo/client";

export const checkTokenQuery = gql`
  query checkToken($token: String!) {
    checkToken(TokenInput: $token) {
      access_token
    }
  }
`;

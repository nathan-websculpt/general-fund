import { gql } from "@apollo/client";

//for viewing pending users in a list
export const GQL_PENDING_USERS = () => {
  return gql`
    query ($limit: Int!, $offset: Int!) {
      userAddedSelves(orderBy: userNumber, orderDirection: desc, first: $limit, skip: $offset) {
        id
        userAddress
        userMsg
        userNumber
        vouchCount
      }
    }
  `;
};

//for getting a single Member
export const GQL_MEMBER_By_Address = () => {
  return gql`
    query ($slug: String!) {
      members(where: { memberAddress: $slug }) {
        id
        blockTimestamp
      }
    }
  `;
};

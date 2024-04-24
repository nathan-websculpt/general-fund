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

//for getting a list of Members
export const GQL_MEMBER_List = () => {
  return gql`
    query ($limit: Int!, $offset: Int!) {
      members(orderBy: memberNumber, orderDirection: desc, first: $limit, skip: $offset) {
        id
        memberAddress
        memberMsg
        blockTimestamp
      }
    }
  `;
};

//for getting a list of Members - used in table
export const GQL_MEMBER_List_For_Table = () => {
  return gql`
    query ($limit: Int!, $offset: Int!) {
      members(orderBy: memberNumber, orderDirection: desc, first: $limit, skip: $offset) {
        id
        memberAddress
        memberMsg
        memberNumber
        blockTimestamp
      }
    }
  `;
};

//for viewing Users in a 2-tier table with Vouches
export const GQL_USER_Two_Tier = () => {
  return gql`
    query ($limit: Int!, $offset: Int!) {
      userAddedSelves(orderBy: userNumber, orderDirection: desc, first: $limit, skip: $offset) {
        id
        userAddress
        userNumber
        userMsg
        blockTimestamp
        vouchers {
          id
          voucherAddress
          reasonVouchingFor
          blockTimestamp
        }
      }
    }
  `;
};

//for viewing Donations in a table
export const GQL_DONATIONS_List_For_Table = () => {
  return gql`
    query ($limit: Int!, $offset: Int!) {
      donations(orderBy: blockTimestamp, orderDirection: desc, first: $limit, skip: $offset) {
        id
        donor
        amount
        blockTimestamp
      }
    }
  `;
};

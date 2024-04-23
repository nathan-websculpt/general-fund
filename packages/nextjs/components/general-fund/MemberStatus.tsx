import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useAccount } from "wagmi";
import { GQL_MEMBER_By_Address } from "~~/helpers/getQueries";

export const MemberStatus = () => {
  const { address: connectedAddress } = useAccount();

  const { loading, error, data } = useQuery(GQL_MEMBER_By_Address(), {
    variables: { slug: connectedAddress },
  });

  useEffect(() => {
    if (error !== undefined && error !== null) console.log("GQL_MEMBER_By_Address Query Error: ", error);
  }, [error]);

  useEffect(() => {
    if (data !== undefined && data !== null) console.log("GQL_MEMBER_By_Address Query data: ", data);
  }, [data]);

  return (
    <>
      {data?.members?.length > 0 ? (
        <>
          <p>member since (timestamp): </p>
          {data?.members[0].blockTimestamp.toString()}
        </>
      ) : (
        <p>NOT A MEMBER ... yet</p>
      )}
    </>
  );
};

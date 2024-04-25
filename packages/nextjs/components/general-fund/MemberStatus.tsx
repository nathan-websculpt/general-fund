import { useEffect } from "react";
import { TryFinishMonthButton } from "./TryFinishMonthButton";
import { WithdrawButton } from "./WithdrawButton";
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

  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-2 m-4 mx-auto border shadow-xl border-base-300 bg-base-200 sm:rounded-lg">
        {/* <Spinner width="150px" height="150px" /> */}
        <h1>TODO: spinner....</h1>
      </div>
    );
  } else {
    return (
      <>
        {data?.members?.length > 0 ? (
          <>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <p>member since (timestamp):</p>
                <p className="font-mono text-xl">{data?.members[0].blockTimestamp.toString()}</p>
              </div>
              <WithdrawButton />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <p>TODO: remaining in this month:</p>
                <p className="font-mono text-xl">{data?.members[0].blockTimestamp.toString()}</p>
              </div>
              <TryFinishMonthButton />
            </div>
          </>
        ) : (
          <p>NOT A MEMBER ... yet</p>
        )}
      </>
    );
  }
};

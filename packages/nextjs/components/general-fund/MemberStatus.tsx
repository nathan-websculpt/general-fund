import { useEffect, useState } from "react";
import { TryFinishMonthButton } from "./TryFinishMonthButton";
import { WithdrawButton } from "./WithdrawButton";
import { useQuery } from "@apollo/client";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { GQL_MEMBER_By_Address } from "~~/helpers/getQueries";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

export const MemberStatus = () => {
  const { address: connectedAddress } = useAccount();
  const [nextTimestamp, setNextTimestamp] = useState<bigint>();
  const [timeRemaining, setTimeRemaining] = useState<bigint>();
  const [itsOver, setItsOver] = useState<bool>(false);

  const { loading, error, data } = useQuery(GQL_MEMBER_By_Address(), {
    variables: { slug: connectedAddress },
  });

  const { data: currentTimestamp } = useScaffoldReadContract({
    contractName: "GeneralFund",
    functionName: "returnTimestamp",
  });

  const { data: lastTimestamp } = useScaffoldReadContract({
    contractName: "GeneralFund",
    functionName: "lastTimestamp",
  });

  const { data: frequency } = useScaffoldReadContract({
    contractName: "GeneralFund",
    functionName: "frequency",
  });

  const { data: totalMonthlyFundsAvailable } = useScaffoldReadContract({
    contractName: "GeneralFund",
    functionName: "totalMonthlyFundsAvailable",
  });

  const { data: usersMonthlyLimit } = useScaffoldReadContract({
    contractName: "GeneralFund",
    functionName: "usersMonthlyLimit",
  });

  const { data: totalMembers } = useScaffoldReadContract({
    contractName: "GeneralFund",
    functionName: "totalMembers",
  });

  useEffect(() => {
    if (!frequency) return;
    if (!lastTimestamp) return;
    if (!currentTimestamp) return;

    setNextTimestamp(lastTimestamp + frequency);
  }, [frequency, lastTimestamp, currentTimestamp]);

  useEffect(() => {
    if (!nextTimestamp) return;

    if (currentTimestamp < nextTimestamp) {
      setTimeRemaining(nextTimestamp - currentTimestamp);
    } else {
      setItsOver(true);
    }
  }, [nextTimestamp]);

  useEffect(() => {
    if (itsOver) notification.info("It's time to reset the Month.", { position: "top-right", duration: 12000 });
  }, [itsOver]);

  useEffect(() => {
    if (error !== undefined && error !== null) console.log("GQL_MEMBER_By_Address Query Error: ", error);
  }, [error]);

  useEffect(() => {
    if (data !== undefined && data !== null) console.log("GQL_MEMBER_By_Address Query data: ", data);
  }, [data]);

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-2 p-2 m-4 mx-auto border shadow-xl border-base-300 bg-base-200 sm:rounded-lg">
        <span className="loading loading-spinner loading-lg"></span>
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
                <p>time remaining in month:</p>
                <p className="font-mono text-xl">{timeRemaining?.toString()}</p>
              </div>
              <TryFinishMonthButton />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <p>total members last month:</p>
                <p className="font-mono text-xl">{totalMembers?.toString()}</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <p>total funds last month:</p>
                {totalMonthlyFundsAvailable && (
                  <p className="font-mono text-xl">{formatEther(totalMonthlyFundsAvailable)}</p>
                )}
              </div>
              <div className="flex flex-row items-center gap-2">
                <p>funds available per user:</p>
                {usersMonthlyLimit && <p className="font-mono text-xl">{formatEther(usersMonthlyLimit)}</p>}
              </div>
            </div>
          </>
        ) : (
          <p>NOT A MEMBER ... yet</p>
        )}
      </>
    );
  }
};

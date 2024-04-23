import { useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

interface VouchForUserProps {
  userId: string;
  userAddress: string;
}

export const VouchForUser = (thisUser: VouchForUserProps) => {
  const [reasonForVouching, setReasonForVouching] = useState("test reason for vouching");
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("GeneralFund");

  const writeAsync = async () => {
    try {
      await writeYourContractAsync({
        functionName: "vouchForUser",
        args: [thisUser?.userId ,thisUser?.userAddress, reasonForVouching],
      });
    } catch (e) {
      console.error("Error calling vouchForUser on contract:", e);
    }
  };

  return (
    <>
      <button className="w-1/4 btn btn-primary" onClick={() => writeAsync()}>
        VOUCH FOR USER
      </button>
    </>
  );
};

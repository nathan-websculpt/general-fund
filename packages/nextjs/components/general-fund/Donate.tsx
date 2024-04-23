import { useEffect, useState } from "react";
import { parseEther } from "viem";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const Donate = () => {
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("GeneralFund");

  const writeAsync = async () => {
    try {
      await writeYourContractAsync({
        functionName: "donate",
        value: parseEther("0.5"),
      });
    } catch (e) {
      console.error("Error calling donate on contract:", e);
    }
  };

  return (
    <>
      <button className="w-1/4 btn btn-primary" onClick={() => writeAsync()}>
        DONATE
      </button>
    </>
  );
};

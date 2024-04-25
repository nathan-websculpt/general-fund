import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const WithdrawButton = () => {
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("GeneralFund");

  const writeAsync = async () => {
    try {
      await writeYourContractAsync({
        functionName: "memberWithdrawal",
      });
    } catch (e) {
      console.error("Error calling memberWithdrawal on contract:", e);
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => writeAsync()}>
        Withdraw
      </button>
    </>
  );
};

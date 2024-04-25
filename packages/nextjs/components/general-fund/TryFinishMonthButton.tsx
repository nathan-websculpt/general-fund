import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const TryFinishMonthButton = () => {
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("GeneralFund");

  const writeAsync = async () => {
    try {
      await writeYourContractAsync({
        functionName: "tryFinishMonth",
      });
    } catch (e) {
      console.error("Error calling tryFinishMonth on contract:", e);
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={() => writeAsync()}>
      Try Finish Month
      </button>
    </>
  );
};

import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const AddUser = () => {
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("GeneralFund");

  const writeAsync = async () => {
    try {
      await writeYourContractAsync({
        functionName: "addSelf",
        args: ["adding self as user"],
      });
    } catch (e) {
      console.error("Error calling addSelf on contract:", e);
    }
  };

  return (
    <>
      <button className="w-1/4 btn btn-primary" onClick={() => writeAsync()}>
        Make me a User
      </button>
    </>
  );
};

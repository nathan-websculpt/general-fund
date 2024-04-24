import { useState } from "react";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

export const AddUser = () => {
  const [reasonInput, setReasonInput] = useState("adding self as user");
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("GeneralFund");

  const writeAsync = async () => {
    try {
      await writeYourContractAsync({
        functionName: "addSelf",
        args: [reasonInput],
      });
    } catch (e) {
      console.error("Error calling addSelf on contract:", e);
    }
  };

  return (
    <>
      <div className="justify-center sm:gap-5 sm:flex sm:flex-row">
        <div className="flex flex-col">
          <label className="text-lg font-bold">Reason</label>
          <input
            type="text"
            placeholder="Reason"
            className="px-3 py-3 border rounded-lg bg-base-200 border-base-300"
            value={reasonInput}
            onChange={e => setReasonInput(e.target.value)}
          />{" "}
          <button className="mt-2 btn btn-primary" onClick={() => writeAsync()}>
            Make me a User
          </button>
        </div>
      </div>
    </>
  );
};

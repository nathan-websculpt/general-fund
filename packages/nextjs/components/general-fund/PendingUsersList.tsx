import { useEffect, useState } from "react";
import { Address } from "../scaffold-eth";
import { VouchForUser } from "./VouchForUser";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GQL_PENDING_USERS } from "~~/helpers/getQueries";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const PendingUsersList = () => {
  const [pageSize, setPageSize] = useState(25);
  const [pageNum, setPageNum] = useState(0);
  const { data: vouchesNeeded } = useScaffoldReadContract({
    contractName: "GeneralFund",
    functionName: "threshold",
  });

  const { loading, error, data } = useQuery(GQL_PENDING_USERS(), {
    variables: {
      limit: pageSize,
      offset: pageNum * pageSize,
    },
    pollInterval: 5000,
  });

  useEffect(() => {
    if (error !== undefined && error !== null) console.log("GQL_PENDING_USERS Query Error: ", error);
  }, [error]);

  useEffect(() => {
    if (data !== undefined && data !== null) console.log("GQL_PENDING_USERS DATA: ", data);
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
        <div className="flex justify-center gap-3 mb-3">
          <span className="my-auto text-lg">Page {pageNum + 1}</span>
          <select
            className="px-4 py-2 text-xl bg-primary"
            onChange={event => setPageSize(parseInt(event.target.value))}
            value={pageSize.toString()}
          >
            <option value="25">Show 25</option>
            <option value="10">Show 10</option>
            <option value="1">Show 1</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button disabled={!pageNum} className="btn btn-primary" onClick={() => setPageNum(prev => prev - 1)}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={() => setPageNum(prev => prev + 1)}>
            Next
          </button>
        </div>

        {data?.userAddedSelves?.map(user => (
          <div
            key={user.id}
            className="flex flex-col gap-2 p-2 m-4 border shadow-xl border-base-300 bg-base-200 sm:rounded-lg"
          >
            <div className="flex flex-row justify-between">
              <Address address={user.userAddress} size="lg" />
              <div className="flex flex-row items-center gap-2">
                <p>Needed to become a member:</p>
                <p className="font-mono text-xl">{vouchesNeeded - user.vouchCount}</p>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-2">
                <p>Total Vouches:</p>
                <p className="font-mono text-xl">{user.vouchCount}</p>
              </div>
              <div className="flex flex-row">
                <VouchForUser userId={user.id} userAddress={user.userAddress} />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-3 mx-5 mt-5">
          <button className="btn btn-sm" disabled={!pageNum} onClick={() => setPageNum(0)}>
            <ArrowLeftIcon className="w-4 h-4" />
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
          <span>...</span>
          <button className="btn btn-sm" disabled={!pageNum} onClick={() => setPageNum(prev => prev - 1)}>
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
          <span className="self-center font-medium text-primary-content">Page {pageNum + 1}</span>
          <button className="btn btn-sm" onClick={() => setPageNum(prev => prev + 1)}>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </>
    );
  }
};

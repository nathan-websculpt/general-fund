import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GQL_DONATIONS_List_For_Table } from "~~/helpers/getQueries";
import { DonationRow } from "./DonationRow";

export const DonationsTable = () => {
  const [pageSize, setPageSize] = useState(25);
  const [pageNum, setPageNum] = useState(0);

  const { loading, error, data } = useQuery(GQL_DONATIONS_List_For_Table(), {
    variables: {
      limit: pageSize,
      offset: pageNum * pageSize,
    },
    pollInterval: 10000,
  });

  useEffect(() => {
    if (error !== undefined && error !== null) console.log("DonationsTable.tsx Query Error: ", error);
  }, [error]);

  useEffect(() => {
    if (data !== undefined && data !== null) console.log("DonationsTable.tsx Query data: ", data);
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center w-full min-w-full gap-2 p-2 m-4 border shadow-xl border-base-300 bg-base-200 sm:rounded-lg">
        {/* <Spinner width="150px" height="150px" /> */}
        <p>TODO: Spinner</p>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex gap-3 mb-3">
          <span className="my-auto text-lg">LATEST DONATIONS</span>
          <select
            className="px-4 py-2 text-xl bg-primary"
            onChange={event => setPageSize(parseInt(event.target.value))}
            value={pageSize.toString()}
          >
            <option value="25">Showing 25</option>
            <option value="10">Showing 10</option>
            <option value="1">Showing 1</option>
          </select>
        </div>

        <table className="table w-full text-xl table-auto bg-base-100 md:table-lg table-xs">
          <thead>
            <tr className="text-sm rounded-xl text-base-content">
              <th className="bg-primary">Donor</th>
              <th className="bg-primary">Amount</th>
              <th className="bg-primary">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data?.donations?.map(donation => (
              <DonationRow
                key={donation?.id}
                id={donation?.id}
                donor={donation?.donor}
                amount={donation?.amount}
                timestamp={donation?.blockTimestamp}
              />
            ))}
          </tbody>
        </table>

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
          <button
            className="btn btn-sm"
            // disabled={isNextButtonDisabled}
            onClick={() => setPageNum(prev => prev + 1)}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </>
    );
  }
};

import { useEffect, useState } from "react";
import { MonthRow } from "./MonthRow";
import { useQuery } from "@apollo/client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { GQL_MONTH_List_For_Table } from "~~/helpers/getQueries";

export const MonthsTable = () => {
  const [pageSize, setPageSize] = useState(25);
  const [pageNum, setPageNum] = useState(0);

  const { loading, error, data } = useQuery(GQL_MONTH_List_For_Table(), {
    variables: {
      limit: pageSize,
      offset: pageNum * pageSize,
    },
    pollInterval: 10000,
  });

  useEffect(() => {
    if (error !== undefined && error !== null) console.log("MonthsTable.tsx Query Error: ", error);
  }, [error]);

  useEffect(() => {
    if (data !== undefined && data !== null) console.log("MonthsTable.tsx Query data: ", data);
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
        <div className="flex gap-3 mb-3">
          <span className="my-auto text-lg">LATEST MONTHS</span>
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
              <th className="bg-primary">Start Timestamp</th>
              <th className="bg-primary">End Timestamp</th>
              <th className="bg-primary">Members</th>
              <th className="bg-primary">Funds</th>
              <th className="bg-primary">Funds Per Member</th>
            </tr>
          </thead>
          <tbody>
            {data?.months?.map(month => (
              <MonthRow
                key={month?.id}
                id={month?.id}
                startTimestamp={month?.startTimestamp}
                endTimestamp={month?.endTimestamp}
                members={month?.members}
                funds={month?.funds}
                fundsPerMember={month?.fundsPerMember}
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

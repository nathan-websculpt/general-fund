import { formatEther } from "viem";

interface MonthRowProps {
  id: string;
  startTimestamp: bigint;
  endTimestamp: bigint;
  members: bigint;
  funds: bigint;
  fundsPerMember: bigint;
}

export const MonthRow = (month: MonthRowProps) => {
  return (
    <>
      <tr>
        <td>{month?.startTimestamp}</td>
        <td>{month?.endTimestamp}</td>
        <td>{month?.members}</td>
        <td>{formatEther(month?.funds)}</td>
        <td>{formatEther(month?.fundsPerMember)}</td>
      </tr>
    </>
  );
};

import { useState } from "react";
import { VouchesSubTable } from "./VouchesSubTable";
import { Address } from "~~/components/scaffold-eth";
import { TVouch } from "~~/helpers/getTypes";

interface UserRowProps {
  id: string;
  userNumber: number;
  address: string;
  message: string;
  timestamp: bigint;
  vouches: TVouch[];
}

export const UserRow = (user: UserRowProps) => {
  const [rowOpen, setRowOpen] = useState(false);

  return (
    <>
      <tr>
        <td className="cursor-pointer" onClick={() => setRowOpen(!rowOpen)}>
          <svg
            className={`w-6 h-6 z-40  ${rowOpen ? "rotate-90" : "rotate-0"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 7l6 5-6 5V7z" fill="#ffffff" />
          </svg>
        </td>

        <td>{user?.userNumber.toString()}</td>
        <td>
          <Address address={user?.address} size="sm" />
        </td>
        <td>{user?.message}</td>
        <td>{user?.timestamp}</td>
      </tr>
      <tr className={` ${rowOpen ? "rowOpen" : "hidden"} `}>
        {/* drillable, nested table */}
        <td colSpan={3}>
          <VouchesSubTable vouches={user?.vouches} />
        </td>
      </tr>
    </>
  );
};

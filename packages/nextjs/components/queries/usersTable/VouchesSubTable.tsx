import { VouchRow } from "./VouchRow";
import { TVouch } from "~~/helpers/getTypes";

interface VouchesSubTableProps {
  vouches: TVouch[];
}

export const VouchesSubTable = (thisUser: VouchesSubTableProps) => {
  return (
    <>
      <table className="table w-full text-xl table-auto bg-base-200 table-md">
        <thead>
          <tr className="text-sm rounded-xl text-base-content">
            <th className="bg-primary">Address</th>
            <th className="bg-primary">Reason</th>
          </tr>
        </thead>
        <tbody>
          {thisUser?.vouches?.map(vouch => (
            <VouchRow key={vouch?.id} address={vouch?.voucherAddress} reason={vouch?.reasonVouchingFor} />
          ))}
        </tbody>
      </table>
    </>
  );
};

import { Address } from "~~/components/scaffold-eth";

interface VouchRowProps {
  address: string;
  reason: string;
  timestamp: string;
}

export const VouchRow = (thisVoucher: VouchRowProps) => {
  return (
    <>
      <tr>
        {/* todo: add a status??? */}
        <td>
          <Address address={thisVoucher?.address} size="sm" />
        </td>
        <td>{thisVoucher?.reason}</td>
        <td>{thisVoucher?.timestamp}</td>
      </tr>
    </>
  );
};

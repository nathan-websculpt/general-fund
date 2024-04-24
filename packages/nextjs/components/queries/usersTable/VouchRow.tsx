import { Address } from "~~/components/scaffold-eth";

interface VouchRowProps {
  address: string;
  reason: string;
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
      </tr>
    </>
  );
};

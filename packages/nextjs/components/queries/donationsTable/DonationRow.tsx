import { formatEther } from "viem";
import { Address } from "~~/components/scaffold-eth";

interface DonationRowProps {
  id: string;
  donor: string;
  amount: bigint;
  timestamp: string;
}

export const DonationRow = (donation: DonationRowProps) => {
  return (
    <>
      <tr>
        <td>
          <Address address={donation?.donor} size="sm" />
        </td>
        <td>{formatEther(donation?.amount)}</td>
        <td>{donation?.timestamp}</td>
      </tr>
    </>
  );
};

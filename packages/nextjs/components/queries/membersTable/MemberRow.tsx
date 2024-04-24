import { Address } from "~~/components/scaffold-eth";

interface MemberRowProps {
  id: string;
  memberNumber: number;
  address: string;
  message: string;
  timestamp: string;
}

export const MemberRow = (member: MemberRowProps) => {
  return (
    <>
      <tr>
        <td>{member?.memberNumber.toString()}</td>
        <td>
          <Address address={member?.address} size="sm" />
        </td>
        <td>{member?.message}</td>
        <td>{member?.timestamp}</td>
      </tr>
    </>
  );
};

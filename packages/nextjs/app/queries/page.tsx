"use client";

import type { NextPage } from "next";
import { DonationsTable } from "~~/components/queries/donationsTable/DonationsTable";
import { MembersTable } from "~~/components/queries/membersTable/MembersTable";
import { UsersTable } from "~~/components/queries/usersTable/UsersTable";

const Queries: NextPage = () => {
  return (
    <>
      <div className="container mx-auto my-10 overflow-auto">
        <UsersTable />
      </div>

      <div className="container mx-auto my-10 overflow-auto">
        <MembersTable />
      </div>
      
      <div className="container mx-auto my-10 overflow-auto">
        <DonationsTable />
      </div>
    </>
  );
};

export default Queries;

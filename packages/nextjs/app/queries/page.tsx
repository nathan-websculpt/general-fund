"use client";

import type { NextPage } from "next";
import { DonationsTable } from "~~/components/queries/donationsTable/DonationsTable";
import { MembersTable } from "~~/components/queries/membersTable/MembersTable";
import { MonthsTable } from "~~/components/queries/monthsTable/MonthsTable";
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

      <div className="container mx-auto my-10 overflow-auto">
        <MonthsTable />
      </div>
    </>
  );
};

export default Queries;

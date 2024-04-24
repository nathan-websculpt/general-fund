"use client";

import type { NextPage } from "next";
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
    </>
  );
};

export default Queries;

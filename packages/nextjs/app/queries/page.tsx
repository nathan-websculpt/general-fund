"use client";

import type { NextPage } from "next";
import { MembersTable } from "~~/components/queries/membersTable/MembersTable";
import { UsersTable } from "~~/components/queries/usersTable/UsersTable";

const Queries: NextPage = () => {

    return (
      <>
        <UsersTable />

        <MembersTable />
      </>
    );
};

export default Queries;
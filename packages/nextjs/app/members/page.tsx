"use client";

import type { NextPage } from "next";
import { MembersList } from "~~/components/members/membersList";

const Members: NextPage = () => {

    return (
      <>
        <h1>Members</h1>

        <MembersList />
      </>
    );
};

export default Members;
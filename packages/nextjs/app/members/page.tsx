"use client";

import type { NextPage } from "next";
import { MembersList } from "~~/components/members/membersList";

const Members: NextPage = () => {
  return (
    <>
      <div className="flex flex-col w-full p-4 mx-auto shadow-xl sm:my-auto bg-secondary sm:p-7 sm:rounded-lg sm:w-4/5 lg:w-2/5">
        <MembersList />
      </div>
    </>
  );
};

export default Members;

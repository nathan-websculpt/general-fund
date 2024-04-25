"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MemberStatus } from "~~/components/general-fund/MemberStatus";
import { PendingUsersList } from "~~/components/general-fund/PendingUsersList";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col w-full p-4 mx-auto shadow-xl sm:my-auto bg-secondary sm:p-7 sm:rounded-lg sm:w-4/5 lg:w-2/5">
        <div className="px-5">
          <h1 className="mb-4 text-center">
            <span className="block mb-2 text-2xl">Welcome to</span>
            <span className="block text-4xl font-bold">General Fund</span>
          </h1>
          
          <MemberStatus />

          <p className="mt-12 mb-6 text-4xl text-center">Viewing Users</p>
          <PendingUsersList />
        </div>
      </div>
    </>
  );
};

export default Home;

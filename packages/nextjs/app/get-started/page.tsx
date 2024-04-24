"use client";

import type { NextPage } from "next";
import { AddUser } from "~~/components/general-fund/AddUser";

const GetStarted: NextPage = () => {
  return (
    <>
    <div className="px-6 pt-10 pb-8 shadow-xl sm:my-auto bg-secondary sm:mx-auto sm:max-w-11/12 md:w-9/12 sm:rounded-lg sm:px-10">
      <div className="flex flex-col items-center flex-grow w-1/3 pt-10 mx-auto">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block mb-2 text-4xl">Getting Started?</span>
            <span className="block text-2xl font-bold">
              Become a user today, and then you need X amount of Members to vouch for you
            </span>
            <span className="block mt-5 text-xl font-bold">
              Then, you are a Member of the General Fund, and you will be able to withdraw
            </span>
          </h1>
        </div>
        <div className="px-5 mt-8">
          <AddUser />
        </div>
      </div>
      </div>
    </>
  );
};

export default GetStarted;

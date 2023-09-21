import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";

const TopicList = () => {
  return (
    <>
      <div className=" p-4 border border-slate-300 my-3 flex justify-between gap-5">
        <div className=" ">
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>

        <div className="flex gap-2 items-center">
          <RemoveBtn />
          <Link href={"/editTopic/{id}"} className=" text-blue-700">
            <AiFillEdit size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicList;

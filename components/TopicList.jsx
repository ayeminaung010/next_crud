import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch topics..");
    }
    return res.json();
  } catch (err) {
    console.log("error loading topics..:", err);
  }
};

const TopicList = async () => {
  const {topics} = await getTopics();

  return (
    <>
      {topics?.map((t) => (
        <div key={t._id} className=" p-4 border border-slate-300 my-3 flex justify-between gap-5">
          <div className=" ">
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2 items-center">
            <RemoveBtn />
            <Link href={"/editTopic/{id}"} className=" text-blue-700">
              <AiFillEdit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;

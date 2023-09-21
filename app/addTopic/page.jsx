import React from "react";

const page = () => {
  return (
    <form>
      <input
        type="text"
        name=""
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Title"
        id=""
      />

      <input
        type="text"
        name=""
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Description"
        id=""
      />

      <button className=" bg-green-500 fon-bold text-white py-3 px-6 w-fit">Add Topic</button>
    </form>
  );
};

export default page;

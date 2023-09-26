"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const [title ,setTitle] = useState("");
  const [description ,setDescription] = useState("");
  const router  = useRouter();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!title || !description){
      alert("Please enter a title and description..!");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/topics`,{
        method : "POST",
        headers : {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({title,description}),
      });

      if(res.ok){
        router.push('/');
      }else{
        throw new Error("Failed to create topic");
      }
    } catch(e){
      console.log(e);
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
        name=""
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Title"
        id=""
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        value={description}
        name=""
        className="border border-slate-500 px-8 py-2"
        placeholder="Topic Description"
        id=""
      />

      <button className=" bg-green-500 fon-bold text-white py-3 px-6 w-fit">Add Topic</button>
    </form>
  );
};

export default AddTopic;

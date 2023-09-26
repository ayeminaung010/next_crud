'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"


const EditTopicForm = ({id,title,description}) => {
  console.log(id,title,description);
  const [newTitle,setNewTitle] = useState(title);
  const [newDescription,setNewDescription] = useState(description);
  const router = useRouter();

  const submitHandler = async(e) =>{
    e.preventDefault();
     try{
      const res =  await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method : 'PUT',
        headers : {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify({newTitle,newDescription})
      })
      if(res.ok){
        router.push('/');
      }else{
        throw new Error("failed to update topic..")
      }
     }catch(e){
      throw new Error("Can't update topic: " + e.message);
     }
  }
  return (
    <div>
        <form onSubmit={submitHandler}  className="flex flex-col gap-3">
          <input
            className="border border-slate-500 px-8 py-2"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Topic Title"
          />

          <input
            className="border border-slate-500 px-8 py-2"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Topic Description"
          />

          <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
            Update Topic
          </button>
        </form>

    </div>
  )
}

export default EditTopicForm

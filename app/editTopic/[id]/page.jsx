import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById  = async(id) =>{
  try{
    const res  = await fetch(`https://localhost:3000/api/topics/${id}`,{
      cache: "no-store",
    })
    return res.json();
    if(!res.ok){
      throw new Error("Failed to fetch topic")
    }
  }catch(e){
    console.log(e);
  }
}

const EditTopicById = async({params}) => {
  const {id} = params;
  console.log(id);
  const {topic} =  await getTopicById(id);
  const {title,description} = topic;
  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  )
}

export default EditTopicById

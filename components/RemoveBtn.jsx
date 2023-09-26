'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import {CiCircleRemove} from 'react-icons/ci'

const RemoveBtn = ({id}) => {
  const router = useRouter();
  const removeTopic = async() =>{
    const confirmed = confirm('Are you sure you want to remove?');
    if(confirmed){
      const res =  await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method: 'DELETE',
      })
      if(res.ok){
        router.refresh();
      }else{
        throw new Error("Couldn't remove");
      }
    }
  }
  return (
    <button onClick={removeTopic} className=' text-red-500'>
      <CiCircleRemove size={24} />
    </button>
  )
}

export default RemoveBtn

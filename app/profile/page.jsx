"use client";

import {useEffect,useState} from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Profile from '@components/Profile';
const MyProfile = () => {
  const [prompt, setPrompt] = useState([]);
  const {data:session}=useSession();
  const router=useRouter();
  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/posts`);
      const data = await response.json();
      setPrompt(data);
    };
    if(session?.user.id){
      fetchPrompts();
    }
  }, []);
    const handleEdit=(post)=>{
        router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelte=async(post)=>{
      const hasConfirmed=confirm('Are you sure you want to delete this prompt')
      if(hasConfirmed){
        try {
          await fetch(`/api/prompt/${post._id.toString()}`,{
            method:'DELETE'
          })
          const filteredPost=prompt.filter((p)=>p._id!==post._id)
          setPrompt(filteredPost);
        } catch (error) {
          console.log(error);
        }
      }
    }
  return (
    <Profile
        name='My'
        desc='Welcome to your personalized profile page'
        data={prompt}
        handleEdit={handleEdit}
        handleDelete={handleDelte}
    />
  )
}

export default MyProfile
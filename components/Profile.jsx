import React from 'react'
import PromptCard from './PromptCard'
const Profile = ({data,desc,handleDelete,handleEdit,name}) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='gray_gradient'>{name} profile</span>
      </h1>
      <p className='desc text-left'>
        {desc}
      </p> 

      <div className="mt-10 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          post={prompt}
          handleDelete={()=>handleDelete && handleDelete(prompt)}
          handleEdit={()=>handleEdit && handleEdit(prompt)}
        />
      ))}
    </div>
    </section>
  )
}

export default Profile
import React from "react";
import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text">
        <span className="gray_gradient">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share Amazing prompts with world and let your imagination run wild with any AI-Powered Platform.
      </p>
      <form 
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col glassmorphism gap-7">
      <label>
        <span className=" font-satoshi font-semibold text-base text-gray-600">Your AI-Prompt</span>
        <textarea 
        required
        value={post.prompt} 
        onChange={(e)=>setPost({...post,prompt:e.target.value})}
        className="form_textarea"
        placeholder="Write your Prompt here..."
        >

        </textarea>
      </label> 

      <label>
        <span className=" font-satoshi font-semibold text-base text-gray-600">
          Tags
        </span>
        <input 
        type='text'
        required
        value={post.tag} 
        onChange={(e)=>setPost({...post,tag:e.target.value})}
        className="form_input"
        placeholder="#idea,#web,#product,#roadmap etc."
        >

        </input>
      </label>
      <div className="flex-end mx-3 mb-5 gap-4">
        <Link href="/" className="text-sm text-gray-500">
          Cancel
        </Link>
        <button
        type="submit"
        disabled={submitting}
        className="px-5 py-1.5 text-white text-sm bg-primary-purple rounded-full"
        >
          {submitting ? `${type}...` :type}

        </button>
      </div> 
      </form>
    </section>
  )
};

export default Form;

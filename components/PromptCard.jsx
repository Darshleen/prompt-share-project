"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
const PromptCard = ({ post, handleTagClick, handleDelete, handleEdit }) => {
  const [copied, setCopied] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 2000);
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-center gap-5">
        <div className="flex-1 flex justify-start items-start gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_img"
            width={40}
            height={40}
            className="rounded-full object"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-satoshi text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "assets/icons/tick.svg"
                : "assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="font-satoshi text-sm my-4 text-gray-700">{post.prompt}</p>
      <p
        className="cursor-pointer font-inter text-sm text-blue-400"
        onClick={() => {
          handleTagClick && handleTagClick(post.tag);
        }}
      >
        {post.tag}
      </p>
      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className="mt-5 pt-3 flex-center gap-10 border-t boder">
          <p className="edit_del green_gradient" onClick={handleEdit}>
            Edit
          </p>
          <p className="edit_del orange_gradient" onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;

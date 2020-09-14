import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { PostAction } from "../../../store/interface";
export interface PostDescriptionProps {
  post: PostAction;
}

export const PostDescription: React.FC<PostDescriptionProps> = (props) => {
  return (
    <div>
      <Link to={`/blogs/posts/view_post/${props.post.id}`}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          exit={{ opacity: 0, transition: { delay: 1 } }}
          className="object-cover h-64 lg:h-76 w-full"
          src={
            props.post.image ||
            "https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          alt=""
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          exit={{ opacity: 0, transition: { delay: 1 } }}
          className="w-full absolute top-0  flex justify-center"
        >
          <div className="lg:bg-secondary-background max-w-xs lg:border  lg:border-yellow-800  rounded overflow-hidden shadow-lg m-5">
            <div className="px-6 py-4">
              <div className="text-white hover:underline lg:text-secondary font-bold text-xl text-center mb-2">
                {props.post.title}
              </div>
              <p className="hidden lg:block  text-tertiary text-base md:text-left">
                {props.post.subtitle}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">{props.children}</div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

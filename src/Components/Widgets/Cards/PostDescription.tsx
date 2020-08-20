import React from "react";
export interface PostDescriptionProps {
  title: string;
  subtitle: string;
}

export const PostDescription: React.SFC<PostDescriptionProps> = (props) => {
  return (
    <div className="lg:bg-white max-w-xs lg:border  lg:border-yellow-800  rounded overflow-hidden shadow-lg m-5">
      <div className="px-6 py-4">
        <div className=" text-white lg:text-black font-bold text-xl text-center mb-2">
          {props.title}
        </div>
        <p className="hidden lg:block  text-gray-700 text-base md:text-left">
          {props.subtitle}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">{props.children}</div>
    </div>
  );
};

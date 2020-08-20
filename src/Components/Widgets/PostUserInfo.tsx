import React from "react";
export interface PostUserInfoProps {
  image: string;
}

export const PostUserInfo: React.SFC<PostUserInfoProps> = (props) => {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={props.image}
        alt="Avatar of Jonathan Reinink"
      />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  );
};

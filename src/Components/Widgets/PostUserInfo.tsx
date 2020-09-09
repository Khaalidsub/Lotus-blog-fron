import React from "react";
export interface PostUserInfoProps {
  image: string;
  user: string;
  time?: string;
}

export const PostUserInfo: React.SFC<PostUserInfoProps> = (props) => {
  return (
    <div className="flex items-center ml-3 mr-3">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={props.image}
        alt={`Avatar of ${props.user}`}
      />
      <div className="text-sm">
        <p className="text-tertiary leading-none">{props.user}</p>
        <p className="text-gray-600">{props.time}</p>
      </div>
    </div>
  );
};

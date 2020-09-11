import React from "react";
import { UserAction } from "../../store/interface";
import { Link } from "react-router-dom";
export interface PostUserInfoProps {
  user: UserAction;
  time?: string;
}

export const PostUserInfo: React.SFC<PostUserInfoProps> = (props) => {
  return (
    <div className="flex items-center ml-3 mr-3">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src={
          props.user.image ||
          "https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
        alt={`Avatar of ${props.user.name}`}
      />
      <div className="text-sm">
        <Link to={`/blogs/profile/${props.user.id}`}>
          <p className="text-tertiary leading-none hover:underline cursor-pointer">
            {props.user.name}
          </p>
        </Link>
        <p className="text-gray-600">{props.time}</p>
      </div>
    </div>
  );
};

import React from "react";
import { type } from "os";

export interface NotifcationCardProps {
  type: string;
  message: string;
  isShown: boolean;
}

const NotifcationCard: React.SFC<NotifcationCardProps> = (props) => {
  const fuzz = props.isShown ? "block" : "hidden";
  return (
    <div className={`absolute ${fuzz}  top-0 right-0`}>
      <div
        className={`max-w-sm rounded-full bg-${type.toString()} text-center text-tertiary p-2 flex flex-row`}
      >
        <p className="text-red-700 text-base">X</p>
        <p className="text-lg">{props.message}</p>
      </div>
    </div>
  );
};

export default NotifcationCard;

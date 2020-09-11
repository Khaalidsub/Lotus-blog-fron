import React from "react";

export interface NotifcationCardProps {
  type: string;
  message: string;
  isShown: boolean;
  hide: () => void | undefined;
}

const NotifcationCard: React.SFC<NotifcationCardProps> = (props) => {
  const fuzz = props.isShown ? "block" : "hidden";
  return (
    <div
      className={`max-w-lg fixed ${fuzz} bg-${props.type} bottom-0 left-0  lg:absolute   lg:top-0 lg:right-0 lg:left-auto lg:bottom-auto rounded-bl-lg rounded-tr-lg p-5 mr-3`}
    >
      <div className="flex flex-row justify-between">
        <p
          className="text-white text-base mr-3 cursor-pointer"
          onClick={() => props.hide()}
        >
          X
        </p>
        <p className="text-lg text-white">{props.message}</p>
      </div>
    </div>
  );
};

export default NotifcationCard;

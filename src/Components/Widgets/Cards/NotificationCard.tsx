import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export interface NotifcationCardProps {
  type: string;
  message: string;
  isShown: boolean;
  hide: () => void | undefined;
}

const NotifcationCard: React.FC<NotifcationCardProps> = (props) => {
  const display = props.isShown ? (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "-100vh", transition: { ease: "easeInOut" } }}
        className={`max-w-lg fixed  bg-${props.type} bottom-0 left-0  lg:absolute   lg:top-0 lg:right-0 lg:left-auto lg:bottom-auto rounded-bl-lg rounded-tr-lg p-5 mr-3`}
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
      </motion.div>
    </AnimatePresence>
  ) : (
    <div></div>
  );
  return display;
};

export default NotifcationCard;

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
export interface ModalProps {
  title: string;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        className="bg-black bg-opacity-25 z-50 w-screen h-screen"
        variants={backdrop}
        initial="hidden"
        animate="visible"
      >
        <div className="m-auto max-w-xl bg-white border rounded-lg border-primary ">
          <h4>{props.title}</h4>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;

import { motion } from "framer-motion";
import React from "react";
import { containerVariants } from "../../themes/motion";
export interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="text-center mt-16 mb-16"
    >
      <h2 className="text-6xl text-primary ">PAGE 404!</h2>
      <h4 className="text-secondary">
        This is Page Is either non-existing or you are not logged in to get
        access
      </h4>
    </motion.div>
  );
};

export default ErrorPage;

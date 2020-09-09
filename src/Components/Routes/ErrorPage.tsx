import React from "react";
export interface ErrorPageProps {}

const ErrorPage: React.SFC<ErrorPageProps> = () => {
  return (
    <div className="text-center mt-16 mb-16">
      <h2 className="text-6xl text-primary ">PAGE 404!</h2>
      <h4 className="text-secondary">
        This is Page Is either non-existing or you are not logged in to get
        access
      </h4>
    </div>
  );
};

export default ErrorPage;

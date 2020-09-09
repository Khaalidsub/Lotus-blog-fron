import React from "react";
export interface SubmitButtonProps {
  label: string;
  loading?: boolean;
}

const SubmitButton: React.SFC<SubmitButtonProps> = (props) => {
  return !props.loading ? (
    <div className="md:flex md:items-center">
      <div className="md:w-full">
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          {props.label}
        </button>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default SubmitButton;

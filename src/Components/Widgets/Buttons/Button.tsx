import React from "react";

export interface ButtonProps {
  label: string;
  type?: string;

  function?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const type = `bg-${props.type}`;
  return (
    <button
      onClick={props.function}
      className={`inline-block text-sm px-4 py-2 leading-none border rounded text-secondary ${
        props.type !== undefined ? type : ""
      }  border-primary hover:border-transparent hover:text-white hover:bg-primary mt-4 lg:mt-0 m-2`}
    >
      {props.label}
    </button>
  );
};

export default Button;

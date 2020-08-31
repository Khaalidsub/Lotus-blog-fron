import React from "react";
import { Control, Errors } from "react-redux-form";
export interface InputFieldProps {
  label: string;
  type: string;
  value?: string;
  model: string;
  error?: {};
  validators?: {};
}

const InputField: React.SFC<InputFieldProps> = (props) => {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          htmlFor={props.model}
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        >
          {props.label}
        </label>
      </div>
      <div className="md:w-2/3">
        <Control.text
          validators={props.validators}
          model={props.model}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type={props.type}
          value={props.value}
        />
        <Errors
          className="text-negative text-xs italic"
          model={props.model}
          show="touched"
          messages={props.error}
        />
      </div>
    </div>
  );
};

export default InputField;

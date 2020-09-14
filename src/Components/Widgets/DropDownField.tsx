import React from "react";
import { CategoryAction } from "../../store/interface";

export interface DropDownFieldProps {
  list: CategoryAction[];
  chosenValue: string;
  handleChange: (value: any) => void;
}

export interface DropDownFieldState {}

class DropDownField extends React.Component<DropDownFieldProps, any> {
  render() {
    return (
      <div>
        <select
          name="chosenValue"
          onChange={this.props.handleChange}
          value={this.props.chosenValue}
          className="g-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        >
          {this.props.list.map((item) => (
            <option value={item.name}> {item.name}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    );
  }
}

export default DropDownField;

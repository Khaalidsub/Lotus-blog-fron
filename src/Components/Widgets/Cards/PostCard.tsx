import React from "react";

export interface CardProps {
  title: string;
  subtitle: string;
}

export class PostCard extends React.Component<CardProps> {
  state = {
    date: Date(),
  };

  render() {
    return (
      <div className="max-w-xs  flex-col overflow-hidden    p-4  bg-white rounded-lg shadow-xl">
        <h4 className="text-xl text-gray-900 leading-tight text-center ">
          {this.props.title}
        </h4>
        <p className="text-base text-gray-600 leading-normal pt-2 text-justify">
          {this.props.subtitle}
        </p>
      </div>
    );
  }
}

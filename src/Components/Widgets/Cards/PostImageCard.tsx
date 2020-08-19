import React from "react";

export interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

export class PostImageCard extends React.Component<CardProps> {
  state = {
    date: Date(),
  };
  // componentDidMount() {
  //   this.setState({
  //     date: Date.now(),
  //   });
  // }
  render() {
    return (
      <div className="max-w-md  flex p-4  bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex-shrink-0 ">
          <img
            className="h-24 w-24 rounded"
            src={this.props.image}
            alt="post"
          />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">
            {this.props.title}
          </h4>
          <p className="text-base text-gray-600 leading-normal pt-2">
            {this.props.subtitle}
          </p>
          <p className="text-xs text-gray-600 leading-normal pt-2 ">
            {this.state.date}
          </p>
        </div>
      </div>
    );
  }
}

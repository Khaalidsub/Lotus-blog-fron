import React from "react";

export interface CardProps {
  image: string;
}

export class ImageCard extends React.Component<CardProps> {
  state = {
    date: Date(),
  };

  render() {
    return (
      <div className="rounded-lg shadow-lg m-4">
        <div className="md:flex-shrink-0 ">
          <img
            className="h-16 w-16 lg:h-32 lg:w-32 rounded"
            src={this.props.image}
            alt="post"
          />
        </div>
      </div>
    );
  }
}

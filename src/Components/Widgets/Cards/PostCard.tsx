import React from "react";

export interface CardProps {
  title: string;
  subtitle: string;
}

export class PostCard extends React.Component<CardProps> {
  state = {
    date: Date(),
    subtitle:
      "fwenfoewnfjwenfw fewfw fewf ewgwg wgiwuh ueowhfiw fewbfiwbewnfiw enwiuf eiwubfiw feufiwuf uerwigfiw fweibfwe",
  };

  render() {
    return (
      <div className="max-w-xs sm:max-w-md md:max-w-xl m-4  flex-col overflow-hidden p-4 bg-white rounded-lg shadow-xl">
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

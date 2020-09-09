import React from "react";

export interface CardProps {
  title: string;
  subtitle: string;
  image?: string;
}

export class PostCard extends React.Component<CardProps> {
  render() {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 bg-secondary-background">
        <img
          className="w-full"
          src={this.props.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-secondary">
            {this.props.title}
          </div>
          <p className="text-tertiary text-base">{this.props.subtitle}</p>
        </div>
        <div className="px-6 pt-4 pb-2">{this.props.children}</div>
      </div>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import { PostAction } from "../../../store/interface";

export interface CardProps {
  post: PostAction;
  info?: string;
}

export class PostImageCard extends React.Component<CardProps> {
  render() {
    return (
      <div className="max-w-xl rounded lg:max-w-full lg:flex m-5 shadow-md">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: `url(${
              this.props.post.image ||
              "https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            })`,
          }}
        >
          {/* <Link   to={`/blogs/posts/view_post/${this.props.post.id}`}></Link> */}
        </div>

        <div className="w-full border-r border-b border-l border-primary lg:border-l-0 lg:border-t lg:border-primary lg:bg-secondary-background rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <Link to={`/blogs/posts/view_post/${this.props.post.id}`}>
            <h4 className="text-tertiary ">{this.props.info}</h4>
            <div className="mb-8">
              <div className="text-secondary font-bold text-xl mb-2 hover:underline">
                {this.props.post.title}
              </div>
              <p className="text-tertiary text-base">
                {this.props.post.subtitle}
              </p>
            </div>
          </Link>
          <div className="flex flex-wrap justify-start">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

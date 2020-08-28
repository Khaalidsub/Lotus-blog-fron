import React from "react";
import Output from "editorjs-react-renderer";
import { postSample, style } from "../../utils/utils";
import "../../styles/viewPost.css";

export interface ViewPostProps {}

export interface ViewPostState {}

export class ViewPost extends React.Component<ViewPostProps, ViewPostState> {
  // state = { :  }
  componentDidMount() {}
  render() {
    return (
      <div className="relative max-w-4xl mt-5 mb-5 pt-10 pb-5 pl-3 pr-3 rounded-lg mx-auto">
        <div className="absolute top-auto text-center h-20 w-full block">
          <div className="flex-col justify-center mt-3">
            <img
              className="w-12 h-12 border border-primary rounded-full mx-auto mb-5"
              src="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-tertiary leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>

        <div className="view  font-hairline bg-secondary-background rounded-lg  shadow-xl p-32">
          <Output data={postSample} style={style} />
        </div>
      </div>
    );
  }
}

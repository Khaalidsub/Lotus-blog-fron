import React from "react";
import EditorJS from "@editorjs/editorjs";
import "../../styles/addPost.css";
import { editorjsConfig } from "../../utils/config";
import Button from "../Widgets/Buttons/Button";
export interface AddPostProps {}

export interface AddPostState {}

export class AddPost extends React.Component<AddPostProps, AddPostState> {
  componentDidMount() {
    new EditorJS(editorjsConfig);
  }
  render() {
    return (
      <div className=" max-w-4xl mt-5 mb-5 pt-10 pb-5 pl-3 pr-3 rounded-lg mx-auto">
        <form className="text-secondary bg-secondary-background rounded-lg  shadow-xl p-5">
          <div id="editorjs"></div>
          <Button label="Add" />
        </form>
      </div>
    );
  }
}

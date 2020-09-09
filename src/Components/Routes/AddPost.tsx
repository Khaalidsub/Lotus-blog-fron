import React, { FormEvent } from "react";
import EditorJS from "@editorjs/editorjs";
import "../../styles/addPost.css";
import { editorjsConfig } from "../../utils/config";
import Button from "../Widgets/Buttons/Button";
import { addData } from "../../store";
import {
  PostAction,
  CombinedReducer,
  CategoryAction,
  UserAction,
} from "../../store/interface";
import { connect } from "react-redux";
import { dataTypes, data } from "../../store/types";
import SubmitButton from "../Widgets/Buttons/SubmitButton";
import LoadingAnimation from "../Widgets/loadingAnimation";
import { RouteComponentProps } from "react-router-dom";

export interface AddPostProps extends RouteComponentProps {
  user: UserAction;
  category: CategoryAction[];
  addData: <PostAction>(
    data: PostAction,
    url: string,
    dataTypes: dataTypes.post
  ) => Promise<any>;
}

export interface AddPostState {}

class _AddPost extends React.Component<AddPostProps, AddPostState> {
  state = {
    editor: ({} as EditorJS) as any,
    error: "",
    post: {} as PostAction,
    loading: false,
  };
  componentDidMount() {
    this.setState({
      editor: new EditorJS(editorjsConfig),
    });
  }
  validateBlock = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", this.state.editor);
    this.setState({ loading: true });
    let errorMessage = "";
    let subtitle = "";
    // su;
    const result = await this.state.editor.save();
    console.log("result post", result);

    const paragraph = result.blocks.find(
      (block: any) => block.type == "paragraph"
    );
    if (paragraph) {
      if (!this.validateParagraph(paragraph.data)) {
      }

      if (result.blocks[0].type != "header")
        errorMessage += "No Title : Add a Type Header!";
      if (result.blocks[1].type != "header") {
        if (paragraph.data.text.length < 25) subtitle = paragraph.data.text;
        else subtitle = paragraph.data.text.substring(0, 25);
      } else subtitle = result.blocks[1].data.text;
    } else errorMessage += "No Paragraph : write a type paragraph!";

    if (!errorMessage.trim()) {
      this.setState({
        post: {
          title: result.blocks[0]?.data.text,
          subtitle: subtitle,
          createdAt: new Date(),
          blocks: result.blocks,
          user: this.props.user.id,
          category: this.props.category[0].id,
        },
      });
      console.log("sending..", this.state.post);

      const response = await this.props.addData(
        this.state.post,
        "posts/",
        dataTypes.post
      );
      if (response === true) {
        this.props.history.replace("/");
      }
    } else {
      this.setState({
        error: errorMessage,
      });
    }

    this.setState({ loading: false });
  };

  validateParagraph(data: any) {
    if (!data.text.trim()) {
      return false;
    }
    return true;
  }
  render() {
    // console.log("hello in post", );

    return (
      <div className="relative max-w-4xl mt-5 mb-5 pt-10 pb-5 pl-3 pr-3 rounded-lg mx-auto">
        <form
          onSubmit={this.validateBlock}
          className="text-secondary bg-secondary-background rounded-lg  shadow-xl p-5"
        >
          <div id="editorjs"></div>
          <div className="text-center block w-full">
            <SubmitButton loading={this.state.loading} label="Add Article" />
            <LoadingAnimation loading={this.state.loading} />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state: CombinedReducer) => ({
  user: state.stateData.USER,
  category: state.modelData.CATEGORY,
});
export default connect(mapStateToProps, { addData })(_AddPost);

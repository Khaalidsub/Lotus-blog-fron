import React, { FormEvent } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import "../../styles/addPost.css";
import { editorjsConfig } from "../../utils/config";
import { addData, selectData, updateData, fetchCollection } from "../../store";
import {
  PostAction,
  CombinedReducer,
  CategoryAction,
  UserAction,
} from "../../store/interface";
import { connect } from "react-redux";
import { data, dataTypes } from "../../store/types";
import SubmitButton from "../Widgets/Buttons/SubmitButton";
import LoadingAnimation from "../Widgets/loadingAnimation";
import { RouteComponentProps } from "react-router-dom";
import NotifcationCard from "../Widgets/Cards/NotificationCard";
import { motion } from "framer-motion";
import { containerVariants } from "../../themes/motion";
import AddPostModal from "../Widgets/Modal";

export interface AddPostProps extends RouteComponentProps<{ id: string }> {
  user: UserAction;
  category: CategoryAction[];
  prevPost: PostAction | OutputData;
  addData: (data: data, url: string, dataTypes: dataTypes) => Promise<any>;
  updateData: <PostAction>(
    data: PostAction,
    url: string,
    dataTypes: dataTypes.post
  ) => Promise<any>;
  selectData: (url: string) => Promise<any>;
  fetchCollection: (url: string, dataTypes: dataTypes.category) => Promise<any>;
}

export interface AddPostState { }

class _AddPost extends React.Component<AddPostProps, AddPostState> {
  state = {
    editor: new EditorJS(editorjsConfig),
    error: "",
    post: {} as PostAction,
    loading: false,
    subtitle: "",
    isReady: false,
  };
  async componentDidMount() {
    console.log('mounting...');

    if (this.props.match.params.id) {


      await this.props.selectData(`posts/post/${this.props.match.params.id}`);
      this.state.editor.render(this.props.prevPost as OutputData)
      this.setState({

      });
    }
  }
  componentWillUnmount() {
    console.log('hello I am unmounting');

    // this.state.editor.destroy();
    // this.setState({
    //   editor: null
    // })
  }

  validatedData = (result: OutputData) => {
    let subtitle = "";
    let errorMessage = "";
    const paragraph = result.blocks.find(
      (block: any) => block.type === "paragraph"
    );
    if (paragraph) {
      if (!this.validateParagraph(paragraph.data)) {
      }

      if (result.blocks[0].type !== "header")
        errorMessage += "No Title : Add a Type Header!";
      if (result.blocks.length > 2) {
        if (result.blocks[1].type !== "header") {
          if (paragraph.data.text.length < 25) subtitle = paragraph.data.text;
          else subtitle = paragraph.data.text.substring(0, 25);
        } else subtitle = result.blocks[1].data.text;
      } else errorMessage += "  Not Enough Lines : Write a bit more";
    } else errorMessage += "No Paragraph : write a type paragraph!";

    this.setState({ subtitle: subtitle, error: errorMessage });

    return errorMessage;
  };

  validateBlock = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("hello", this.state.editor);
    this.setState({ loading: true });

    // su;
    const result = await this.state.editor.save();
    // console.log("result post", result);
    let errorMessage = this.validatedData(result);

    if (!errorMessage.trim()) {
      if (!this.props.match.params.id) {
        this.addPost(result);
      } else {
        this.updatePost(result);
      }
    }

    this.setState({ loading: false });
  };

  addPost = async (result: OutputData) => {
    const image = result.blocks.find((block) => block.type === "image");

    this.setState({
      post: {
        title: result.blocks[0]?.data.text,
        subtitle: this.state.subtitle,
        createdAt: new Date(),
        blocks: result.blocks,
        user: this.props.user.id,
        category: "",
        image: image?.data?.file?.url || "",
      },
      isReady: true,
    });
    // console.log("sending..", this.state.post);
  };
  updatePost = async (result: OutputData) => {
    const image = result.blocks.find((block) => block.type === "image");
    this.setState({
      post: {
        ...this.props.prevPost,

        title: result.blocks[0]?.data.text,
        subtitle: this.state.subtitle,
        category: ((this.props.prevPost as PostAction)
          .category as CategoryAction).id,
        user: this.props.user.id,
        blocks: result.blocks,
        image: image?.data?.file?.url
      },
      isReady: true,
    });
    // console.log("updating..", this.state.post);
    const response = await this.props.updateData(
      this.state.post,
      "posts/update",
      dataTypes.post
    );
    if (response === true) {
      this.state.editor.clear();
      console.log('listerners', this.state.editor.listeners.off);
      this.props.history.goBack();
    }
  };

  validateParagraph(data: any) {
    if (!data.text.trim()) {
      return false;
    }
    return true;
  }

  handleModalSubmit = async (categoryId?: string) => {
    if (categoryId) {
      const newPost = {
        ...this.state.post,
        category: categoryId,
      } as PostAction;

      const response = await this.props.addData(
        newPost,
        "posts/",
        dataTypes.post
      );
      if (response === true) {
        this.state.editor.clear();
        console.log('listerners', this.state.editor.listeners.off);
        this.props.history.goBack();
      }
    } else {
      this.setState({ isReady: false });
    }
  };
  render() {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <NotifcationCard
          message={this.state.error}
          isShown={this.state.error.length > 0}
          type="negative"
          hide={() => this.setState({ error: "" })}
        />
        <div className="max-w-4xl mt-5 mb-5 pt-10 pb-5 pl-3 pr-3 rounded-lg mx-auto">
          <form
            onSubmit={this.validateBlock}
            className="text-secondary bg-secondary-background rounded-lg  shadow-xl p-5"
          >
            <div id="editorjs"></div>
            <div className="text-center block w-full">
              {this.props.match.params.id ? (
                <SubmitButton
                  loading={this.state.loading}
                  label="Update Article"
                />
              ) : (
                  <SubmitButton
                    loading={this.state.loading}
                    label="Add Article"
                  />
                )}
              <LoadingAnimation loading={this.state.loading} />
            </div>
          </form>
        </div>
        {this.state.isReady && (
          <AddPostModal
            addData={this.props.addData}
            title="Add Category to your Article"
            category={this.props.category || []}
            fetchCollection={this.props.fetchCollection}
            handleSubmit={this.handleModalSubmit}
          />
        )}
      </motion.div>
    );
  }
}
const mapStateToProps = (state: CombinedReducer) => ({
  user: state.stateData.USER,
  category: state.modelData.CATEGORY,
  prevPost: state.modelData.SELECT,
});
export default connect(mapStateToProps, {
  addData,
  selectData,
  updateData,
  fetchCollection,
})(_AddPost);

import React from "react";
import Output from "editorjs-react-renderer";
import { style } from "../../utils/utils";
import "../../styles/viewPost.css";
import { PostAction, CombinedReducer, UserAction } from "../../store/interface";
import { selectData, getUserSession, toggle } from "../../store";
import { RouteComponentProps, Link } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { containerVariants } from "../../themes/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface ViewPostProps extends RouteComponentProps<{ id: string }> {
  post: PostAction;
  user: UserAction;
  selectPost: (url: string) => Promise<any>;
  toggle: (typeToggle: string, id: string) => Promise<any>;
  getUserSession: () => Promise<any>;
}

export interface ViewPostState {}

export class _ViewPost extends React.Component<ViewPostProps, ViewPostState> {
  state = { loading: true, isLiked: false, isBooked: false, toggling: false };
  componentDidMount() {
    // console.log("view post", this.props);

    this.props.selectPost(`posts/post/${this.props.match.params.id}`);
  }

  componentDidUpdate(prevProps: Readonly<ViewPostProps>) {
    if (
      prevProps.post !== this.props.post ||
      prevProps.user !== this.props.user
    ) {
      this.setState({ loading: false });
      if (this.props.user) {
        const isLiked =
          (this.props.user.likedPosts as string[]).find(
            (id) => id === this.props.post.id
          ) !== undefined
            ? true
            : false;

        const isBooked =
          (this.props.user.bookMarkedPosts as string[]).find(
            (id) => id === this.props.post.id
          ) !== undefined
            ? true
            : false;

        this.setState({ isLiked, isBooked });
      }
    }
    if (
      prevProps.post.likes !== this.props.post.likes ||
      prevProps.post.bookMarks !== this.props.post.bookMarks
    ) {
      this.props.getUserSession();
    }
  }
  toogleLike = async () => {
    if (this.props.user && !this.state.toggling) {
      this.setState({ toggling: true });
      await this.props.toggle("like", this.props.match.params.id);

      this.setState({ toggling: false });
    }
  };
  toogleBook = async () => {
    if (this.props.user && !this.state.toggling) {
      this.setState({ toggling: true });
      await this.props.toggle("bookmark", this.props.match.params.id);

      this.setState({ toggling: false });
    }
  };
  render() {
    if (!this.state.loading) {
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative max-w-4xl mt-5 mb-5 pt-10 pb-5 pl-3 pr-3 rounded-lg mx-auto"
        >
          <div className="absolute z-10 top-auto text-center h-20 w-full block">
            <TopShareOptions
              likes={this.props.post.likes}
              isLiked={this.state.isLiked}
              isBookMarked={this.state.isBooked}
              toogleBookMark={this.toogleBook}
              toogleLike={this.toogleLike}
            />
            <div className="flex-col justify-center mt-5">
              <img
                className="w-12 h-12 border border-primary rounded-full mx-auto mb-5"
                src="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
                alt="Avatar of Jonathan Reinink"
              />
              <div className="text-sm">
                <Link
                  to={`/blogs/profile/${
                    (this.props.post.user as UserAction)?.id
                  }`}
                >
                  <p className="text-tertiary leading-none hover:underline">
                    {(this.props.post.user as UserAction)?.name}
                  </p>
                </Link>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>

          <div className="view  relative font-hairline bg-secondary-background rounded-lg  shadow-xl pl-24 pr-24  pt-56 pb-48">
            {this.props.post !== undefined && this.props.post.blocks && (
              <Output data={this.props.post} style={style} />
            )}
            <BottomShareOptions
              likes={this.props.post.likes}
              isLiked={this.state.isLiked}
              isBookMarked={this.state.isBooked}
              toogleBookMark={this.toogleBook}
              toogleLike={this.toogleLike}
            />
          </div>
        </motion.div>
      );
    }
    return <div></div>;
  }
}

const TopShareOptions = (props: {
  likes: number;
  isLiked?: boolean;
  isBookMarked?: boolean;
  toogleBookMark: () => void;
  toogleLike: () => void;
}) => {
  return (
    <div className="max-w-md p-5  border-secondary border-2 mx-auto  text-secondary rounded-b-full rounded-t-lg shadow-lg">
      <div className=" flex flex-row justify-evenly items-stretch">
        <div className="flex flex-col text-center justify-between items-center mr-3">
          <div>
            <FontAwesomeIcon
              icon="thumbs-up"
              className={`cursor-pointer mr-2   ${
                props.isLiked ? "text-primary" : "text-secondary"
              }`}
              onClick={() => props.toogleLike()}
            />
            {props.likes}
          </div>

          <p className="mt-2">Like</p>
        </div>
        <div className="flex flex-col items-center ml-2 justify-between">
          <FontAwesomeIcon
            icon="bookmark"
            className={`cursor-pointer   ${
              props.isBookMarked ? "text-primary" : "text-secondary"
            }`}
            onClick={() => props.toogleBookMark()}
          />
          <p className="mt-2">BookMark</p>
        </div>
      </div>
    </div>
  );
};
const BottomShareOptions = (props: {
  likes: number;
  isLiked?: boolean;
  isBookMarked?: boolean;
  toogleBookMark: () => void;
  toogleLike: () => void;
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0">
      <div className="max-w-md p-5  border-secondary border-2 mx-auto  text-secondary rounded-t-full rounded-b-lg">
        <div className=" flex flex-row justify-evenly items-stretch">
          <div className="flex flex-col text-center justify-between items-center mr-3">
            <div>
              <FontAwesomeIcon
                icon="thumbs-up"
                className={`cursor-pointer mr-2   ${
                  props.isLiked ? "text-primary" : "text-secondary"
                }`}
                onClick={() => props.toogleLike()}
              />
              {props.likes}
            </div>

            <p className="mt-2">Like</p>
          </div>
          <div className="flex flex-col items-center ml-2 justify-between">
            <FontAwesomeIcon
              icon="bookmark"
              className={`cursor-pointer   ${
                props.isBookMarked ? "text-primary" : "text-secondary"
              }`}
              onClick={() => props.toogleBookMark()}
            />
            <p className="mt-2">BookMark</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: CombinedReducer) => ({
  post: (state.modelData.SELECT as PostAction) || undefined,
  user: state.stateData.USER,
});
export default connect(mapStateToProps, {
  selectPost: selectData,
  getUserSession,
  toggle,
})(_ViewPost);

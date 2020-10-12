import React from "react";
import Button from "../Widgets/Buttons/Button";
import { PaginationButtons } from "../Widgets/Buttons/PaginationButtons";
import { PostImageCard } from "../Widgets/Cards/PostImageCard";
import { PostAction, CombinedReducer, UserAction } from "../../store/interface";
import { fetchCollection, selectData, deleteData } from "../../store";
import { Link, RouteComponentProps } from "react-router-dom";

import { connect } from "react-redux";
import { dataTypes } from "../../store/types";
import { motion } from "framer-motion";
import { containerVariants } from "../../themes/motion";

export interface ProfileProps extends RouteComponentProps<{ id: string }> {
  posts: PostAction[];
  user: UserAction;
  userProfile: UserAction;
  fetchCollection: (url: string, dataTypes: dataTypes.post) => Promise<any>;
  selectData: (url: string) => Promise<any>;
  deleteData: <PostAction>(
    data: PostAction,
    url: string,
    dataTypes: dataTypes.post
  ) => Promise<any>;
}

export interface ProfileState {}

const Posts = (props: {
  post: PostAction;
  deleteFunction: any;
  isUser: boolean;
}): JSX.Element => {
  return (
    <PostImageCard post={props.post}>
      {props.isUser && (
        <div className="text-center md:text-left">
          <Link to={`/blogs/posts/add_post/${props.post.id}`}>
            <Button label="Edit Post" type="warning" />
          </Link>
          <Button
            function={props.deleteFunction}
            label="Delete Post"
            type="negative"
          />
        </div>
      )}
    </PostImageCard>
  );
};
enum postType {
  written,
  booked,
  liked,
}
class _Profile extends React.Component<ProfileProps, ProfileState> {
  state = { type: postType.written };
  componentDidMount() {
    this.props.selectData(`user/${this.props.match.params.id}`);
    this.props.fetchCollection("posts", dataTypes.post);
  }
  renderPosts() {
    if (this.props.posts !== undefined) {
      this.props.posts.map((post) => {
        post.title = post.title.replace(/&nbsp;/gi, "");
        post.subtitle = post.subtitle.replace(/&nbsp;/gi, "");
        return post;
      });

      return this.renderTypePost().map((data) => {
        return (
          <Posts
            deleteFunction={() =>
              this.props.deleteData(
                data,
                `posts/post/${data.id}`,
                dataTypes.post
              )
            }
            isUser={this.props.user.id === this.props.match.params.id}
            post={data}
            key={data.id}
          />
        );
      });
    } else return <div></div>;
  }

  renderTypePost = (): PostAction[] => {
    switch (this.state.type) {
      case postType.written:
        return this.props.posts.filter(
          (post) =>
            (post.user as UserAction).id ===
            (this.props.userProfile as UserAction).id
        );
      case postType.liked:
        return this.props.posts.filter((post) =>
          (this.props.userProfile as UserAction).likedPosts?.find(
            (likedPost) => likedPost === post.id
          )
        );
      case postType.booked:
        return this.props.posts.filter((post) =>
          this.props.user.bookMarkedPosts.find(
            (bookedPost) => bookedPost === post.id
          )
        );
    }
  };
  render() {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="mx-12 my-12"
      >
        <div className="max-w-lg mx-auto p-5 relative">
          <div className="bg-secondary-background border border-secondary flex flex-col lg:flex-row p-5 justify-between rounded">
            <h4 className="order-2 text-center lg:text-left text-secondary text-lg">
              {this.props.userProfile.name}
            </h4>
            <div className="lg:absolute pb-4 top-0 left-0 order-first right-0 w-full ">
              <img
                className="w-16 h-16 rounded-full mx-auto "
                src={
                  this.props.userProfile.image ||
                  "https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
                alt={`Avatar of ${this.props.userProfile.name}`}
              />
            </div>

            <div className="text-center z-10 lg:text-right order-last">
              {this.props.user.id === this.props.userProfile.id && (
                <Button label="Edit Profile" />
              )}
            </div>
          </div>
        </div>
        <ul className="max-w-md  flex justify-between mx-auto">
          <li>
            <span
              className="cursor-pointer text-tertiary hover:text-primary"
              onClick={() => this.setState({ type: postType.written })}
            >
              Written Posts
            </span>
          </li>
          {this.props.user.id === this.props.userProfile.id && (
            <li>
              <span
                className="cursor-pointer  text-center  text-tertiary hover:text-primary "
                onClick={() => this.setState({ type: postType.booked })}
              >
                BookMarks
              </span>
            </li>
          )}
          <li>
            <span
              className="cursor-pointer text-tertiary hover:text-primary"
              onClick={() => this.setState({ type: postType.liked })}
            >
              Liked Posts
            </span>
          </li>
        </ul>
        <div className="mt-5 lg:mx-64 border-tertiary border-t-2">
          <hr />
        </div>
        <div className="lg:max-w-4xl lg:mx-auto md:grid md:grid-cols-1 mt-10 mb-10">
          <div className="mx-auto">
            {this.props.posts !== undefined && this.props.posts.length > 8 && (
              <PaginationButtons />
            )}
            {this.renderPosts()}

            {this.props.posts !== undefined && this.props.posts.length > 8 && (
              <PaginationButtons />
            )}
          </div>
        </div>
      </motion.div>
    );
  }
}
const mapStateToProps = (state: CombinedReducer) => ({
  posts: state.modelData.POST.sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1
  ),
  user: state.stateData.USER,
  userProfile: state.modelData.SELECT,
});
export default connect(mapStateToProps, {
  fetchCollection,
  selectData,
  deleteData,
})(_Profile);

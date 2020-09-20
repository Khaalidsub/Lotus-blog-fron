import React from "react";
import { PostImageCard } from "../Widgets/Cards/PostImageCard";
import { PostCard } from "../Widgets/Cards/PostCard";
import { ImageCard } from "../Widgets/Cards/ImageCard";
import { PostUserInfo } from "../Widgets/PostUserInfo";
import { PostDescription } from "../Widgets/Cards/PostDescription";
import CategoryCard from "../Widgets/Cards/CategoryCard";
import { PaginationButtons } from "../Widgets/Buttons/PaginationButtons";
import {
  PostAction,
  CombinedReducer,
  UserAction,
  CategoryAction,
} from "../../store/interface";
import { fetchCollection } from "../../store";
import { RouteComponentProps, Link } from "react-router-dom";
import { connect } from "react-redux";
import { dataTypes } from "../../store/types";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants } from "../../themes/motion";
export interface HomeProps extends RouteComponentProps {
  posts: PostAction[];
  fetchCollection: (url: string, dataTypes: dataTypes.post) => Promise<any>;
}
const Post = (props: { post: PostAction }): JSX.Element => {
  return (
    <PostImageCard post={props.post} info="Latest">
      <PostUserInfo user={props.post.user as UserAction} />
      <CategoryCard category={(props.post.category as CategoryAction).name} />
    </PostImageCard>
  );
};

const FeauturedPost = (props: { post: PostAction }): JSX.Element => {
  return (
    <Link
      className="hover:bg-negative cursor-pointer"
      to={`/blogs/posts/view_post/${props.post.id}`}
    >
      <PostCard
        subtitle={props.post.subtitle}
        title={props.post.title}
        info={"Feautured"}
        image={
          props.post.image ||
          "https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
        }
      >
        <CategoryCard category={(props.post.category as CategoryAction).name} />
      </PostCard>
    </Link>
  );
};
class _Home extends React.Component<HomeProps> {
  state = { mainPosts: [] as PostAction[], chosenPost: {} as PostAction };
  componentDidMount() {
    this.props.fetchCollection("posts", dataTypes.post);
  }
  componentDidUpdate(prevProps: HomeProps) {
    if (this.props !== prevProps && this.props.posts.length > 0) {
      const posts = this.props.posts.filter((_, i) => i! < 3);
      this.setState({
        mainPosts: posts,
        chosenPost: posts[0],
      });
    }
  }
  renderLatestList(): JSX.Element[] | JSX.Element | undefined {
    // console.log("checking posts:", this.props.posts);
    if (this.props.posts !== undefined) {
      this.props.posts.map((post) => {
        post.title = post.title.replace(/&nbsp;/gi, "");
        post.subtitle = post.subtitle.replace(/&nbsp;/gi, "");
        return post;
      });
      return this.props.posts.map((data) => <Post post={data} key={data.id} />);
    } else return <div></div>;
  }

  renderFeatured(): JSX.Element[] | JSX.Element {
    // console.log("checking posts:", this.props.posts);
    if (this.props.posts !== undefined) {
      this.props.posts.map((post) => {
        post.title = post.title.replace(/&nbsp;/gi, "");
        post.subtitle = post.subtitle.replace(/&nbsp;/gi, "");
        return post;
      });
      let index = 0;
      const latest = [...this.props.posts];
      return latest
        .sort((a, b) => (a.likes > b.likes ? -1 : 1))
        .map((data, i) => {
          if (i < 3) return <FeauturedPost post={data} key={data.id} />;

          return <div></div>;
        }, index++);
    } else return <div></div>;
  }
  renderMainPost = (): JSX.Element => {
    return (
      <AnimatePresence key={this.state.chosenPost.id}>
        {this.state.chosenPost.id && (
          <PostDescription post={this.state.chosenPost}>
            <CategoryCard
              category={(this.state.chosenPost.category as CategoryAction).name}
            />
          </PostDescription>
        )}
      </AnimatePresence>
    );
  };

  renderMainPostList = (): JSX.Element[] | JSX.Element => {
    return this.state.mainPosts.map((post) => (
      <ImageCard
        function={() =>
          this.setState({
            chosenPost: this.state.mainPosts.find(
              (data) => data.id === post.id
            ),
          })
        }
        image={
          post.image ||
          "https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
        }
        key={post.id}
      />
    ));
  };

  render() {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className=""
      >
        <div className="relative">
          {this.renderMainPost()}
          <div className="w-full  absolute bottom-0 left-0 right-0">
            <div className=" flex flex-row justify-center">
              {this.renderMainPostList()}
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10 mb-10">
          <div className="mx-auto">
            {this.props.posts !== undefined && this.props.posts.length > 8 && (
              <PaginationButtons />
            )}

            {this.renderLatestList()}

            {this.props.posts !== undefined && this.props.posts.length > 8 && (
              <PaginationButtons />
            )}
          </div>
          <div className="mx-auto  ">{this.renderFeatured()}</div>
        </div>
      </motion.div>
    );
  }
}

const mapStateToProps = (state: CombinedReducer) => ({
  posts: state.modelData.POST.sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1
  ),
});
export default connect(mapStateToProps, { fetchCollection })(_Home);

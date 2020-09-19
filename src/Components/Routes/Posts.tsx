import React from "react";

import { PostCard } from "../Widgets/Cards/PostCard";
import CategoryCard from "../Widgets/Cards/CategoryCard";
import {
  PostAction,
  CombinedReducer,
  UserAction,
  CategoryAction,
} from "../../store/interface";
import { fetchCollection } from "../../store";
import { Link, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { dataTypes } from "../../store/types";
import { motion } from "framer-motion";
import { containerVariants } from "../../themes/motion";

export interface PostsProps extends RouteComponentProps {
  posts: PostAction[];
  fetchCollection: (url: string, dataTypes: dataTypes.post) => Promise<any>;
}

enum searchType {
  post,
  user,
  category,
}
const SearcheddPost = (props: { post: PostAction }): JSX.Element => {
  return (
    <Link to={`/blogs/posts/view_post/${props.post.id}`}>
      <PostCard
        subtitle={props.post.subtitle}
        title={props.post.title}
        image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
      >
        <CategoryCard category={(props.post.category as CategoryAction).name} />
      </PostCard>
    </Link>
  );
};
class _Posts extends React.Component<PostsProps> {
  state = { search: "", type: searchType.post };
  componentDidMount() {
    this.props.fetchCollection("posts", dataTypes.post);
  }
  renderPosts() {
    if (this.props.posts !== undefined) {
      this.props.posts.map((post) => {
        post.title = post.title.replace(/&nbsp;/gi, "");
        post.subtitle = post.subtitle.replace(/&nbsp;/gi, "");
        return post;
      });

      return this.findSearchedResult().map((data) => {
        return <SearcheddPost post={data} key={data.id} />;
      });
    } else return <div></div>;
  }
  findSearchedResult = (): PostAction[] => {
    // console.log("checking type:", this.state.type);
    switch (this.state.type) {
      case searchType.post:
        return this.props.posts.filter((post) =>
          post.title.toLowerCase().includes(this.state.search.toLowerCase())
        );
      case searchType.category:
        return this.props.posts.filter((post) =>
          (post.category as CategoryAction).name
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        );
      case searchType.user:
        return this.props.posts.filter((post) =>
          (post.user as UserAction).name
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        );
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
        <div className="max-w-xl mx-auto">
          <div>
            <input
              className="shadow appearance-none border bg-secondary-background rounded w-full py-2 px-3 text-tertiary leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="Search"
            ></input>
          </div>

          <ul className="mt-6 border-t-2 border-r-2 border-l-2 rounded p-2 lg:p-5 max-w-lg  flex justify-between mx-auto">
            <li>
              <span
                onClick={() => this.setState({ type: searchType.category })}
                className="text-tertiary cursor-pointer hover:text-primary"
              >
                Category Posts
              </span>
            </li>
            <li>
              <span
                className="text-center cursor-pointer  text-tertiary hover:text-primary "
                onClick={() => this.setState({ type: searchType.user })}
              >
                User Posts
              </span>
            </li>
            <li>
              <span
                onClick={() => this.setState({ type: searchType.post })}
                className="text-tertiary cursor-pointer hover:text-primary"
              >
                Post Titles
              </span>
            </li>
          </ul>
        </div>
        <div className=" border-tertiary border-t-1">
          <hr />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {this.renderPosts()}
        </div>
      </motion.div>
    );
  }
}

// export default Posts;
const mapStateToProps = (state: CombinedReducer) => ({
  posts: state.modelData.POST.sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1
  ),
});
export default connect(mapStateToProps, { fetchCollection })(_Posts);

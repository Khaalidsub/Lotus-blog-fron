import React from "react";
import Output from "editorjs-react-renderer";
import { style } from "../../utils/utils";
import "../../styles/viewPost.css";
import { PostAction, CombinedReducer, UserAction } from "../../store/interface";
import { selectData } from "../../store";
import { RouteComponentProps, Link } from "react-router-dom";
import { connect } from "react-redux";
export interface ViewPostProps extends RouteComponentProps<{ id: string }> {
  post: PostAction;
  selectPost: (url: string) => Promise<any>;
}

export interface ViewPostState {}

export class _ViewPost extends React.Component<ViewPostProps, ViewPostState> {
  state = { loading: true };
  componentDidMount() {
    // console.log("view post", this.props);

    this.props.selectPost(`posts/post/${this.props.match.params.id}`);
  }
  // componentDidUpdate(){

  // }
  componentDidUpdate(prevProps: Readonly<ViewPostProps>) {
    if (prevProps.post !== this.props.post) {
      this.setState({ loading: false });
    }
  }
  render() {
    if (!this.state.loading) {
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

          <div className="view  font-hairline bg-secondary-background rounded-lg  shadow-xl pl-24 pr-24  pt-32 pb-32">
            {this.props.post !== undefined && this.props.post.id && (
              <Output data={this.props.post} style={style} />
            )}
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}

const mapStateToProps = (state: CombinedReducer) => ({
  post: (state.modelData.SELECT as PostAction) || undefined,
});
export default connect(mapStateToProps, { selectPost: selectData })(_ViewPost);

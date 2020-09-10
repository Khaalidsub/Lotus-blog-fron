import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Routes/Home";

import Profile from "./Components/Routes/Profile";
import { Posts } from "./Components/Routes/Posts";
import AddPost from "./Components/Routes/AddPost";
import { ViewPost } from "./Components/Routes/ViewPost";

import SignForm from "./Components/Routes/SignForm";
import EditProfile from "./Components/Routes/EditProfile";
import Header from "./Components/Header";
import { CombinedReducer } from "./store/interface";
import { connect } from "react-redux";
import ErrorPage from "./Components/Routes/ErrorPage";

export interface AppProps {
  isSignedIn: boolean;
}

export interface AppState {}

class _App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <React.Fragment>
          <Router>
            <Route component={Header} />

            <Route component={NavBar} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/blogs/posts" exact component={Posts} />
              {this.props.isSignedIn && (
                <Route path="/blogs/profile" exact component={Profile} />
              )}
              {this.props.isSignedIn && (
                <Route
                  path="/blogs/profile/settings"
                  exact
                  component={EditProfile}
                />
              )}
              <Route
                path="/blogs/posts/view_post/:id"
                exact
                component={ViewPost}
              />
              {this.props.isSignedIn && (
                <Route path="/blogs/posts/add_post" exact component={AddPost} />
              )}
              {!this.props.isSignedIn && (
                <Route path="/sign_form" exact component={SignForm} />
              )}

              <Route component={ErrorPage} />
            </Switch>
            {this.props.isSignedIn && <Route component={addButton} />}
            <Route component={Footer} />
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

const addButton = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="md:hidden fixed bottom-0 z-20 right-0 p-5">
        <div className="   border-4 border-primary  bg-secondary-background p-3 text-secondary rounded-full text-xl  text-center">
          +
        </div>
      </div>
      <div className="md:block hidden fixed bottom-0 z-20 right-0 p-5">
        <div className="border-2 border-primary  bg-secondary-background p-4 text-secondary rounded-full text-xl  text-center">
          Add a new Post
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state: CombinedReducer) => ({
  isSignedIn: state.stateData.isSignedIn,
});
export default connect(mapStateToProps, {})(_App);

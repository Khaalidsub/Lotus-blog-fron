import React from "react";
import { Route, Switch, Link, RouteProps } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Routes/Home";

import Profile from "./Components/Routes/Profile";
import Posts from "./Components/Routes/Posts";
import AddPost from "./Components/Routes/AddPost";
import ViewPost from "./Components/Routes/ViewPost";

import SignForm from "./Components/Routes/SignForm";
import EditProfile from "./Components/Routes/EditProfile";
import Header from "./Components/Header";
import { CombinedReducer, UserAction } from "./store/interface";
import { connect } from "react-redux";
import ErrorPage from "./Components/Routes/ErrorPage";
import "./styles/app.css";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants } from "./themes/motion";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faBookmark, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

library.add(far, faBookmark, faThumbsUp);
export interface AppProps extends RouteProps {
  isSignedIn: boolean;
  user: UserAction;
}

export interface AppState {}

class _App extends React.Component<AppProps, AppState> {
  render() {
    console.log(this.props);

    return (
      <React.Fragment>
        <Header />

        <Route component={NavBar} />
        <div className="relative">
          <Route
            render={(props) => (
              <AnimatePresence>
                <Switch
                  location={props.history.location}
                  key={props.history.location.key}
                >
                  <Route path="/" strict exact component={Home} />
                  <Route path="/blogs/posts" exact component={Posts} />

                  <Route path="/blogs/profile/:id" exact component={Profile} />

                  {this.props.isSignedIn && (
                    <Route
                      path="/blogs/profile/settings"
                      exact
                      strict
                      component={EditProfile}
                    />
                  )}
                  <Route
                    path="/blogs/posts/view_post/:id"
                    exact
                    component={ViewPost}
                  />
                  {this.props.isSignedIn && (
                    <Route
                      path="/blogs/posts/add_post/:id"
                      // path="/blogs/posts/add_post"
                      exact
                      component={AddPost}
                    />
                  )}
                  {this.props.isSignedIn && (
                    <Route
                      path="/blogs/posts/add_post"
                      // path="/blogs/posts/add_post"
                      exact
                      component={AddPost}
                    />
                  )}
                  {!this.props.isSignedIn && (
                    <Route path="/sign_form" exact component={SignForm} />
                  )}

                  <Route component={ErrorPage} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </div>
        {this.props.isSignedIn && <Route component={addButton} />}

        {/* <Route component={Footer} /> */}
      </React.Fragment>
    );
  }
}

const addButton = (): JSX.Element => {
  return (
    <Link className="cursor-pointer" to="/blogs/posts/add_post">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
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
      </motion.div>
    </Link>
  );
};
const mapStateToProps = (state: CombinedReducer) => ({
  isSignedIn: state.stateData.isSignedIn,
  user: state.stateData.USER,
});
export default connect(mapStateToProps, {})(_App);

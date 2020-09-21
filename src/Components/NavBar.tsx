import React from "react";
import Button from "./Widgets/Buttons/Button";
import { getUserSession, logout } from "../store";
import { connect } from "react-redux";
import { UserAction } from "../store/interface";
import { Link, RouteComponentProps } from "react-router-dom";
import { motion } from "framer-motion";
export interface NavBarProps extends RouteComponentProps {
  getUserSession: () => Promise<any>;
  user: UserAction;
  isSignedIn: boolean;
  logout: () => Promise<any>;
}

export interface NavBarState {}

class _NavBar extends React.Component<NavBarProps, NavBarState> {
  state = { collapsed: true };
  componentDidMount() {
    this.props.getUserSession();
  }
  setNav() {
    // console.log("collapse", this.state);
    // this.props.getUserSession()
    this.setState({ collapsed: !this.state.collapsed });
  }

  logout() {
    this.props.logout().then(() => {
      this.props.history.replace("/");
    });
  }
  render() {
    const type = this.props.isSignedIn ? (
      <Button function={() => this.logout()} label="Logout" />
    ) : (
      <Button
        function={() => this.props.history.push("/sign_form")}
        label="SignUp/In"
      />
    );

    return (
      <motion.div className="sticky top-0 z-40 bg-secondary-background">
        <nav className="flex  items-center justify-between flex-wrap  p-6 border border-solid border-black">
          <div className="flex items-center flex-shrink-0 text-primary mr-6">
            <Link to={"/"}>
              <span className="font-semibold text-xl tracking-tight ">
                LOTUS BLOGS
              </span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => this.setNav()}
              className="flex items-center px-3 py-2 border rounded text-secondary border-primary hover:text-primary hover:border-secondary"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className={` w-full transition  transform ${
              this.state.collapsed === true
                ? "block delay-150 duration-300 "
                : "hidden delay-150 duration-300"
            } flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow text-primary">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-secondary mr-4"
              >
                Home
              </Link>
              <Link
                to="/blogs/posts"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-secondary mr-4"
              >
                Posts
              </Link>
            </div>
            <div>{type}</div>
          </div>
        </nav>
      </motion.div>
    );
  }
}
const mapStateToProps = (state) => ({
  isSignedIn: state.stateData.isSignedIn,
  user: state.stateData.USER,
});
export default connect(mapStateToProps, { getUserSession, logout })(_NavBar);

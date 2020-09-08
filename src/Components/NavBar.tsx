import React from "react";
import Button from "./Widgets/Buttons/Button";
import { getUserSession } from "../store";
import { connect } from "react-redux";
import { UserAction } from "../store/interface";
export interface NavBarProps {
  getUserSession: () => Promise<any>;
  user: UserAction;
  isSignedIn: boolean;
}

export interface NavBarState {}

class _NavBar extends React.Component<NavBarProps, NavBarState> {
  state = { collapsed: true };
  componentDidMount() {
    this.props.getUserSession();
  }
  setNav() {
    console.log("collapse", this.state);
    // this.props.getUserSession()
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    const type = this.props.isSignedIn ? (
      <Button label="Logout" />
    ) : (
      <Button label="SignUp/In" />
    );

    return (
      <div className="sticky top-0 z-50 bg-secondary-background">
        <nav className="flex  items-center justify-between flex-wrap  p-6 border border-solid border-black">
          <div className="flex items-center flex-shrink-0 text-primary mr-6">
            <span className="font-semibold text-xl tracking-tight">
              LOTUS BLOGS
            </span>
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
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-secondary mr-4"
              >
                Home
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-secondary mr-4"
              >
                Posts
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0  hover:text-secondary"
              >
                People
              </a>
            </div>
            <div>{type}</div>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isSignedIn: state.stateData.isSignedIn,
  user: state.stateData.USER,
});
export default connect(mapStateToProps, { getUserSession })(_NavBar);

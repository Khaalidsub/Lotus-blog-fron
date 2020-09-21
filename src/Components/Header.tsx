import React from "react";
import { motion } from "framer-motion";
import { DEFAULT_THEME } from "../themes";
import { applyTheme } from "../utils/theme";

import { getlocalStorage, setlocalStorage } from "../utils/localStorage";
import "../styles/header.css";
import { UserAction } from "../store/interface";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
export interface HeaderProps {
  user?: UserAction;
}

export interface HeaderState {}

class _Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    theme: DEFAULT_THEME,
    toggle: true,
  };
  async componentDidMount() {
    const value = await getlocalStorage("theme");
    if (value)
      this.setState({
        theme: value,
        toggle: value === "dark" ? false : true,
      });

    applyTheme(this.state.theme);
  }
  async setTheme(toggling: boolean) {
    this.setState({
      theme: toggling ? "default" : "dark",
      toggle: toggling,
    });
    // console.log(this.state.theme, this.state.toggle, toggling);

    applyTheme(this.state.theme);
    await setlocalStorage("theme", this.state.theme);
  }
  render() {
    return (
      <div className="p-5 flex flex-row justify-between">
        <div className="m-6">
          <div
            className="switch h-6 w-12 rounded-full bg-tertiary"
            data-ison={this.state.toggle}
            onClick={() => this.setTheme(!this.state.toggle)}
          >
            <motion.div
              className="handle h-6 my-auto w-6 rounded-full"
              layout
              transition={spring}
            />
          </div>
        </div>
        {this.props.user?.id && (
          <Link to={`/blogs/profile/${(this.props.user as UserAction)?.id}`}>
            <div className="flex flex-col items-center ml-3 mr-3">
              <img
                className="w-10 h-10 rounded-full mb-4"
                src={
                  this.props.user.image ||
                  "https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
                }
                alt={`Avatar of ${this.props.user}`}
              />
              <div className="text-sm text-center">
                <p className="text-tertiary leading-none hover:underline">
                  {this.props.user.name}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    );
  }
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const mapStateToProps = (state) => ({
  user: state.stateData.USER,
});
export default connect(mapStateToProps, {})(_Header);

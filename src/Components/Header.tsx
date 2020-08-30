import React from "react";
import { motion } from "framer-motion";
import { DEFAULT_THEME } from "../themes";
import { applyTheme } from "../utils/theme";

import { getlocalStorage, setlocalStorage } from "../utils/localStorage";
import "../styles/header.css";
export interface HeaderProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
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
    console.log(this.state.theme, this.state.toggle, toggling);

    applyTheme(this.state.theme);
    await setlocalStorage("theme", this.state.theme);
  }
  render() {
    return (
      <div className="p-5">
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
      </div>
    );
  }
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Header;

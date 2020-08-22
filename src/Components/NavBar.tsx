import React from "react";
import Button from "./Widgets/Buttons/Button";

export interface NavBarProps {}

export interface NavBarState {}

export class NavBar extends React.Component<NavBarProps, NavBarState> {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap  p-6 border border-solid border-black">
        <div className="flex items-center flex-shrink-0 text-primary mr-6">
          <span className="font-semibold text-xl tracking-tight">
            LOTUS BLOGS
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
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
          <div>
            <Button label="SignUp" />
          </div>
        </div>
      </nav>
    );
  }
}

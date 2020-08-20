import React from "react";

export interface NavBarProps {}

export interface NavBarState {}

export class NavBar extends React.Component<NavBarProps, NavBarState> {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap  p-6 border border-solid border-black">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight">
            KAI BLOGS
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-yellow-800 hover:text-white mr-4"
            >
              black Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-yellow-800 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-yellow-800 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-yellow-800 mt-4 lg:mt-0"
            >
              SignUp
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

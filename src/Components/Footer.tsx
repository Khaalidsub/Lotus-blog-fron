import React from "react";

export interface FooterProps {}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  render() {
    return (
      <footer className=" relative inset-x-0 bottom-0 flex items-center justify-between flex-wrap bg-blue-200 p-6">
        <div className="flex items-center flex-shrink-0 text-black  m-auto">
          <span className="font-semibold text-l tracking-tight">
            2020 @CopyRight reserved
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

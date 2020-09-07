import React from "react";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/core";
export interface LoadingAnimationProps {
  loading: boolean;
}
// const override = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingAnimation: React.SFC<LoadingAnimationProps> = (props) => {
  return (
    <div className="sweet-loading">
      <DotLoader
        css={override}
        size={25}
        color={"var(--color-primary)"}
        loading={props.loading}
      />
    </div>
  );
};

export default LoadingAnimation;

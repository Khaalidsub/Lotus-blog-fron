import React from "react";
import InputField from "../Widgets/InputField";
import SubmitButton from "../Widgets/Buttons/SubmitButton";

export interface SignInProps {}

export interface SignInState {}

class SignIn extends React.Component<SignInProps, SignInState> {
  render() {
    return (
      <form className="">
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />
        <SubmitButton label="Sign In" />
      </form>
    );
  }
}

export default SignIn;

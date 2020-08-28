import React from "react";
import InputField from "../Widgets/InputField";
import SubmitButton from "../Widgets/Buttons/SubmitButton";

export interface SignUpProps {}

export interface SignUpState {}

class SignUp extends React.Component<SignUpProps, SignUpState> {
  render() {
    return (
      <form className="">
        <InputField label="Full Name" type="name" />
        <InputField label="Email" type="email" />
        <InputField label="Password" type="password" />
        <InputField label="Repeat Password" type="password" />
        <SubmitButton label="Sign Up" />
      </form>
    );
  }
}

export default SignUp;

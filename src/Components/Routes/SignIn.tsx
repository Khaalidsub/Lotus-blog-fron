import React from "react";
import InputField from "../Widgets/InputField";
import SubmitButton from "../Widgets/Buttons/SubmitButton";
import { Control, Form, actions } from "react-redux-form";
import { CredentialAction, signIn } from "../../store";
export interface SignInProps {}

export interface SignInState {}

class SignIn extends React.Component<SignInProps, SignInState> {
  handleSubmit(user: CredentialAction) {
    // actions.submit("userLogin", signIn(user));
  }
  render() {
    return (
      <Form model="userLogin" className="">
        <InputField model="userLogin.email" label="Email" type="email" />
        <InputField
          model="userLogin.password"
          label="Password"
          type="password"
        />
        <SubmitButton label="Sign In" />
      </Form>
    );
  }
}

export default SignIn;

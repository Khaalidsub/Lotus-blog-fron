import React from "react";
import InputField from "../Widgets/InputField";
import SubmitButton from "../Widgets/Buttons/SubmitButton";
import { Form } from "react-redux-form";
export interface SignUpProps {}

export interface SignUpState {}

class SignUp extends React.Component<SignUpProps, SignUpState> {
  render() {
    return (
      <Form model="userRegister" className="">
        <InputField model="userRegister.name" label="Full Name" type="name" />
        <InputField model="userRegister.email" label="Email" type="email" />
        <InputField
          model="userRegister.password"
          label="Password"
          type="password"
        />
        <InputField
          model="userRegister.repeatPassword"
          label="Repeat Password"
          type="password"
        />
        <SubmitButton label="Sign Up" />
      </Form>
    );
  }
}

export default SignUp;

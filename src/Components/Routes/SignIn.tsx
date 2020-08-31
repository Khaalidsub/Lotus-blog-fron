import React from "react";
import InputField from "../Widgets/InputField";
import SubmitButton from "../Widgets/Buttons/SubmitButton";
import { Form, actions } from "react-redux-form";
import { CredentialAction } from "../../store/interface";
import {
  required,
  validEmail,
  minLength,
  postLogin,
} from "../../utils/validators";
import { signIn } from "../../store";
export interface SignInProps {}

export interface SignInState {}

class SignIn extends React.Component<SignInProps, SignInState> {
  handleSubmit(user: CredentialAction) {
    actions.submit("userLogin", postLogin(user, signIn));
  }
  render() {
    return (
      <Form
        model="userLogin"
        onSubmit={(values) => this.handleSubmit(values)}
        className=""
      >
        <InputField
          validators={{
            required,
            validEmail,
          }}
          error={{
            required: "Requred",
            validEmail: "Invalid Email",
          }}
          model="userLogin.email"
          label="Email"
          type="email"
        />
        <InputField
          model="userLogin.password"
          label="Password"
          type="password"
          validators={{
            required,
            minLength: minLength(6),
          }}
          error={{
            required: "Requred",
            minLength: "Password Must be more than 6",
          }}
        />
        <SubmitButton label="Sign In" />
      </Form>
    );
  }
}

export default SignIn;

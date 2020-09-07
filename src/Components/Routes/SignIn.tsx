import React from "react";
import InputField from "../Widgets/InputField";
import SubmitButton from "../Widgets/Buttons/SubmitButton";
import { Form } from "react-redux-form";
import { CredentialAction } from "../../store/interface";
import { required, validEmail, minLength } from "../../utils/validators";
import { signIn } from "../../store";
import { connect } from "react-redux";
import LoadingAnimation from "../Widgets/loadingAnimation";

class _SignIn extends React.Component<any, any> {
  state = { loading: false };
  async handleSubmit(user: CredentialAction) {
    console.log(this.props);
    this.setState({ loading: true });
    await this.props.signIn(user);
    this.setState({ loading: false });
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

        <SubmitButton loading={this.state.loading} label="Sign In" />
        <LoadingAnimation loading={this.state.loading} />
      </Form>
    );
  }
}

export default connect(null, { signIn })(_SignIn);

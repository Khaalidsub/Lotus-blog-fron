import React from "react";
import InputField from "../Widgets/InputField";
import SubmitButton from "../Widgets/Buttons/SubmitButton";
import { Form } from "react-redux-form";
import {
  required,
  validEmail,
  minLength,
  maxLength,
} from "../../utils/validators";
import { addUser } from "../../store";
import { connect } from "react-redux";
import LoadingAnimation from "../Widgets/loadingAnimation";
import NotifcationCard from "../Widgets/Cards/NotificationCard";
class _SignUp extends React.Component<any, any> {
  state = {
    loading: false,

    errorMessage: "",
    typeError: "negative",
  };
  async handleSubmit(user: any) {
    console.log(user);
    this.setState({ loading: true });
    if (user.password !== user.repeatPassword) {
      this.setState({
        errorMessage: "Password and ConfirmPassword are not the same",
      });
      this.setState({ loading: false });
    } else {
      const result = await this.props.addUser({
        ...user,
        repeatPassword: undefined,
      });
      this.setState({ loading: false });
      if (result === true) {
        this.props.history.replace("/");
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <NotifcationCard
          isShown={this.state.errorMessage.length > 0}
          message={this.state.errorMessage}
          type={this.state.typeError}
          hide={() => this.setState({ errorMessage: "" })}
        />

        <Form
          model="userRegister"
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <InputField
            model="userRegister.name"
            label="Full Name"
            type="name"
            validators={{
              required,
              maxLength: maxLength(21),
            }}
            error={{
              required: "Requred",
              maxLength: "Name Cannot be more than 21 letters!",
            }}
          />
          <InputField
            model="userRegister.email"
            label="Email"
            type="email"
            validators={{
              required,
              validEmail,
            }}
            error={{
              required: "Requred",
              validEmail: "Invalid Email",
            }}
          />
          <InputField
            model="userRegister.password"
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
          <InputField
            model="userRegister.repeatPassword"
            label="Repeat Password"
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
          <SubmitButton loading={this.state.loading} label="Sign Up" />
          <LoadingAnimation loading={this.state.loading} />
        </Form>
      </React.Fragment>
    );
  }
}

export default connect(null, { addUser })(_SignUp);

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
import { motion } from "framer-motion";
class _SignUp extends React.Component<any, any> {
  state = {
    loading: false,
  };
  async handleSubmit(user: any) {
    // console.log(user);
    this.setState({ loading: true });
    if (user.password !== user.repeatPassword) {
      this.props.setMessage("Password and ConfirmPassword are not the same");
      this.setState({ loading: false });
    } else {
      const result = await this.props.addUser({
        ...user,
        repeatPassword: undefined,
      });
      this.setState({ loading: false });
      if (result === true) {
        this.props.history();
      } else {
        this.props.setMessage("Email already exists");
      }
    }
  }
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
      >
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
      </motion.div>
    );
  }
}

export default connect(null, { addUser })(_SignUp);

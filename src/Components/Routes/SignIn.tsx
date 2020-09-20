import React from "react";
import InputField from "../Widgets/InputField";
import SubmitButton from "../Widgets/Buttons/SubmitButton";
import { Form } from "react-redux-form";
import { CredentialAction } from "../../store/interface";
import { required, validEmail, minLength } from "../../utils/validators";
import { signIn } from "../../store";
import { connect } from "react-redux";
import LoadingAnimation from "../Widgets/loadingAnimation";
import { motion } from "framer-motion";
// interface SignInProps extends RouteComponentProps {
//   signIn: (data: CredentialAction) => Promise<any>;
// }
class _SignIn extends React.Component<any, any> {
  state = { loading: false };
  async handleSubmit(user: CredentialAction) {
    // console.log(this.props);
    this.setState({ loading: true });
    const result = await this.props.signIn(user);

    if (result === true) {
      // this.props.history.goBack();
      this.props.history();
      this.setState({ loading: false });
    } else {
      this.props.setMessage("email and/or password is incorrect!");
      this.setState({ loading: false });
    }
  }
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
      >
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
          <div className="text-center block w-full">
            <SubmitButton loading={this.state.loading} label="Sign In" />
          </div>
          <LoadingAnimation loading={this.state.loading} />
        </Form>
      </motion.div>
    );
  }
}

export default connect(null, { signIn })(_SignIn);

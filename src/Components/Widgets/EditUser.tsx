import React from "react";
import InputField from "./InputField";
import SubmitButton from "./Buttons/SubmitButton";
import { Form } from "react-redux-form";
export interface EditUserProps {}

export interface EditUserState {}

class EditUser extends React.Component<EditUserProps, EditUserState> {
  // state = { :  }
  render() {
    return (
      <Form model="userEdit" className="">
        <InputField model="userEdit.name" label="Full Name" type="name" />
        <InputField model="userEdit.email" label="Email" type="email" />

        <SubmitButton label="Edit Profile" />
      </Form>
    );
  }
}

export default EditUser;

import React from "react";
import InputField from "./InputField";
import SubmitButton from "./Buttons/SubmitButton";

export interface EditUserProps {}

export interface EditUserState {}

class EditUser extends React.Component<EditUserProps, EditUserState> {
  // state = { :  }
  render() {
    return (
      <form className="">
        <InputField label="Full Name" type="name" />
        <InputField label="Email" type="email" />

        <SubmitButton label="Edit Profile" />
      </form>
    );
  }
}

export default EditUser;

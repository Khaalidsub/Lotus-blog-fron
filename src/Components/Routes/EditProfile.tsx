import React from "react";
import EditUser from "../Widgets/EditUser";

export interface EditProfileProps {}

export interface EditProfileState {}

class EditProfile extends React.Component<EditProfileProps, EditProfileState> {
  state = { type: "profile" };
  render() {
    // const typeForm = this.state.type === "Register" ? <SignUp /> : <SignIn />;
    const typeForm = <EditUser />;
    return (
      <div>
        <div className="w-full max-w-3xl mx-auto  border border-primary my-16  pb-10 pt-10 rounded-lg shadow-lg flex flex-col md:flex-row ">
          <div className="flex md:flex-col flex-row justify-center md:justify-start border-r  text-center">
            <div className="mx-8 text-secondary">
              <button
                className="focus:outline-none border-b-2 pb-2"
                onClick={() => this.setState({ type: "profile" })}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className="p-10 mx-auto">{typeForm}</div>
        </div>
      </div>
    );
  }
}

export default EditProfile;

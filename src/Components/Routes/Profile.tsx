import React from "react";
import Button from "../Widgets/Buttons/Button";
import { PaginationButtons } from "../Widgets/Buttons/PaginationButtons";
import { PostImageCard } from "../Widgets/Cards/PostImageCard";

export interface ProfileProps {}

export interface ProfileState {}

class Profile extends React.Component<ProfileProps, ProfileState> {
  // state = { :  }
  render() {
    return (
      <div className="mx-12 my-12">
        <div className="max-w-lg mx-auto p-5 relative">
          <div className="bg-secondary-background border border-secondary flex flex-col lg:flex-row p-5 justify-between rounded">
            <h4 className="order-2 text-center lg:text-left text-secondary text-lg">
              Khaalid Subaan
            </h4>
            <div className="lg:absolute pb-4 top-0 left-0 order-first right-0 w-full ">
              <img
                className="w-16 h-16 rounded-full mx-auto "
                src="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Avatar of Jonathan Reinink"
              />
            </div>

            <div className="text-center z-10 lg:text-right order-last">
              <Button label="Edit Profile" />
            </div>
          </div>
        </div>
        <ul className="max-w-md  flex justify-between mx-auto">
          <li>
            <a className="text-tertiary hover:text-primary" href="#">
              Written Posts
            </a>
          </li>
          <li>
            <a
              className="text-center  text-tertiary hover:text-primary "
              href="#"
            >
              BookMarks
            </a>
          </li>
          <li>
            <a className="text-tertiary hover:text-primary" href="#">
              Liked Posts
            </a>
          </li>
        </ul>
        <div className="mt-5 lg:mx-64 border-tertiary border-t-2">
          <hr />
        </div>
        <div className="lg:max-w-4xl lg:mx-auto md:grid md:grid-cols-1 mt-10 mb-10">
          <div className="mx-auto">
            <PaginationButtons />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            >
              <div className="text-center md:text-left">
                <Button label="Edit Post" type="warning" />
                <Button label="Delete Post" type="negative" />
              </div>
            </PostImageCard>
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            >
              <div className="text-center md:text-left">
                <Button label="Edit Post" type="warning" />
                <Button label="Delete Post" type="negative" />
              </div>
            </PostImageCard>
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            >
              <div className="text-center md:text-left">
                <Button label="Edit Post" type="warning" />
                <Button label="Delete Post" type="negative" />
              </div>
            </PostImageCard>
            <PaginationButtons />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

import React from "react";
import { PostImageCard } from "./Widgets/Cards/PostImageCard";
import { PostCard } from "./Widgets/Cards/PostCard";
import { ImageCard } from "./Widgets/Cards/ImageCard";

class Home extends React.Component {
  render() {
    return (
      <div className="">
        <div className="relative">
          <img
            className="object-cover h-64 lg:h-76 w-full"
            src="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          <div className="w-full absolute top-0  flex justify-center">
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
          </div>

          <div className="w-full  absolute bottom-0 left-0 right-0">
            <div className=" flex flex-row justify-center">
              <ImageCard image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />
              <ImageCard image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />
              <ImageCard image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 mt-10 mb-10">
          <div className="mx-auto">
            <h4 className="text-3xl italic">Latest Post</h4>
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
          </div>
          <div className="mx-auto sticky">
            <h4 className="text-3xl italic">Popular Post</h4>

            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import { PostImageCard } from "./Widgets/Cards/PostImageCard";
import { PostCard } from "./Widgets/Cards/PostCard";

class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div>
          <img
            className="object-cover h-full w-full"
            src="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div className=" md:justify-between md:flex-row">
          <div className="mb-5 ">
            <PostImageCard
              image="https://images.unsplash.com/photo-1541332246502-2e99eaa96cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              subtitle="qnwdwqjofhwoqufhwqofwefewfhbewigheiwghuoewh"
              title="Post title"
            />
          </div>
          <div className="mb-5 mx-auto">
            <PostCard
              subtitle="qnwdwqjofhwoqufhwqofwefewfhbewigheiwghuoewh"
              title="Post title"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import Button from "../Widgets/Buttons/Button";
import { PostCard } from "../Widgets/Cards/PostCard";
import CategoryCard from "../Widgets/Cards/CategoryCard";

export interface PostsProps {}

export interface PostsState {}

export class Posts extends React.Component<PostsProps, PostsState> {
  state = { search: "" };
  render() {
    return (
      <div className="mx-12 my-12">
        <div className="max-w-xl mx-auto">
          <form>
            <div>
              <input
                className="shadow appearance-none border bg-secondary-background rounded w-full py-2 px-3 text-tertiary leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search"
              ></input>
            </div>

            <ul className="mt-6 border-t-2 border-r-2 border-l-2 rounded p-2 lg:p-5 max-w-lg  flex justify-between mx-auto">
              <li>
                <a className="text-tertiary hover:text-primary" href="#">
                  Category Posts
                </a>
              </li>
              <li>
                <a
                  className="text-center  text-tertiary hover:text-primary "
                  href="#"
                >
                  User Posts
                </a>
              </li>
              <li>
                <a className="text-tertiary hover:text-primary" href="#">
                  Post Titles
                </a>
              </li>
            </ul>
          </form>
        </div>
        <div className=" border-tertiary border-t-1">
          <hr />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <div className="mx-auto">
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
              image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
            >
              <CategoryCard category="programming" />
            </PostCard>
          </div>
          <div className="mx-auto">
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
              image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
            >
              <CategoryCard category="programming" />
            </PostCard>
          </div>
          <div className="mx-auto">
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
              image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
            >
              <CategoryCard category="programming" />
            </PostCard>
          </div>
          <div className="mx-auto">
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
              image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
            >
              <CategoryCard category="programming" />
            </PostCard>
          </div>
          <div className="mx-auto">
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
              image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
            >
              <CategoryCard category="programming" />
            </PostCard>
          </div>
          <div className="mx-auto">
            <PostCard
              subtitle="    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi magnam quis totam consequatur magni doloremque unde numquam laborum expedita. Quis, maiores. Laudantium enim tempore maxime voluptates nihil, officia sunt exercitationem."
              title="Post title"
              image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
            >
              <CategoryCard category="programming" />
            </PostCard>
          </div>
        </div>
      </div>
    );
  }
}

// export default Posts;

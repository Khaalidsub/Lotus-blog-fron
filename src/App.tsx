import React from "react";
import { NavBar } from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Routes/Home";

import Profile from "./Components/Routes/Profile";
import { Posts } from "./Components/Routes/Posts";
import { AddPost } from "./Components/Routes/AddPost";
import { ViewPost } from "./Components/Routes/ViewPost";
import SignUp from "./Components/Routes/SignUp";
import SignForm from "./Components/Routes/SignForm";
import EditProfile from "./Components/Routes/EditProfile";
import Header from "./Components/Header";
export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Header />

        <div className="sticky top-0 z-50 bg-secondary-background">
          <NavBar />
        </div>

        <EditProfile />

        <Footer />
        <div className="md:hidden fixed bottom-0 z-20 right-0 p-5">
          <div className="   border-4 border-primary  bg-secondary-background p-3 text-secondary rounded-full text-xl  text-center">
            +
          </div>
        </div>
        <div className="md:block hidden fixed bottom-0 z-20 right-0 p-5">
          <div className="border-2 border-primary  bg-secondary-background p-4 text-secondary rounded-full text-xl  text-center">
            Add a new Post
          </div>
        </div>
      </div>
    );
  }
}

export default App;

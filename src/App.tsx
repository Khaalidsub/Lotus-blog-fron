import React from "react";
import { NavBar } from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { DEFAULT_THEME } from "./themes";
import { applyTheme } from "./utils/theme";
export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
  state = {
    theme: DEFAULT_THEME,
  };
  componentDidMount() {
    applyTheme(this.state.theme);
  }
  setTheme(theme: string) {
    this.setState({ theme: theme });
    applyTheme(theme);
  }
  render() {
    return (
      <div>
        <div className="p-5">
          <div className="mx-auto m-6">
            {this.state.theme === "default" ? (
              <button
                className="text-secondary border border-primary p-3"
                onClick={() => this.setTheme("dark")}
              >
                Apply Dark Theme
              </button>
            ) : (
              <button
                className="text-secondary border border-primary p-3"
                onClick={() => this.setTheme("default")}
              >
                Apply Light Theme
              </button>
            )}
          </div>
        </div>
        <div className="sticky top-0 z-10 bg-secondary-background">
          <NavBar />
        </div>

        <Home />

        <Footer />
      </div>
    );
  }
}

export default App;

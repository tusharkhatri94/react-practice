import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
//import NavBar from "./Navbar";

const App = () => {
  // return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //         name: "Luna",
  //         animal: "Dog",
  //         breed: "Havenese",
  //     }),
  //     React.createElement(Pet, { name: "Bruno", animal: "Dog", breed: "Pug" }),
  //     React.createElement(Pet, {
  //         name: "Fishi",
  //         animal: "Fish",
  //         breed: "Catfish",
  //     })
  // );
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          {/* <NavBar /> */}
          <header>
            <Link to="/">About Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));

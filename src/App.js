import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        {/* <Pet name="Texaco" animal="Dog" breed="Shepherd Mix" />
      <Pet name="Goldilocks" animal="Fish" breed="Goldfish" />
      <Pet name="Jigglypuff" animal="Gineau pig" breed="Round" /> */}

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));

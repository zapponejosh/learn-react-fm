import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt me!</h1>
        {/* <Pet name="Texaco" animal="Dog" breed="Shepherd Mix" />
      <Pet name="Goldilocks" animal="Fish" breed="Goldfish" />
      <Pet name="Jigglypuff" animal="Gineau pig" breed="Round" /> */}
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Tex",
      animal: "Dog",
      breed: "CutiePie",
    }),
    React.createElement(Pet, {
      name: "Goldilocks",
      animal: "Fish",
      breed: "Goldfish",
    }),
    React.createElement(Pet, {
      name: "JigglyPuff",
      animal: "Gineau Pig",
      breed: "Round",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));

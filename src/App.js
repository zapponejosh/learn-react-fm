const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));

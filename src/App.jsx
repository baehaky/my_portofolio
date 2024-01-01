import "./App.css";
import { AboutMe } from "./Components/AboutMe";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <AboutMe />
      <Project />
    </>
  );
}

export default App;

import "./App.css";
import { AboutMe } from "./Components/AboutMe";
import Footer from "./Components/Footer";
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
      <Footer />
    </>
  );
}

export default App;

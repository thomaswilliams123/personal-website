import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Resume from "./pages/Resume/resume";
import Background from "./Components/background/background";
import Projects from "./pages/Projects/projects";


function App() {
  return (
    <>
    <Background/>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/resume">
              <Resume/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

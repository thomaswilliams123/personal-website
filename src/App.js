import Header from "./Components/Header/header";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/home.js";
import About from "./pages/about";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Blogs from "./pages/blogs";


function App() {
  return (
    <>
      <Router>
        <div>
          <Header/>
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
            <Route path="/blogs">
              <Blogs/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

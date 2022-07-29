import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Resume from "./pages/Resume/resume";
import Background from "./Components/background/background";
import Projects from "./pages/Projects/projects";
import Blogs from "./pages/Blogs/blogs"
import DayOutSeeingSpiderman from "./pages/Blogs/articles/day out seeing spiderman";
import AmazingTripToLondon from "./pages/Blogs/articles/amazing trip to london";


function App() {
  return (
    <>
    <div>
      <Background/>
    </div>
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
          <Route path="/blogs" exact>
            <Blogs/>
          </Route>
          <Route path="/blogs/day-out-seeing-spiderman-2021" exact>
            <DayOutSeeingSpiderman/>
          </Route>
          <Route path="/blogs/my-amazing-trip-to-london-2019" exact>
            <AmazingTripToLondon/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;

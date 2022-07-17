import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/home.js";
import About from "./pages/about";


function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

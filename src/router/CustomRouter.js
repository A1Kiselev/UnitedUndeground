import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Maps from "../pages/Maps";
import Home from "../pages/Home";
import React from "react";
import logo from '../logo32.png'

const CustomRouter = () => {
  return (
    <Router>
      <div className="navbar">
        <nav>
          <div className="navbar__container">
            <div className="logo">
              <img src={logo} alt="logo"/>
            </div>
            <div className="link">
              <Link className="text" to="/">Home</Link>
            </div>
            <div className="link">
              <Link className="text" to="/maps">Maps</Link>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/maps">
          <Maps/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default CustomRouter;

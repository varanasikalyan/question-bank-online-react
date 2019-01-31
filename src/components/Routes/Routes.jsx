import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Careers from "../Careers/Careers";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/careers" component={Careers} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;

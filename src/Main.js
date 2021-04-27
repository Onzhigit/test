import React from "react";
import { compose } from "redux";
import { Route, withRouter, Switch } from "react-router-dom";
import SignIn from "./components/signIn";
import Registration from "./components/registration";
import Home from "./components/homePage";
import Navbar from "./components/navbar";

export const Main = () => {
  return (
    <>
      <Switch>
        <Route path="/signin" render={() => <SignIn />} />
        <Route path="/registration" render={() => <Registration />} />
        <Navbar>
          <Route exact path="/" render={() => <Home />} />
    
         
        </Navbar>
      </Switch>
    </>
  );
};

export default compose(withRouter)(Main);

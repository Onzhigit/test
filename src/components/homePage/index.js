import React from "react";
import { connect } from "react-redux";
import { HomePage } from "./homePage";
import { Redirect } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Redirect to="/signin" />;
  }
  return (
    <>
      <HomePage />
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

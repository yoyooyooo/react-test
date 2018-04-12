import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import * as Actions from "../actions/actionCreacter.js";
import LoginContainer from "../../components/login/Login";

class Login extends Component {
  render() {
    const { isLogged, onlogin, history } = this.props;
    if (isLogged) {
      // history.push("/main");
      return <Redirect to="/main" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <span>是否登录：{`${isLogged}`}</span>
        <br />
        <input type="text" />
        <input type="text" />
        <button onClick={onlogin}>login</button>
        <LoginContainer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.login.isLogged
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onlogin: () => {
      dispatch(Actions.login());
    }
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(Login);
export default withRouter(App);

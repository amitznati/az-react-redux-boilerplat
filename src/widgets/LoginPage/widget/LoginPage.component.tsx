import React, { Component } from "react";
import LoginPageMainView from "./components/LoginPage.mainView";
import { mapComponentProps } from "./LoginPage.propsMappar";
export default class LoginPageComponent extends Component {
  render() {
    return <LoginPageMainView {...mapComponentProps(this.props)} />;
  }
}

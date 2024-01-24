import React, { Component } from "react";
import MainNavbarMainView from "./components/MainNavbar.mainView";
import { mapComponentProps } from "./MainNavbar.propsMappar";

interface MainNavbarProps {
  links: { label: string; to: string }[];
}
export default class MainNavbarComponent extends Component<MainNavbarProps> {
  render() {
    return <MainNavbarMainView {...mapComponentProps(this.props)} />;
  }
}

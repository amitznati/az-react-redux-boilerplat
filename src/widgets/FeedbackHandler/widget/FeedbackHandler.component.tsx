import React, { Component } from "react";
import FeedbackHandlerMainView from "./components/FeedbackHandler.mainView";
import { mapComponentProps } from "./FeedbackHandler.propsMappar";
export default class FeedbackHandlerComponent extends Component {
  render() {
    return <FeedbackHandlerMainView {...mapComponentProps(this.props)} />;
  }
}

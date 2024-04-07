import { connect } from "react-redux";
import { getInstance } from "@sdk";
import FeedbackHandlerComponent from "./FeedbackHandler.component";

const feedbackHandlerApi = getInstance().FeedbackHandlerApi;

const mapStateToProps = () => {
  return {
    feedbacksConfig: feedbackHandlerApi.getFeedbacksConfigSelector(),
    feedbacks: feedbackHandlerApi.getFeedbacksSelector(),
  };
};

const mapDispatchToProps = () => ({
  removeFeedback: feedbackHandlerApi.removeFeedback
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedbackHandlerComponent);

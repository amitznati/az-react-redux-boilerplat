import React from "react";
import {feedbackConfigType, pushFeedbackPayloadType} from "../../FeedbackHandler.types";
import {Modal} from "@common-components";
import ToastFeedback from "./ToastFeedback";

interface FeedbackHandlerMainViewProps {
    feedbacks: pushFeedbackPayloadType[]
    feedbacksConfig: {[x: string]: feedbackConfigType}
    removeFeedback: (fb: pushFeedbackPayloadType) => void;
}

export default function FeedbackHandlerMainView(
  {feedbacks, feedbacksConfig, removeFeedback}: FeedbackHandlerMainViewProps,
) {
    if (!feedbacks || !feedbacks.length) return null;
    const handleClose = (fbCode: pushFeedbackPayloadType) => {
        removeFeedback(fbCode);
    }
    return (
      <div>
          {[...feedbacks].map(fb => {
              if (!feedbacksConfig[fb.code]) return null;
              const feedback = feedbacksConfig[fb.code];
              let message = feedback.message;
              let title = feedback.title;
              if (fb.values) {
                  Object.keys(fb.values).forEach(key => {
                      message = message.replace(`{${key}}`, fb.values[key]);
                      title = title.replace(`{${key}}`, fb.values[key]);
                  });
              }
              switch (feedback.feedbackType) {
                  case "toast": {
                      return (<ToastFeedback
                        key={fb.code}
                        {...feedback}
                        message={message}
                        title={title}
                        onClose={() => handleClose(fb)}
                      />);
                  }
                  case "modal":
                      return (
                        <Modal open key={fb.code} title={feedback.title}>
                            {feedback.message}
                        </Modal>

                      );
                  default :
                      return null
              }
          })}
      </div>
    );
}

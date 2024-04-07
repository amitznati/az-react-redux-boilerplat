export interface IFeedbackHandlerApi {
    pushFeedback: (code: string, values?: {[x: string]: string}) => void;
    removeFeedback: (feedbackCode: string) => void;
    getFeedbacksConfigSelector: () => feedbackConfigType[];
    getFeedbacksSelector: () => pushFeedbackPayloadType[];
}

export type feedbackConfigType = {
    message: string,
    type: "success" | "error" | "warning" | "info",
    position: "top-right" | "top-left" | "top-center",
    feedbackType: "toast" | "modal"
    title: string
    timeout?: number
}
export type pushFeedbackPayloadType = {
    code: string,
    values: {[x: string]: string}
}

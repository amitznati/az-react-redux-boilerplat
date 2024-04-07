import { ILoginPageApi } from "./LoginPage";
import { IPostsListApi } from "./PostsList";
import { IFeedbackHandlerApi } from "./FeedbackHandler";

export interface WidgetType {
  config: {
    persist?: object;
    sliceName: string;
    apiName: string;
  };
  reducer: any;
  api: any;
}

export interface ApisType {
  LoginPageApi: ILoginPageApi;
  PostsListApi: IPostsListApi;
  FeedbackHandlerApi: IFeedbackHandlerApi;
}
import { BaseApi, SimpleServices } from "@sdk";
import selectors from "./LoginPageSelectors";

export const ActionTypes = {
  LoginPage_LOGIN: "LoginPage_LOGIN",
  LoginPage_LOGOUT: "LoginPage_LOGOUT",
};

export interface ILoginPageApi {
  login: (data: any) => Promise<any>;
  logout: () => Promise<any>;
  getUserSelector: () => any;
}
export default class LoginPageApi extends BaseApi implements ILoginPageApi {
  login = async (data: any) => {
    return this.serviceRequest(
      SimpleServices.login,
      { data: { username: data.username, password: data.password } },
      ActionTypes.LoginPage_LOGIN,
      (res) => {
        console.log("Login Success!", res);
        return res.data;
      },
      (err) => {
        console.log("Login Failed!");
        return err;
      },
      {
        feedbackOptions: {
          successCode: "login_success!",
          successValues: {USER_NAME: data.username},
          errorCode: "login_failed!"
        },
      }
    );
  };

  logout = async () => {
    await this.serviceRequest(
      SimpleServices.logout,
      {},
      ActionTypes.LoginPage_LOGOUT,
      (res) => {
        console.log("Logout Success!", res);
        return res.data;
      },
      (err) => {
        console.log("Logout Failed!");
        return err;
      },
    );
    this.store.dispatch({ type: "@@RESET_STORE" });
  };
  getUserSelector = () => {
    return selectors.getUserSelector(this.store.getState());
  };
}

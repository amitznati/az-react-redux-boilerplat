import { BaseApi, SimpleServices } from "@sdk";
import selectors from "./LoginPageSelectors";

export const ActionTypes = {
  LoginPage_LOGIN: "LoginPage_LOGIN",
  LoginPage_LOGOUT: "LoginPage_LOGOUT",
};
export default class LoginPageApi extends BaseApi {
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
    this.store.dispatch({ type: "RESET_STATE" });
  };
  getUserSelector = () => {
    return selectors.getUserSelector(this.store.getState());
  };
}

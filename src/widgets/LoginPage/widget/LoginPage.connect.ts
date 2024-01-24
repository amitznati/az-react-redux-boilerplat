import { connect } from "react-redux";
import { getInstance } from "@sdk";
import LoginPageComponent from "./LoginPage.component";

const loginPageApi = getInstance().LoginPageApi;

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = () => ({
  login: loginPageApi.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);

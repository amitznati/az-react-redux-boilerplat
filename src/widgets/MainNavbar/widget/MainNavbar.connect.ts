import { connect } from "react-redux";
import { getInstance } from "@sdk";
import MainNavbarComponent from "./MainNavbar.component";

const loginApi = getInstance().LoginPageApi;

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    ...ownProps,
    user: loginApi.getUserSelector(),
  };
};

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainNavbarComponent);

const config = {
  sliceName: "loginPage",
  apiName: "LoginPageApi",
  persist: {
    whitelist: ["user"],
    blacklist: ["loginForm"],
  }
};

export default config;

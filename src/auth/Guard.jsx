import React from "react";
import axios from "axios";

const apiAuthHandler = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND_URL
});

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      loginStatus: {},
      user: null,
      repos: null,
      orgs: null
    };
  }

  componentDidMount() {
    this.isLoggedIn();
  }

  get user() {
    return this.state.user;
  }

  updateState(data) {
    const { loginStatus, user, repositories, organizations } = data;
    this.setState({ loginStatus: loginStatus, user: user, repos: repositories, orgs: organizations });
    console.log(this.state)
  }

  isLoggedIn = () => {
    apiAuthHandler
      .get("/loggedIn", null)
      .then(serverRes => {
        this.updateState(serverRes.data);
      })
      .catch(serverErr => {
        this.setState({ loginStatus: false });
      });
  };

  signout = clbk => {
    apiAuthHandler.get("/logout").then(serverRes => {
      this.setState({ user: null, loginStatus: false }, () => clbk(this.state.loginStatus));
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.user,
          loginStatus: this.state.loginStatus,
          isLoggedIn: this.isLoggedIn,
          signin: this.signin,
          signout: this.signout,
          repos: this.state.repos,
          orgs: this.state.orgs
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };

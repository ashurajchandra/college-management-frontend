import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login, removeAuthUser } from "../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentWillUnmount() {
    // this.props.dispatch(removeAuthUser());
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this.state", this.state);
    const { email, password } = this.state;

    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };

  render() {
    // const { inProgress, isLoggedIn, error } = this.props.auth;
    // if (isLoggedIn) {
    //   return <Redirect to="/" />;
    // }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          {/* {error && <div>Invalid email or password</div>} */}
          <input
            type="email"
            placeholder="email@"
            required
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="password"
            required
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>

        <div className="field">
          <button onClick={this.handleSubmit}>Login</button>
        </div>
      </form>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);

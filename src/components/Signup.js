import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { signUp, startSignup } from "../actions/auth";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      role: "",
    };
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, role, name } = this.state;
    console.log("this.state", this.state);
    console.log("e.ttarget.value", e.target.value);
    console.log("email:", email);
    console.log("pass:", password);
    console.log("name:", name);
    console.log("role:", role);

    if (email && password && role && name) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signUp(email, password, role, name));
    }
  };

  render() {
    // const { inProgress, error, isLoggedIn } = this.props.auth;
    // if (isLoggedIn) {
    //   return <Redirect to="/" />;
    // }
    return (
      <form className="login-form">
        <span className="login-signup-header"> Signup</span>
        {/* {error && <div className="alert error-dailog">{error}</div>} */}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange("name", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => this.handleInputChange("email", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Role"
            type="text"
            required
            onChange={(e) => this.handleInputChange("role", e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) => this.handleInputChange("password", e.target.value)}
          />
        </div>
        <div className="field">
          <button onClick={this.onFormSubmit}>Signup</button>
        </div>
      </form>
    );
  }
}

// const mapStateToProps = ({ auth }) => ({
//   auth,
// });
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Signup);

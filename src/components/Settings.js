import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      confirmPassword: "",
      editMode: false,
    };
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  render() {
    const { auth } = this.props;
    return (
      <form className="login-form">
        {/* <span className="login-signup-header"> Signup</span> */}
        {/* {error && <div className="alert error-dailog">{error}</div>} */}
        {/* <div className="user">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />

          <span>{auth.user.name}</span>
        </div> */}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange("name", e.target.value)}
          />
        </div>
        {/* <div className="field">
          <input
            placeholder="Email"
            type="email"
            required
            onChange={(e) => this.handleInputChange("email", e.target.value)}
          />
        </div> */}
        <div className="field">
          <input
            placeholder="Password"
            type="password"
            required
            onChange={(e) =>
              this.handleInputChange("confirmPassword", e.target.value)
            }
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm password "
            type="password"
            required
            onChange={(e) => this.handleInputChange("password", e.target.value)}
          />
        </div>
        <div className="field">
          <button onClick={this.handleEdit}>Edit Profile</button>
        </div>
        <div className="field">
          <button onClick={this.onFormSubmit}>Save</button>
        </div>
      </form>
    );
  }
}

export default Settings;

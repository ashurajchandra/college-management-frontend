import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";

class Navbar extends React.Component {
  logout = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logoutUser());
  };
  render() {
    const { auth } = this.props;
    const { isLoggedIn } = this.props.auth;
    console.log("auth", auth);
    // if (isLoggedIn) {
    //   return <Route to="/" />;
    // }
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <Link to="/">
              <img
                src="data:image/png;base64,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"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search-container">
            {isLoggedIn && <h1>Welcome to {auth.user.role} dashbord </h1>}
            {/* <img
              className="search-icon"
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="right-nav">
            {auth.isLoggedIn && (
              <div className="user">
                <Link to="/setting">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                    id="user-dp"
                  />
                </Link>
                <span>{auth.user.name}</span>
              </div>
            )}

            <div className="nav-links">
              <ul>
                <ul>
                  <li>{!isLoggedIn && <Link to="/login">Log in</Link>}</li>

                  {isLoggedIn && <li onClick={this.logout}>Log out</li>}

                  <li>{!isLoggedIn && <Link to="/signup">Register</Link>}</li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);

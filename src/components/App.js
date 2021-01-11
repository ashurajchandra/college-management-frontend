import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Navbar,
  Login,
  Signup,
  Page404,
  Home,
  Student,
  Teacher,
  Settings,
} from "./index";
import PropType from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { authenticateUser } from "../actions/auth";

const PrivateRoute = (privateRouteProps) => {
  const { path, isLoggedIn, auth, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} auth={auth} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("token not found");
    }
    if (token) {
      const user = jwt_decode(token);

      console.log("user got token", user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
          role: user.role,
        })
      );
    }
  }
  render() {
    // const { store } = this.props;
    // console.log("store in app", store);
    const { auth } = this.props;
    console.log("props in app", this.props);
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Signup} />
            <Route path="/teacher" component={Teacher} />
            <Route path="/student" component={Student} />
            <PrivateRoute
              path="/setting"
              component={Settings}
              auth={auth}
              isLoggedIn={auth.isLoggedIn}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}
App.propType = {
  users: PropType.array.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(App);

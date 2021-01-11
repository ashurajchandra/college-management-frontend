import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>Welcome to Portal</h1>
        <a href="/register">
          are you a new user lets register <a href="/login">or login</a>
        </a>
        <img
          src="https://images.unsplash.com/photo-1541791230600-b62df7fa1cf0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="home-page"
        />
      </div>
    );
  }
}

export default Home;

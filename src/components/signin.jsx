import React, { Component } from "react";
import "./signin.css";

class Signin extends Component {
  render() {
    return (
      <div className="text-center">
        <form className="form-signin">
          <img
            className="mb-4"
            src="logo192.png"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            autoComplete="email-address"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            autoComplete="current-password"
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
        </form>
      </div>
    );
  }

  componentDidMount() {
    document.body.classList.add("signin-page");
  }
}

export default Signin;

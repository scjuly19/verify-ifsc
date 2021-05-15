import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";
import { css } from "@emotion/react";
import error from "./assets/images/error.jpg";

export default class ErrorBoundaries extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <div
          css={css`
            height: 100vh;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-direction: column;
          `}
        >
          <img
            src={error}
            alt="error-occurred"
            css={css`
              width: 100%;
              height: auto;
              max-width: 700px;
            `}
          />
          <p>
            Oops! Something went wrong!. <Link to="/">Click here</Link> to got
            back to Homepage or wait for 5 seconds to automatically redirect to
            homepage.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

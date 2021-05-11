import React from "react";
import { css } from "@emotion/react";
import HomePage from "./HomePage";
import Details from "./Details";
import { Router } from "@reach/router";

export default function App() {
  return (
    <div
      css={css`
        background: linear-gradient(135deg, #38eaff 0, #b05af1 100%);
        height: 100vh;
        text-align: center;
        padding-top: 15px;
      `}
    >
      <h1
        css={css`
          color: white;
        `}
      >
        {" "}
        Verify Your IFSC Code
      </h1>

      <Router>
        <HomePage path="/" />
        <Details path="/details" />
      </Router>

      {/* <Details /> */}
    </div>
  );
}

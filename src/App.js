import React from "react";
import { css } from "@emotion/react";
import Input from "./components/input";
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
      <Input />
    </div>
  );
}

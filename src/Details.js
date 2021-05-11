import React from "react";
import { css } from "@emotion/react";

export default function Details() {
  return (
    <div
      css={css`
        background: red;
        padding: 0 1rem;
        width: 100%;
      `}
    >
      <div
        css={css`
          height: 300px;
          background: khaki;
          max-width: 100%;
        `}
      >
        <p>heyyyyy</p>
        <p>heyyyyy</p>
        <p>heyyyyy</p>
        <p>heyyyyy</p>
        <p>heyyyyy</p>
      </div>
    </div>
  );
}

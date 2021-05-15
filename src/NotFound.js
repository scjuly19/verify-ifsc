import React from "react";
import { css } from "@emotion/react";
import notfound from "./assets/images/notfound.jpg";

export default function NotFound() {
  return (
    <>
      <img
        src={notfound}
        alt="page-not-found"
        css={css`
          height: auto;
          width: 100%;
        `}
      />
    </>
  );
}

import React from "react";
import { css } from "@emotion/react";
//btn-color:#f9636e
export default function Input() {
  return (
    <div css={css``}>
      <form>
        <div
          css={css`
            max-width: 100%;
            margin-top: 1rem;
          `}
        >
          <input
            css={css`
              padding: 1rem;
              width: 50%;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              border: none;
              outline: 0 !important;
            `}
          />
          <button
            css={css`
              padding: 1rem;
              border-radius: 10px;
              outline: none !important;
              border: none;
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
              margin: 0;
            `}
          >
            >
          </button>
        </div>
      </form>
    </div>
  );
}

import React from "react";
import { css } from "@emotion/react";

export default function Input(props) {
  const { onSubmit, onChange, value } = props;
  return (
    <div css={css``}>
      <form>
        <div
          css={css`
            max-width: 100%;
            margin-top: 1rem;
          `}
        >
          <label
            htmlFor="ifsc-code"
            css={css`
              border: 0;
              clip: rect(0 0 0 0);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              width: 1px;
            `}
          >
            Verify
          </label>
          <input
            css={css`
              width: 70%;
              max-width: 480px;
              padding: 1rem;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              border: none;
              outline: 0 !important;
              font-size: 1em;
              @media (min-width: 1024px) {
                flex-direction: row;
              }
            `}
            onChange={onChange}
            value={value}
            id="ifsc-code"
            placeholder="Enter bank ifsc code here..."
            autoComplete="off"
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
              background: #f9636e;
              text-align: center;
              font-size: 1em;
              font-weight: bold;
              opacity: ${!value ? "0.8" : "1"};
            `}
            onClick={onSubmit}
            disabled={!value}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

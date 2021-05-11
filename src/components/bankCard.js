import React from "react";
import { css } from "@emotion/react";

export default function Card() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 15px;
      `}
    >
      <div
        css={css`
          background: white;
          width: 80%;
          max-width: 800px;
          display: flex;
          align-items: center;
          flex-direction: column;
          border-radius: 5px;
          padding: 2rem;

          @media (min-width: 1024px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <ContentBlock title="BANK" description="HDFC" />

        <ContentBlock title="BANK" description="HDFC" />

        <ContentBlock title="BANK" description="HDFC" />

        <ContentBlock title="BANK" description="HDFC" />
      </div>
    </div>
  );
}
const ContentBlock = (props) => {
  const { description, title } = props;
  return (
    <div
      css={css`
        margin-top: 5px;
      `}
    >
      {" "}
      <span
        css={css`
          color: #c6c2c1;
        `}
      >
        {title}
      </span>
      <h2>{description}</h2>
    </div>
  );
};

import React from "react";
import { css } from "@emotion/react";
import { useStore } from "./hooks/useStore";

import { colors } from "./assets/colors";
import { ContentBlock } from "./components/contentBlock";
import { CONSTANTS } from "./constants/constants";
import ErrorBoundaries from "./ErrorBoundaries";

const keys = [
  "BANKCODE",
  "BANK",
  "BRANCH",
  "ADDRESS",
  "CENTRE",
  "IFSC",
  "MICR",
];
function Details() {
  const { state } = useStore();
  const { data } = state;
  if (!data) throw new Error("Oops! No data found");
  return (
    <>
      <div
        css={css`
          background: ${colors.primaryBackground};
          padding: 0 1rem;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <h1>{data && data[CONSTANTS.IFSC]}</h1>
        <div
          css={css`
            background: ${colors.primaryColor};
            max-width: 700px;
            width: 100%;
            padding: 15px 0px;
            border-radius: 10px;
            box-shadow: 10px 10px 25px 0px rgba(150, 149, 149, 0.8);
            margin-top: 15px;
          `}
        >
          {keys.map((key, index) => (
            <ContentBlock
              title={key}
              description={data && data[key]}
              containerStyle={css`
                margin-top: 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0px 1rem;
                text-align: right;
              `}
              key={index}
              titleStyle={css`
                color: #c6c2c1;
              `}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default function DeatilsWthErrorBoundaries(props) {
  return (
    <ErrorBoundaries>
      <Details {...props} />
    </ErrorBoundaries>
  );
}

import React from "react";
import { css } from "@emotion/react";
import { useStore } from "../hooks/useStore";
import { Link } from "@reach/router";
import { colors } from "../assets/colors";
import { ContentBlock } from "../components/contentBlock";

const keys = ["BANK", "CITY", "DISTRICT", "STATE"];
export default function Card() {
  const { state } = useStore();
  const { data } = state;
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
          background: ${colors.primaryColor};
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
        {keys.map((key, index) => (
          <ContentBlock
            title={key}
            description={data[key]}
            containerStyle={css`
              margin-top: 5px;
            `}
            key={index}
            titleStyle={css`
              color: #c6c2c1;
            `}
          />
        ))}
        <Link to="/details">
          <span>View More</span>
        </Link>
      </div>
    </div>
  );
}

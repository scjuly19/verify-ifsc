import React from "react";

export const ContentBlock = (props) => {
  const { description, title, containerStyle, titleStyle } = props;

  return (
    <div css={containerStyle}>
      {" "}
      <span css={titleStyle}>{title}</span>
      <h2>{description}</h2>
    </div>
  );
};

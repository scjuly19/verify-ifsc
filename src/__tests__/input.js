import React from "react";
import Input from "../components/input";
import ReactDOM from "react-dom";
test("calls onSubmit after entering ifsc code", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Input />, container);
  const input = container.querySelector("input");
  const button = container.querySelector("button");
  input.value = "kabk10001";
  button.dispatchEvent("click");
});

import React, { useState } from "react";
import Input from "./components/input";
import BankCard from "./components/bankCard";
import { useStore } from "./hooks/useStore";
import { css } from "@emotion/react";
import { colors } from "./assets/colors";

export default function HomePage() {
  const [ifsc, setIfsc] = useState("");
  const { state, dispatch } = useStore();
  const onInputChange = (e) => {
    e.preventDefault();
    setIfsc(e.target.value);
  };
  const requestData = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
      });
      let responseData = await response.json();
      if (response.status === 200) {
        dispatch({ type: "REQUEST_SUCCESSFUL", payload: responseData });
      }
      if (response.status === 404) {
        dispatch({
          type: "REQUEST_FAILED",
          payload: `Oops! An error occured. Please check the code and try again.`,
        });
      }
    } catch (err) {
      dispatch({
        type: "REQUEST_FAILED",
        payload: `Oops! An error occured. Please check the code and try again.`,
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const ifscCode = ifsc.toUpperCase();
    dispatch({ type: "RESET_STORE" });
    dispatch({ type: "REQUEST_DATA" });
    requestData(`https://ifsc.razorpay.com/${ifscCode}`);
  };
  const { loading, data, error } = state;

  return (
    <div
      css={css`
        background: ${colors.primaryBackground};
        height: 100vh;
        text-align: center;
        padding-top: 15px;
      `}
    >
      <h1
        css={css`
          color: ${colors.primaryColor};
        `}
      >
        {" "}
        Verify Your IFSC Code
      </h1>

      <Input value={ifsc} onSubmit={onSubmit} onChange={onInputChange} />
      {loading && <h2>Loading...</h2>}
      {data && <BankCard />}
      {error && <h2>{error}</h2>}
    </div>
  );
}

import React from "react";
import HomePage from "./HomePage";
import Details from "./Details";
import { Router } from "@reach/router";
import { StoreProvider } from "./hooks/useStore";
import NotFound from "./NotFound";

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <HomePage path="/" />
        <Details path="/details" />
        <NotFound default />
      </Router>
    </StoreProvider>
  );
}

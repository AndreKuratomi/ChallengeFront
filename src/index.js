import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FriendsProvider } from "./Providers/Friends/friends";
import { CandidatesProvider } from "./Providers/Candidates/candidates";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CandidatesProvider>
        <FriendsProvider>
          <App />
        </FriendsProvider>
      </CandidatesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

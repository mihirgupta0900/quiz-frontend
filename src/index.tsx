import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Router";
import UserProvider from "./components/UserContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

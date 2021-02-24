import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import User from "./components/user";
import { useUser } from "./components/UserContext";
import axios from "axios";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const Routes = () => {
  const { user, setUser } = useUser();
  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:3000/auth", { withCredentials: true })
        .then((res) => res.data)
        .then((data) => {
          if (data) {
            setUser(data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user, setUser]);
  return (
    <Layout>
      <Router>
        <Switch>
          <Route component={App} path="/" exact />
          <Route component={Login} path="/login" />
        </Switch>
      </Router>
    </Layout>
  );
};

export default Routes;

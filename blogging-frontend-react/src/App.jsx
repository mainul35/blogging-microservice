// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authorized from "./Authorized";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import axios from "axios";

const environment = {
  authorize_uri: "http://localhost:9000/oauth2/authorize?",
  client_id: "client1",
  redirect_uri: "http://127.0.0.1:5173/authorized",
  scope: "openid",
  response_type: "code",
  response_mode: "form_post",
  code_challenge_method: "S256",
  code_challenge: "D31JLsveEKURXL8x-yvTocCufiwNAScTN5kEsYwDQWI",
};

function App() {
  // const navigate = useNavigate();

  const onLogin = () => {
    const params = {
      client_id: environment.client_id,
      redirect_uri: environment.redirect_uri,
      scope: environment.scope,
      response_type: environment.response_type,
      response_mode: environment.response_mode,
      code_challenge_method: environment.code_challenge_method,
      code_challenge: environment.code_challenge,
    };

    const queryString = Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      )
      .join("&");

    const codeUrl = environment.authorize_uri + queryString;
    debugger;
    window.location.href = codeUrl; // Redirect to authorization server
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onLogin={onLogin} />} />
        <Route path="/authorized" element={<Authorized />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

function HomePage({ onLogin }) {
  return (
    <div>
      <h1>React Login Example</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default App;

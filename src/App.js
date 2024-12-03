import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthPage from "./AuthPage";
import Profile from "./Profile";
import Home from "./Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (user, userEmail) => {
    setIsAuthenticated(true);
    setUsername(user);
    setEmail(userEmail);
  };

  const handleUpdateUsername = (newUsername) => {
    setUsername(newUsername); // update username from profile
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<AuthPage onLogin={handleLogin} />} />

        <Route path="/home" element={<Home username={username} />} />

        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <Profile
                username={username}
                email={email}
                onUpdateUsername={handleUpdateUsername}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

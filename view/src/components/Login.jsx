import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (isRegister && password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  try {
    const url = isRegister
      ? "/api/auth/register"
      : "/api/auth/login";

    const body = isRegister
      ? {
          name,
          email,
          password,
        }
      : {
          email,
          password,
        };

    const res = await axios.post(url, body);

    localStorage.setItem("token", res.data.accessToken);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    onLogin(res.data.user);

    navigate("/");
  } catch (err) {
    setError(err.response?.data?.message || "Authentication failed");
  }
};

  return (
    <div className="loginContainer">
      <div className="authTabs">
  <button
    type="button"
    className={!isRegister ? "active" : ""}
   onClick={() => {
  setIsRegister(false);
  setError("");
  setName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
}}
  >
    Login
  </button>

<button
  type="button"
  className={isRegister ? "active" : ""}
  onClick={() => {
    setIsRegister(true);
    setError("");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }}
>
  Register
</button>
</div>
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <form onSubmit={handleSubmit}>
        {isRegister && (
          <input
            type="text"
            placeholder="Name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete={
            isRegister ? "new-password" : "current-password"
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {isRegister && (
          <input
            type="password"
            placeholder="Confirm password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />
        )}

        <button type="submit">
          {isRegister ? "Register" : "Login"}
        </button>
      </form>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Login;
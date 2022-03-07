import React from "react";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login Form</h2>
      <label>
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {isPending && (
        <button className="btn" disabled>
          Loadin...
        </button>
      )}
      {!isPending && <button className="btn">Login</button>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;

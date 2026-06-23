import React from "react";

function LoginForm({ isLoggedIn, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        required
      />
      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        required
      />
      <br />
      <br />

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;

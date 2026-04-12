function Login({ setIsLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true); // update parent state
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>Username :</label>
        <input type="text" placeholder="Username" required />
        <br />
        <label>Password :</label>
        <input type="password" placeholder="Password" required />
        <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
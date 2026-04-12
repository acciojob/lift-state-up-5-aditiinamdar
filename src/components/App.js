import { useState } from "react";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Parent Component</h2>
     {isLoggedIn ? <h3>You are Logged In!</h3> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </div>
  );
}

export default App;

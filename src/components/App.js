import React,{useState} from "react";
import LoginForm from "./LoginForm";

function App(){
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  const handleLogin = () =>{
    setIsLoggedIn=true;
  };
  return (
    <div>
    <h1>Lift State Up Demo</h1>
  {
    isLoggedIn ? (<h1>You are successfully logged in</h1>) : <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin}/>
  }
    </div>
  )
}

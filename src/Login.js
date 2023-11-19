import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUser = () => {
    signInWithEmailAndPassword(auth, email, password).then((data) => {
      navigate('/upload', {state: {uid:data.user.uid}})
          });
  };
  return (
    <div className="login-back">
      <div className="login-box">
        <h1 className="login-h">Login</h1>
        <label className="l-e">Email:</label>
        <input
          name="email"
          placeholder="Email"
          className="inp-e"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="l-p">Password:</label>
        <input
          name="password"
          placeholder="Password"
          className="inp-p"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button className="inp-b" onClick={signUser}>
          Login
        </button>
        <Link to="/signin">
          <h4 style={{ position: "relative", top: "100px" }}>
            Don't have an account ?
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default Login;

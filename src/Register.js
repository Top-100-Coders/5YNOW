import React, { useState } from "react";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "@firebase/firestore";

function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const RegisterClick = async () => {
    await createUserWithEmailAndPassword(auth, email, pass).then((data) => {
      console.log(data.user.uid);
      const userRef = collection(db, "Users");
      addDoc(userRef, {
        email: email,
        uid: data.user.uid,
        prizes: {},
        points: 0,
        bottles: 0,
      });
    });
    navigate("/login");
  };
  return (
    <div className="regsiter-back">
      <div className="login-box">
        <h1 className="login-h">Register</h1>
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
            setPass(event.target.value);
          }}
        />
        <button className="inp-b" onClick={RegisterClick}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;

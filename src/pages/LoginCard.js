import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginCard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!role) {
      setError("Please select a role");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8088/app/login", {
        email,
        password,
        role
      });

      if (response.status === 200) {
        const key = response.data;
        localStorage.setItem("key", key);
        localStorage.setItem("role", role);


        toast.success(`Login successful. Welcome ${role}`);

        setTimeout(() => {
          navigate("/main");
        }, 1500);
      } else {
        setError("Invalid email/password");
      }
    } catch (error) {
      setError("Error occurred. Please try again.");
    }
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    setError("");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-card">
      <h2 className="Login-text">Login</h2>
      <input
        type="text"
        placeholder="Email ID"
        className="login-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="radio-inputs">
        <label className="radio">
          <input
            type="radio"
            name="role"
            value="admin"
            checked={role === "admin"}
            onChange={handleRoleChange}
          />
          <span className="name">Admin</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="role"
            value="customer"
            checked={role === "customer"}
            onChange={handleRoleChange}
          />
          <span className="name">Customer</span>
        </label>
      </div>
      {error && <p className="error">{error}</p>}
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <button className="login-button" onClick={handleSignup}>
        Signup
      </button>
      <ToastContainer />
    </div>
  );
};

export default LoginCard;
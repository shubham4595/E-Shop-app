import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";
import "../components/styles/Login.css";

export default function Login() {
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const formInputData = (e) => {
    const { name, value } = e.target;
    setloginFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const onFormSubmite = async (e) => {
    //Preventing default behavior . Stoping page from reload
    e.preventDefault();

    let ConvertPasswordToSha256 = CryptoJS.SHA256(
      loginFormData.password
    ).toString(CryptoJS.enc.Hex);
    console.log(ConvertPasswordToSha256);
    // Prepare the payload in loginFormData format
    const formData = new FormData();
    formData.append("username", loginFormData.email);
    formData.append("password", ConvertPasswordToSha256);
    formData.append("grant_type", "password");
    const headers = {
      Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
    };
    try {
      const loginApiUrl = "https://apiv2stg.promilo.com/user/oauth/token";
      const response = await fetch(loginApiUrl, {
        method: "POST",
        headers,
        body: formData,
      });

      if (response.ok) {
        navigate("/productlist");
      } else {
        // Handle error response
        console.error("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className=" wrapper bg-light d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h3 className=" headline mb-3">Login Form</h3>
        <form className="needs-validation" onSubmit={onFormSubmite}>
          <div className="form-group mb-2 was-validated">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              onChange={formInputData}
              value={loginFormData.email}
              name="email"
            />
          </div>
          <div className="form-group mb-2 was-validated">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={formInputData}
              value={loginFormData.password}
              name="password"
            />
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8 characters long, contain letters,capital
              letter,small letter,special char and numbers, and must not contain
              spaces, or emoji.
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

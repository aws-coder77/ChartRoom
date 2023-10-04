import React, { useState } from "react";
import "../index.css";
import Finduser from "../pages/finduser";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(formData.password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    const requestData = {
      name: formData.username,
      email: formData.email,
      password: hashedPassword,
    };
    try {
      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      if (response.status === 201) {
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.log(errorData);
        setErrors(errorData);
      }
    } catch (error) {
      console.log("error : ", error);
    }
    setFormData({ ...formData, password: "", confirmPassword: "" });
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" m-4 p-2">
        <h2 className=" block text-xl text-center my-4">Register</h2>
        <div className=" bg-slate-300 border border-slate-400 rounded-md ">
          <form onSubmit={handleSubmit}>
            <div className="m-2 p-1 ">
              <input
                className=" rounded-md px-2 text-xl"
                type="text"
                name="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-2 p-1">
              <input
                className=" rounded-md px-2 text-xl"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <span className="error flex">{errors.email}</span>
              )}
            </div>
            <div className="m-2 p-1">
              <input
                className=" rounded-md px-2 text-xl"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-2 p-1">
              <input
                className=" rounded-md px-2 text-xl"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <span className="error flex">{errors.confirmPassword}</span>
              )}
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className=" border border-blue-500 text-blue-500 mx-3 px-1 rounded-md mb-3"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

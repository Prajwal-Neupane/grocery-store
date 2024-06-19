import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        data
      );
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        // console.log(response.data.token);
        toast.success("User logged in");
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="items-center flex flex-col mt-9">
      <h1 className="text-5xl font-bold text-white">Login</h1>
      <form
        className="w-full mt-9 flex items-center flex-col "
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
          className="p-5 w-[50%] bg-transparent border-b-2 outline-none text-white text-xl font-semibold"
          autoComplete="off"
          required
        />{" "}
        <br /> <br /> <br />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="p-5 w-[50%] bg-transparent border-b-2 outline-none text-white text-xl"
          required
        />{" "}
        <br />
        <p className="mt-5 text-xl text-white">
          Don't have an account?{" "}
          <Link to={"/register"} className="text-[#FF0000] font-semibold">
            Register
          </Link>
        </p>
        <button className="px-4 py-4 w-[50%] mt-5 text-xl text-white bg-[#059212] hover:bg-[#06D001] transition-all duration-500 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

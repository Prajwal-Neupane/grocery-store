import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
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
        "http://localhost:3001/api/user/register",
        data
      );
      if (response.status === 201) {
        toast.success("User registered");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error.response.data.message);
    }
  };
  return (
    <div className="items-center flex flex-col mt-9">
      <h1 className="text-5xl font-bold text-white">Register</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-9 flex items-center flex-col"
      >
        <input
          onChange={handleChange}
          type="text"
          name="firstName"
          placeholder="First Name"
          className="p-5 w-[50%] bg-transparent border-b-2 outline-none text-white text-xl font-semibold"
          autoComplete="off"
          required
        />{" "}
        <br /> <br /> <br />
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="p-5 w-[50%] bg-transparent border-b-2 outline-none text-white text-xl font-semibold"
          autoComplete="off"
          required
        />{" "}
        <br /> <br /> <br />
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
          className="p-5 w-[50%] bg-transparent border-b-2 outline-none text-white text-xl font-semibold"
          required
        />{" "}
        <br />
        <p className="mt-5 text-xl text-white">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#FF0000] font-semibold">
            Login
          </Link>
        </p>
        <button className="px-4 py-4 mt-5 w-[50%] text-xl text-white bg-[#059212] hover:bg-[#06D001] rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

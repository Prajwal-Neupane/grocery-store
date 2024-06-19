import React, { useEffect, useRef, useState } from "react";
import { IoStorefront } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();

  const popUpRef = useRef(null);
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setPopUp(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    if (!popUp) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [popUp]);
  const handleLogout = () => {
    localStorage.clear("token");
    toast.success("Logout Success");
    navigate("/login");
  };

  return (
    <div className="bg-transparent text-white px-5 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <IoStorefront size={40} className="text-white" />
        <h1 className="text-3xl font-bold">G-Store</h1>
      </div>

      <div className="relative w-1/2">
        <input
          className="w-full bg-white bg-opacity-20 border border-transparent rounded-full py-2 px-4 text-white placeholder-white focus:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white"
          type="text"
          placeholder="Search for products"
        />
      </div>

      <div className="flex items-center gap-8">
        <div className="relative">
          <Link to={"/cart"}>
            <MdLocalGroceryStore size={30} className="text-white" />
          </Link>
          {cart.length > 0 && (
            <span className="absolute top-0 -right-3 bg-red-600 text-white text-xs rounded-full px-2 py-1">
              {cart.length}
            </span>
          )}
        </div>

        <div className="relative">
          <FaUserAlt
            onClick={() => setPopUp(!popUp)}
            size={30}
            className="cursor-pointer hover:text-gray-200 transition-colors duration-300"
          />
          {popUp && (
            <div
              ef={popUpRef}
              className="absolute z-30 flex flex-col px-8 py-4 text-center transition-all duration-300 rounded-md shadow-2xl bg-slate-500 right-5 top-12 "
            >
              <Link
                className="text-2xl font-semibold hover:underline"
                to={"/profile"}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-2 py-2 mt-4 text-xl  transition-all duration-300 rounded-md bg-red-300  hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

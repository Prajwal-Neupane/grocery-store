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
    <div className=" bg-transparent  px-5 py-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <IoStorefront size={50} />
        <h1 className="text-4xl text-[#FC4100]">G-Store</h1>
      </div>

      <div className="w-[40%]">
        <input
          className="w-full bg-transparent border-b-2 border-white px-2 py-4 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center gap-11">
        <div className="flex gap-2">
          <MdLocalGroceryStore size={40} />
          <h1 className="bg-red-700 rounded-full px-2 py-2">{cart}</h1>
        </div>

        <div className="flex items-center gap-4 ">
          <FaUserAlt
            onClick={() => setPopUp(!popUp)}
            size={30}
            className="px-1 border-2 border-gray-400 rounded-full hover:cursor-pointer"
          />
          {popUp && (
            <div
              ef={popUpRef}
              className="absolute z-30 flex flex-col px-8 py-4 text-center transition-all duration-300 rounded-md shadow-2xl bg-slate-500 right-5 top-24 "
            >
              <Link
                className="text-2xl font-semibold hover:underline"
                to={"/profile"}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-4 mt-4 text-xl  transition-all duration-300 rounded-md bg-red-300  hover:bg-red-500"
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

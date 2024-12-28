import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState(null)
  useEffect(() => {
    setCurrentSection(location.pathname)
  }, [location.pathname])
  
  const navbarStyles = {
    backgroundColor :  currentSection === '/' ? '#9538E2' : '#fff',
    color  : currentSection === '/' ? '#fff' : '#000',
  }
  const links = (
    <>
      <li>
      <NavLink
          to={"/"}
          className={({ isActive }) =>
             isActive ? "underline font-medium" : "no-underline font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
      <NavLink
          to={"/statistics"}
          className={({ isActive }) =>
             isActive ? "underline font-medium" : "no-underline font-semibold"
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/dashboard"
          className={({ isActive }) =>
             isActive ? "underline font-medium" : "no-underline font-semibold"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar " style={navbarStyles}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <h1 className="font-bold text-xl">Gadget Heaven</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-12">{links}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        <span className="p-[10px] cursor-pointer bg-white rounded-full text-xl border border-violet-300">
          <Link to={"/dashboard"}>
            <IoCartOutline className="text-black " />
          </Link>
        </span>
        <span className="p-[10px] cursor-pointer bg-white rounded-full text-xl border border-violet-300">
          <Link to={"/dashboard/wishlist"}>
            <FaRegHeart className="text-black border-r-violet-300"/>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [singInUser, setSingInUser] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({
    email: "",
    photoURL: "https://i.ibb.co/ZTFfkFc/user.png",
  });
 

  useEffect(() => {
    if (user) {
      setLoggedInUserInfo({
        email: user.email || "",
        photoURL: user.photoURL || "https://i.ibb.co/ZTFfkFc/user.png",
      });
    }
  }, [user]);
  const handleSignout = () => {
    logOut()
    .then()
    .catch();
  };
  const navLinks = 
    <>
    
    <li><NavLink to="/">Home</NavLink></li>
    


    {user ? (
  <>

    <li><NavLink to="/addproduct">Add Product</NavLink></li>
   
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/mycart">My Cart</NavLink></li>
  </>
) : (
  <>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
  </>
)}



    
    </>
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navLinks}
        </ul>
      </div>
    

    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {navLinks}
      </ul>
    </div>
    
    <div className=" navbar-end gap-3">
    {user && (
      <div className="flex  pr-4 gap-4 items-center">
        <div><p>{loggedInUserInfo.email}</p></div>
        <img className="rounded-full w-10" src={loggedInUserInfo.photoURL} alt="User" />
      </div>
    )}
    {
      user ?  <button onClick={handleSignout} className="btn btn-primary bg-red-600">Logout
      </button> :
      <Link to="/login">
      <button className="btn btn-primary bg-orange-500">Login</button>
      </Link>
    }
    </div>
  </div>
  );
};

export default Navbar;

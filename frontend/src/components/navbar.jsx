import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Navbar() {
  
  const navigate = useNavigate();
  const [login, setLogin] = useState("hidden");
  const [logout, setLogout] = useState("hidden");
  const [token, setToken] = useState(Cookies.get("storagecookies"));
  const url = window.location.pathname;

  useEffect(() => {
    if (token == null || token === undefined) {
      setLogin("");
      setLogout("hidden");
    } else {
      setLogout("");
      setLogin("hidden");
    }
  }, [token]);

  function logoutHandle() {
    Cookies.remove("storagecookies");
    setToken(null);
    if (url == "/finduser") {
      navigate("/login");
    }
  }

  return (
    <>
      <div className="bg-gray-800 flex text-white h-[3.5rem] items-center ">
        <h1 className="text-lg mx-5 ">Home page</h1>

        <div className=" flex ml-auto mx-2">
          <Link to="login" className={login}>
            <div className=" mx-1 border rounded px-1 border-blue-400">
              login in
            </div>
          </Link>
          <Link to="signup" className={login}>
            <div className=" mx-1 border rounded px-1 border-blue-400">
              sign in
            </div>
          </Link>
          <Link className={logout} onClick={logoutHandle}>
            <div className=" mx-1 border border-blue-400 rounded px-1">
              logout
            </div>
          </Link>
          <div className=" profile h-7 w-7 flex items-center justify-center rounded-full bg-indigo-600 text-white">
            <span className="text-xl">A</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

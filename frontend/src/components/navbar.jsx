import React from "react";
import "../index.css";
function Navbar() {
  return (
    <>
      <div className="bg-gray-800 flex text-white h-[3.5rem] items-center ">
        <h1 className="text-lg mx-5 ">Home page</h1>

        <div className=" flex ml-auto mx-2">
          <div className=" mx-1 border rounded px-1 border-blue-400">
            login in
          </div>
          <div className=" mx-1 border rounded px-1 border-blue-400">
            sign in
          </div>
          <div className="hidden  mx-1 border border-blue-400 rounded px-1">
            logout
          </div>
          <div className=" profile h-7 w-7 flex items-center justify-center rounded-full bg-indigo-600 text-white">
            <span className="text-xl">A</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

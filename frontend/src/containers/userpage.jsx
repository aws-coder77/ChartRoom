import React from "react";
import "../index.css";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

function handleUserProfile() {
  const token = Cookies.get("storagecookies");
  const decodedToken = jwt_decode(token);
  console.log(decodedToken._id);

}

function Userpage() {
  return (
    <div className="flex">
      <div className=" w-1/5">
        <div
          className="m-2 border border-slate-500 rounded-lg bg-slate-100 "
          onClick={handleUserProfile}
        >
          <h3 className="p-1 mx-3">Myself</h3>
        </div>
      </div>

      <div className="w-4/5 text-lg">
        <div>hi</div>
      </div>
    </div>
  );
}

export default Userpage;

import React from "react";
import "../index.css";

function Userpage() {
  return (
    <div className="flex">
      <div className=" w-1/5">
        <div className="m-2 border border-slate-500 rounded-lg bg-slate-100">
          <h3 className="p-1">Name</h3>
        </div>
        <div className="m-2 border border-slate-500 rounded-lg bg-slate-100">
          <h3 className="p-1">Name</h3>
        </div>
      </div>

      <div className="w-4/5 text-lg">hello</div>
    </div>
  );
}

export default Userpage;

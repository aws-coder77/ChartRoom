import React from "react";
import { Link } from "react-router-dom";
function Maincontent() {
  return (
    <>
      <div className=" text-center text-xl">
        here you can find new friend for spoil
      </div>

      <div className="flex justify-center items-center my-5">
        <div className="bg-slate-200 rounded-lg shadow-lg p-4 ">
          <p className="text-gray-800 w-80">
            click on button to find the user you want to chart
            <button className="border rounded-md border-slate-500 mx-2 px-2 text-blue-400">
              <Link to="finduser"> click</Link>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Maincontent;

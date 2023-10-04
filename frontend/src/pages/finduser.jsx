import React, { useHistory, useState } from "react";
import Navbar from "../components/navbar";
import Userpage from "../containers/userpage";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Finduser() {
  return (
    <>
      <Navbar />
      <Userpage />
    </>
  );
}

export default Finduser;

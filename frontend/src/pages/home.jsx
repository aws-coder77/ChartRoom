import React from "react";
import "../index.css";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer";
import Maincontent from "../components/maincontent";

function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default Home;

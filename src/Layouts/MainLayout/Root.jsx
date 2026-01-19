import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Footer from "../../Components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="shrink-0">
        {" "}
        <Navbar />{" "}
      </header>
      <main className="flex-grow">
        {" "}
        <Outlet />{" "}
      </main>
      <footer className="shrink-0">
        {" "}
        <Footer />{" "}
      </footer>
    </div>
  );
};

export default Root;

import React from 'react';
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container d-flex justify-content-center align-items-center">
        <a className="navbar-brand" href="#">
          <img src={logo} width="270" height="100" alt="Logo" className="img-fluid" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

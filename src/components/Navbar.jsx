import React from 'react';
import logo from "./logo.png";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container d-flex justify-content-center align-items-center">
          <a className="navbar-brand" href="#">
            <img src={logo} width="270" height="100" className='' />
          </a>
        </div>
      </nav>


    );
}

export default Navbar;
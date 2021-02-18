import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
// import useSticky from "../hooks/useSticky.js";

const Navbar = ({ sticky }) => {
  return (
    <div>
      <nav className={sticky ? "navbar navbar-sticky " : "navbar"}>
        {/* <div className="nav-position">
          <div className="res-bar">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </div> */}

        <div className="k-logo">
          <img className="logo top-imga" src="./images/koaci_logo.png" alt="" />
        </div>

        <div className="nav-img">
          <img
            className="logo-navbar nav--logo"
            src="./images/koaci_logo.png"
            alt=""
          />
        </div>
        <ul>
          {MenuItems.map((items, index) => {
            return (
              <li className="list">
                <a className={items.cName} href={items.url}>
                  {items.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;

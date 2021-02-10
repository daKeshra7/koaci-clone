import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import Main from "../common/mainpage";
import "./Navbar.css";

window.onscroll = function () {
  myFunction();
  // };
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
};

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Main />
        <nav className="Navbaritems navbar sticky" id="navbar">
          <img className="logo" src="./images/koaci_logo.png" alt="" />

          <ul>
            {MenuItems.map((items, index) => {
              return (
                <li>
                  <a className={items.cName} href={items.url}>
                    {items.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;

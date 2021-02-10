import React, { Component } from "react";
import "./mainpage.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="img-flex">
          <div className="img-horizontal">
            <img
              className="top-img"
              src="./images/icon_video.png"
              alt="video"
            />
            <a className="img-a" href="#">
              Video Koaci
            </a>
            <img
              className="top-img img-a"
              src="./images/icon_game.png"
              alt="video"
            />
            <a className="img-a" href="#">
              Jeux Koaci
            </a>
            <div className="account-anc">
              <a className="create-account" href="#">
                Créer votre compte
              </a>

              <a className="create-account connectr" href="#">
                <img
                  className="user_icon"
                  src="images/user_icon.png"
                  alt="user_icon"
                />
                Se Connecter
              </a>
            </div>
          </div>
          <hr />
        </div>
        <a className="img-a" href="#">
          <img
            className="logo-koaci"
            src="./images/koaci_logo.png"
            alt="Koaci_logo"
          />
        </a>
      </div>
    );
  }
}

export default Main;

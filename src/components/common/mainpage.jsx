import React, { Component } from "react";

// import "./mainpage.css";

// class Main extends Component {
//   state = {};
//   render() {

const Main = ({ element }) => {
  return (
    <div>
      <header className="navbar1" ref={element}>
        <div className="img-flex">
          <img
            className="img-icon icons"
            src="./images/icon_video.png"
            alt="video"
          />
          <a className="text-video text-link" href="#">
            Video Koaci
          </a>

          <img
            className="img-game icons"
            src="./images/icon_game.png"
            alt="video"
          />
          <a className="text-jeux text-link" href="#">
            Jeux Koaci
          </a>

          <div className="account-anc">
            <a className="text-link2" href="#">
              Créer votre compte
            </a>

            <div className="user-text">
              <img
                className="user-icon "
                src="images/user_icon.png"
                alt="user_icon"
              />
              <a className="text-link2  connectr-button" href="#">
                Se Connecter
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Main;

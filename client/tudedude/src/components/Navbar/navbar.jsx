import React from "react";
import Logo from "../images/logo.png";
import "./navbar.css";
import User from "../images/user.png";
const navbar = () => {
  return (
    <div className="main">
      <div className="l-nav">
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="r-nav">
        <ul className="nav-list">
          <li className="hide">My Assignment</li>
          <li className="hide">Chat with Mentor</li>
          <li className="prof">
            <img
              src={User}
              alt=""
              width={"32px"}
              height={"32px"}
              style={{ position: "relative", top: "7px" }}
            />{" "}
            ProfileName
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;

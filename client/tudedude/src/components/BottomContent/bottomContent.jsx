import React from "react";
import "./bottomContent.css";
import Multiple from "../images/multipleUser.png";
import Rupee from "../images/rupee.png";
import Wallet from "../images/wallet.png";
import Discount from "../images/disc.png";
import Sell from "../images/sell.png";
const bottomContent = () => {
  return (
    <div className="main-bottomContent">
      <h2 style={{ position: "relative", left: "-38rem" }}>
        How does it work ?
      </h2>
      <div className="inner-content">
        <div className="gridType">
          <h5>
            {" "}
            <img src={Multiple} alt="" width={"32px"} height={"32px"} /> Invite
            your friends
          </h5>
          <p>
            Share the link tutedude.com with <br />
            your friends
          </p>
        </div>
        <div className="gridType">
          <h5>
            {" "}
            <img src={Rupee} alt="" width={"32px"} height={"32px"} /> You get
            200 as referal money
          </h5>
          <p>
            On total purchase the friend <br />
            makes, into your wallet
          </p>
        </div>
        <div className="gridType">
          <h5>
            <img src={Wallet} alt="" width={"32px"} height={"32px"} /> Transfer
            money from wallet
          </h5>
          <p>
            When the wallet balance <br />
            reaches 200 or more, you can withdraw it.
          </p>
        </div>
        <div className="gridType">
          <h5>
            <img src={Discount} alt="" width={"32px"} height={"32px"} /> Friend
            purchases any course
          </h5>
          <p>
            Using your REFERAL CODE in the <br />
            payement page.
          </p>
        </div>
        <div className="gridType">
          <h5>
            <img src={Sell} alt="" width={"32px"} height={"32px"} /> Your
            frienfd gets 200 off
          </h5>
          <p>
            On his overall fee on successful <br />
            purchase using your referal code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default bottomContent;

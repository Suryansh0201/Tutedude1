import React from "react";
import "./midContent.css";
const midContent = () => {
  return (
    <div className="main-content">
      <div
        className="top-content"
        style={{ marginBottom: "27px", fontSize: "15px" }}
      >
        <h3>UI/UX {">"} Refer & Earn</h3>
      </div>
      <div
        className="mid-content"
        style={{ borderRadius: "1rem", padding: "15px 0px" }}
      >
        <div
          className="mid-main"
          style={{ marginLeft: "30px", marginTop: "15px" }}
        >
          <div className="l-mid">
            <p className="p-1">Referal Earning</p>
            <h1>₹2500</h1>
          </div>
          <div className="l-mid">
            <p className="p-2">Total Referals</p>
            <h1 className="ref-count"> 7</h1>
          </div>
          <div className="l-mid">
            <p className="p-3">Wallet Balance</p>
            <h1>₹500</h1>
          </div>
        </div>
        <button className="btn">Withdraw Balance</button>
      </div>
      <div className="r-content">
        <h2>Your Referal Code</h2>
        <h1>E D C H 5 4</h1>
      </div>
    </div>
  );
};

export default midContent;

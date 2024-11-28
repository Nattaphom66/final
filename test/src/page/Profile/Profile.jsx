import "./Profile.css";
import React, { useState } from "react";


function Profile() {

  return (
    <>
      <div className="pro-head">
        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <h1>Username</h1>
        <div className="bi bi-box-arrow-right" style={{ fontSize: "1.5rem" , color: "black"}}>&nbsp;</div>
      </div>

      <div className="pro-pic">
        <div></div>
        <div className="bi bi-person-circle" style={{ fontSize: "6rem"}}>
        </div>
        <div>&nbsp;&nbsp;&nbsp;9 Post</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;100 Followers</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;155 Following</div>
      </div>

      <div className="pro-desciption">
      <div style={{ color: '#737373' }}>Desciption</div>
      <div style={{ color: '#737373' }}>Bio</div>
      </div>

      <div className="pro-follow">
      <h3>Following</h3>
      <h3>Message</h3>
      </div>
      
      <div className="pro-stoy">

      </div>

      <div className="pro-bar">

      </div>

      <div className="pro-picing">
      <img src="/pro1.jpg" alt="" />
      <img src="/pro2.jpg" alt="" />
      <img src="/pro3.jpg" alt="" />
      <img src="/pro4.jpg" alt="" />
      <img src="/pro5.jpg" alt="" />
      <img src="/pro6.jpg" alt="" />
      <img src="/pro7.jpg" alt="" />
      <img src="/pro8.jpg" alt="" />
      <img src="/pro9.jpg" alt="" />
      </div>
    </>
  );
}

export default Profile;

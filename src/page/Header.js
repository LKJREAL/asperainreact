// import React, { useEffect, useRef } from "react";
import React from "react";
import video_file from "../img/850.mp4";
import "../css/custom.css";

const Header = () => {
  return (
    <div className="title_bg pc">
      <div className="video_wrap">
        <video id="video_bg" autoPlay={true} loop={true} muted={true}>
          <source
            src={video_file}
            type="video/mp4"
            /*autoPlay={"autoplay"}
            preLoad="auto"
            loop*/
          />
        </video>
        <span className="big_title IBM_font">IBM ASPERA</span>
        <button className="log_out">Log out</button>
      </div>
    </div>
  );
};
export default Header;

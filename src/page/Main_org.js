import React, { useState } from "react";
import "../css/Main.css";
import refreshBlack from "../img/icons/refresh_black.png";
import refreshWhite from "../img/icons/refresh_white.png";
import createFolderBlack from "../img/icons/add_black.png";
import createFolderWhite from "../img/icons/add_white.png";
// import refreshIcon from "../img/icons/refresh.png";
// import refreshIcon from "../img/icons/refresh.png";
// import refreshIcon from "../img/icons/refresh.png";
// import refreshIcon from "../img/icons/refresh.png";

const Main = () => {
  const [isButton1Hover, setIsButton1Hover] = useState(false);
  const [isButton2Hover, setIsButton2Hover] = useState(false);

  return (
    <div
      style={{
        flex: "1",
        background: "#F3F4FB 0% 0% no-repeat padding-box",
        display: "flex",
        flexDirection: "column",
        padding: "50px 60px 50px 60px",
      }}
    >
      <div
        style={{
          height: "100px",
          backgroundColor: "white",
          display: "flex",
          boxShadow: "0px 0px 20px #0000001A",
          borderRadius: "25px",
          alignItems: "center",
        }}
      >
        <div
          className="mybutton"
          onMouseOver={() => setIsButton1Hover(true)}
          onMouseOut={() => setIsButton1Hover(false)}
        >
          <img
            src={isButton1Hover ? refreshWhite : refreshBlack}
            width={"20px"}
            height={"20px"}
            alt="refresh"
          />
          <div className="IBM_font button_font">Refresh</div>
        </div>
        <div
          className="mybutton"
          onMouseOver={() => setIsButton2Hover(true)}
          onMouseOut={() => setIsButton2Hover(false)}
        >
          <img
            src={isButton2Hover ? createFolderWhite : createFolderBlack}
            width={"20px"}
            height={"20px"}
            alt="createFolder"
          />
          <div className="IBM_font button_font">Create Folder</div>
        </div>
        <div className="mybutton">
          <img src={refreshBlack} width={"20px"} height={"20px"} />
          <div className="IBM_font button_font">Download</div>
        </div>
        <div className="mybutton">
          <img src={refreshBlack} width={"20px"} height={"20px"} />
          <div className="IBM_font button_font">Upload</div>
        </div>
        <div className="mybutton">
          <img src={refreshBlack} width={"20px"} height={"20px"} />
          <div className="IBM_font button_font">Delete</div>
        </div>
        <div className="mybutton">
          <img src={refreshBlack} width={"20px"} height={"20px"} />
          <div className="IBM_font button_font">전송창 보기</div>
        </div>
        <div className="mybutton">
          <img src={refreshBlack} width={"20px"} height={"20px"} />
          <div className="IBM_font button_font">Rename</div>
        </div>
      </div>
      <div
        style={{ flex: "1", marginTop: "17px", backgroundColor: "white" }}
      ></div>
    </div>
  );
};
export default Main;

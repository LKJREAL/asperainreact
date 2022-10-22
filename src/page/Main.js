import React, { useState, useEffect } from "react";
import "../css/Main.css";
import "../css/custom.css";
import refreshBlack from "../img/icons/refresh_black.png";
import refreshWhite from "../img/icons/refresh_white.png";
import createFolderBlack from "../img/icons/create_black.png";
import createFolderWhite from "../img/icons/create_white.png";
import downloadBlack from "../img/icons/download_black.png";
import downloadWhite from "../img/icons/download_white.png";
import uploadBlack from "../img/icons/upload_black.png";
import uploadWhite from "../img/icons/upload_white.png";
import deleteBlack from "../img/icons/delete_black.png";
import deleteWhite from "../img/icons/delete_white.png";
import renameBlack from "../img/icons/rename_black.png";
import renameWhite from "../img/icons/rename_white.png";
import windowBlack from "../img/icons/window_black.png";
import windowWhite from "../img/icons/window_white.png";
import axios from "axios";
//import * as https from "https";

const Main = () => {
  const [isButton1Hover, setIsButton1Hover] = useState(false);
  const [isButton2Hover, setIsButton2Hover] = useState(false);
  const [isButton3Hover, setIsButton3Hover] = useState(false);
  const [isButton4Hover, setIsButton4Hover] = useState(false);
  const [isButton5Hover, setIsButton5Hover] = useState(false);
  const [isButton6Hover, setIsButton6Hover] = useState(false);
  const [isButton7Hover, setIsButton7Hover] = useState(false);

  useEffect(() => {
    browse();
  }, []);

  const browse = function () {
    // console.log("started");
    // At instance level
    // const agent = new https.Agent({
    //   rejectUnauthorized: false,
    //   requestCert: false,
    //   agent: false,
    // });

    axios
      .post(
        "https://115.71.42.22:9092/files/browse",
        {
          path: "/",
        },
        {
          auth: {
            username: "admin",
            password: "rootroot",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // --------------- Display Design ------------------ //

  return (
    <div
      style={{
        flex: "1",
        background: "#F3F4FB 0% 0% no-repeat padding-box",
        display: "flex",
        flexDirection: "column",
        padding: "30px 60px 30px 60px",
      }}
    >
      <div
        style={{
          height: "auto",
          backgroundColor: "white",
          boxShadow: "0px 0px 20px #0000001A",
          borderRadius: "25px",
          padding: " 10px 20px",
        }}
      >
        {/*min Icon scroll function start */}
        <div className="mybuttonWrap">
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
            <div className="IBM_font button_font main_btn">Refresh</div>
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
              alt="create"
            />
            <div className="IBM_font button_font main_btn">Create Folder</div>
          </div>

          <div
            className="mybutton"
            onMouseOver={() => setIsButton3Hover(true)}
            onMouseOut={() => setIsButton3Hover(false)}
          >
            <img
              src={isButton3Hover ? downloadWhite : downloadBlack}
              width={"20px"}
              height={"20px"}
              alt="download"
            />
            <div className="IBM_font button_font main_btn">Download</div>
          </div>

          <div
            className="mybutton"
            onMouseOver={() => setIsButton4Hover(true)}
            onMouseOut={() => setIsButton4Hover(false)}
          >
            <img
              src={isButton4Hover ? uploadWhite : uploadBlack}
              width={"20px"}
              height={"20px"}
              alt="upload"
            />
            <div className="IBM_font button_font main_btn">Upload</div>
          </div>

          <div
            className="mybutton mybuttonRed"
            onMouseOver={() => setIsButton5Hover(true)}
            onMouseOut={() => setIsButton5Hover(false)}
          >
            <img
              src={isButton5Hover ? deleteWhite : deleteBlack}
              width={"20px"}
              height={"20px"}
              alt="delete"
            />
            <div className="IBM_font button_font main_btn">Delete</div>
          </div>

          <div
            className="mybutton"
            onMouseOver={() => setIsButton6Hover(true)}
            onMouseOut={() => setIsButton6Hover(false)}
          >
            <img
              src={isButton6Hover ? renameWhite : renameBlack}
              width={"20px"}
              height={"20px"}
              alt="rename"
            />
            <div className="IBM_font button_font main_btn">Rename</div>
          </div>

          <div
            className="mybutton mybuttonYellow"
            onMouseOver={() => setIsButton7Hover(true)}
            onMouseOut={() => setIsButton7Hover(false)}
          >
            <img
              src={isButton7Hover ? windowWhite : windowBlack}
              width={"20px"}
              height={"20px"}
              alt="window"
            />
            <div className="IBM_font button_font main_btn">
              전송창 보기/닫기
            </div>
          </div>
        </div>
        {/*min Icon scroll function End */}
      </div>

      <div
        style={{
          flex: "1",
          marginTop: "17px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "10px 20px",
          borderRadius: "25px",
        }}
      >
        <div
          style={{ height: "auto", backgroundColor: "white", display: "flex" }}
        >
          <div
            style={{
              width: "170px",
              // border: "1px solid black",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <img src={require("../img/icons/filelist.png")} />
             */}
            <i className="menuBar"></i>
            <span className="tableTitle">File List</span>
          </div>
          <div
            style={{
              flex: 1, //border: "1px solid black"//
            }}
          ></div>
          <div className="sch_bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.033"
              height="31.714"
              viewBox="0 0 29.033 31.714"
              className="filterIcon"
            >
              <path
                id="패스_34"
                data-name="패스 34"
                d="M1280.009,577.06h27.033l-10.054,13.4v16.309l-7.484-7.484v-9.5Z"
                transform="translate(-1279.009 -576.06)"
                fill="none"
                stroke="#d0cee2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            {/* search input */}
            <input />

            {/* search button */}
            <div className="arrowBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.203"
                height="14.857"
                viewBox="0 0 28.203 14.857"
              >
                <g
                  id="그룹_65"
                  data-name="그룹 65"
                  transform="translate(-1616.736 -585.069)"
                >
                  <path
                    id="패스_35"
                    data-name="패스 35"
                    d="M1638.138,597.818l4.683-5.9h-24.585"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <line
                    id="선_12"
                    data-name="선 12"
                    x2="5.364"
                    y2="4.731"
                    transform="translate(1637.458 587.186)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div
            style={{
              width: "114px",
              // border: "1px solid black",
              lineHeight: "58px",
              textAlign: "center",
              fontWeight: "600",
            }}
            className="IBM_font button_font"
          >
            Total 18개
          </div>
        </div>
        <div style={{ marginTop: "10px", flex: 1 }}>
          {/*min table scroll function start */}
          <div className="mytableWrap">
            <table className="mytable">
              <thead
                style={{
                  backgroundColor: "#6969E8",
                  color: "white",
                }}
              >
                <tr>
                  <th
                    style={{
                      borderTopLeftRadius: "10px 10px",
                      cursor: "pointer",
                    }}
                  >
                    <input type="checkbox" className="mychk"></input>
                  </th>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Last Modified</th>
                  <th style={{ borderTopRightRadius: "10px 10px" }}>
                    Download
                  </th>
                </tr>
              </thead>
              <tbody style={{}}>
                <tr>
                  <td>
                    <input type="checkbox" className="mychk"></input>
                  </td>
                  <td>$100</td>
                  <td>January</td>
                  <td>$100</td>
                  <td>January</td>
                  <td>$100</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="mychk"></input>
                  </td>
                  <td>$100</td>
                  <td>January</td>
                  <td>$100</td>
                  <td>January</td>
                  <td>$100</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*min table scroll function end */}
          <div className="paging">
            <ul>
              <li>
                <i className="arrow arrow_prev"></i>
              </li>
              <li className="active">
                <span>1</span>
              </li>
              <li>
                <span>2</span>
              </li>
              <li>
                <span>3</span>
              </li>
              <li>
                <i className="arrow arrow_next"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

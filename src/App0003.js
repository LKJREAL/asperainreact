import "./App.css";
import { Connect, ConnectInstaller } from "@ibm-aspera/connect-sdk-js";

let connect;
let connectInstaller;
let options;

let statusEventListener;

function asperaReady() {
  connect = new Connect();
  // const options = {};
  // options = { sdkLocation: "//192.168.0.12:3000/abc" };
  options = { sdkLocation: "//192.168.0.12:1234/connect" };
  connectInstaller = new ConnectInstaller(options);

  statusEventListener = function (eventType, data) {
    if (
      eventType === Connect.EVENT.STATUS &&
      data === Connect.STATUS.INITIALIZING
    ) {
      connectInstaller.showLaunching();
    } else if (
      eventType === Connect.EVENT.STATUS &&
      data === Connect.STATUS.EXTENSION_INSTALL
    ) {
      connectInstaller.showExtensionInstall();
    } else if (
      eventType === Connect.EVENT.STATUS &&
      data === Connect.STATUS.FAILED
    ) {
      connectInstaller.showDownload();
    } else if (
      eventType === Connect.EVENT.STATUS &&
      data === Connect.STATUS.OUTDATED
    ) {
      connectInstaller.showUpdate();
    } else if (
      eventType === Connect.EVENT.STATUS &&
      data === Connect.STATUS.RUNNING
    ) {
      connectInstaller.connected();
      alert("Aspera Transfer Mudule is READY!!!");
    }
  };

  function transferEventListener(type, allTransfersInfo) {
    if (type === Connect.EVENT.TRANSFER) {
      console.log("Received transfer event!");
    }
  }

  connect.addEventListener(Connect.EVENT.STATUS, statusEventListener);
  connect.addEventListener(Connect.EVENT.TRANSFER, transferEventListener);

  connect.initSession();
  // testAspera(connect);  parameter 로 넘기는 방식
}

// function testAspera(connect) { parameter 로 넘기는 방식
function TransferAspera() {
  // if (
  //   !connect ||
  //   typeof connect.getStatus !== "function" ||
  //   connect.getStatus() !== Connect.STATUS.RUNNING
  // ) {
  //   alert("Aspera in NOT Ready! Click [Aspera Ready] First!!! ");
  //   return false;
  // }

  if (!isAsperaInitialized()) {
    alert("Aspera in NOT Ready! Click [Aspera Ready] First!!! ");
    return false;
  }
  // 이하 정상적인 코드 수행

  // if (!isInitialized) {
  //   alert("Aspera in NOT Ready! Click [Aspera Ready] First!!! ");
  //   return false;
  // }

  const transferSpec = {
    paths: [
      {
        source: "2.txt",
      },
    ],
    remote_host: "192.168.0.12",
    remote_user: "aspera02",
    remote_password: "aspera02",
    direction: "receive",
  };

  var connectSpec = {
    allow_dialogs: true,
    return_paths: false,
    return_files: true,
    use_absolute_destination_path: false,
  };

  var transferCallback = {
    success: function (result) {
      console.log("Start Aspera Transfer");
    },
    error: function (result) {
      console.log("Start Failed by Console message");
    },
  };

  /* if (Connect.STATUS.RUNNING) {
    //alert("You can Transfer Files because Aspera is Ready");
    connect.startTransferPromise(transferSpec, connectSpec, transferCallback);
  } else if (alert("Aspera in NOT Ready! Click [Aspera Ready] First!!! "));
  */

  connect.startTransferPromise(transferSpec, connectSpec, transferCallback);
}

function isAsperaInitialized() {
  if (
    !connect ||
    typeof connect.getStatus !== "function" ||
    connect.getStatus() !== Connect.STATUS.RUNNING
  ) {
    return false;
  } else {
    return true;
  }
}

function App() {
  return (
    <div className="App">
      <input type="Button" value={"Aspera Ready"} onClick={asperaReady} />
      <input type="button" value={"Transfer Files"} onClick={TransferAspera} />
    </div>
  );
}

export default App;

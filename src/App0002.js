import "./App.css";
import { Connect, ConnectInstaller } from "@ibm-aspera/connect-sdk-js";

let connect;
let connectInstaller;
let options;

let statusEventListener;

function asperaReady() {
  connect = new Connect();
  // const options = {};
  options = { sdkLocation: "//192.168.0.12:3000/abc" };
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
function testAspera() {
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

  connect.startTransferPromise(transferSpec, connectSpec, transferCallback);
}

function App() {
  return (
    <div className="App">
      <input type="button" value={"Init"} onClick={asperaReady} />
      <input type="button" value={"Transfer Test"} onClick={testAspera} />
    </div>
  );
}

export default App;

import './App.css';
// import { Connect, Logger } from '@ibm-aspera/connect-sdk-js';
import { Connect, ConnectInstaller } from '@ibm-aspera/connect-sdk-js';


  

  // Logger.setLevel(2);
  // const asperaweb2 = new window.aw4.Connect();
  const connect = new Connect();
  const connectInstaller = new ConnectInstaller();



  
  function statusEventListener(eventType, data) {
    if (eventType === Connect.EVENT.STATUS && data === Connect.STATUS.INITIALIZING) {
       connectInstaller.showLaunching();
    } else if (eventType === Connect.EVENT.STATUS && data === Connect.STATUS.FAILED) {
       connectInstaller.showDownload();
    } else if (eventType === Connect.EVENT.STATUS && data === Connect.STATUS.OUTDATED) {
       connectInstaller.showUpdate();
    } else if (eventType === Connect.EVENT.STATUS && data === Connect.STATUS.RUNNING) {
       connectInstaller.connected();
    }
 };



// create a transfer listener
function transferEventListener(type, allTransfersInfo) {
  if (type === Connect.EVENT.TRANSFER) {
    console.log('Received transfer event!')
    // handleTransferEvent(allTransfersInfo) // do something with the transfers data
  }
};


  // asperaWeb.addEventListener(Connect.EVENT.STATUS, statusEventListener);
  // asperaWeb.addEventListener(Connect.EVENT.TRANSFER, transferEventListener);
  connect.addEventListener(Connect.EVENT.STATUS, statusEventListener );
  connect.addEventListener(Connect.EVENT.TRANSFER, transferEventListener);

  connect.initSession();




  function testAspera() {

  const transferSpec = {
  paths: [
  {
  source: 'aspera-test-dir-large/100MB'
  }
  ],
  remote_host: 'demo.asperasoft.com',
  remote_user: 'aspera',
  remote_password: 'demoaspera',
  direction: 'receive'
  };

  var connectSpec = {
    "allow_dialogs" : true,
    "return_paths" : false,
    "return_files" : true,
    "use_absolute_destination_path" : false
  };

  var transferCallback = {
    success: function(result) {
      console.log('Start Aspera Transfer');
    },
    error: function(result) {
      // var errorCode = result.error.code;
      // var internal_message = result.error.internal_message;
      // var user_message = result.error.user_message;
      console.log('Start Failed by Console message');
      // console.log('Transfer Start Error(' + errorCode + ')' + ' ' + internal_message + ', ' + user_message);
    }
  };

  
  // connect.startTransfer(transferSpec, connectSpec, transferCallback);
  connect.startTransferPromise(transferSpec, connectSpec, transferCallback);

}


function App() {

return (
<div className="App">

<input type="button" value={'Transfer Test'} onClick={testAspera}/>

</div>
);
}

export default App;


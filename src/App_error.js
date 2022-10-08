import logo from './logo.svg';
import './App.css';
import { AW4 } from '@ibm-aspera/connect-sdk-js';
import { Connect } from '@ibm-aspera/connect-sdk-js';


function testAspera() {
  // var SDK_DIR = "@ibm-aspera/connect-sdk-js/dist/esm";
  // var CONNECT_INSTALLER = "//d3gcli72yxqn2z.cloudfront.net/connect/v4";
  
  const options = {};
  const connect_options = {};

  const asperaWeb = new Connect(options);
  const connectInstaller = new ConnectInstaller(connect_options);

  // // 아스페라 설치이벤트 관련 리스너 함수
      // function statusEventListener(eventType, data) {
      //   if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.INITIALIZING) {
      //     AW4.connectInstaller.showLaunching();
      //   } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.FAILED) {
      //     AW4.connectInstaller.showDownload();
      //   } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.OUTDATED) {
      //     AW4.connectInstaller.showUpdate();
      //   } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.RUNNING) {
      //     AW4.connectInstaller.connected();
      //   }
      // };

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








      function transferEventListener(eventType, data) {
      }

      asperaWeb.addEventListener(Connect.EVENT.STATUS, statusEventListener);
      asperaWeb.addEventListener(Connect.EVENT.TRANSFER, transferEventListener);

      asperaWeb.initSession();

  // try {
    // const transferSpec = {
    //   authentication: 'basic',
    //   paths: [
    //     {
    //       source: '/2.txt'
    //     }
    //   ],
    //   remote_host: '115.71.42.22',
    //   remote_user: 'asperatest',
    //   remote_password: 'rootroot',
    //   direction: 'receive'
    // };
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

    // var connectSpec = {
    //   "allow_dialogs" : true,
    //   "return_paths" : false,
    //   "return_files" : true,
    //   "use_absolute_destination_path" : false
    // };

    // var transferCallback = {
    //   success: function(result) {
    //     console.log('Start Aspera Transfer');
    //   },
    //   error: function(result) {
    //     var errorCode = result.error.code;
    //     var internal_message = result.error.internal_message;
    //     var user_message = result.error.user_message;
    //     console.log('Transfer Start Error(' + errorCode + ')' + ' ' + internal_message + ', ' + user_message);
    //   }
    // };

    // const response = await asperaWeb.startTransferPromise(transferSpec);
    // console.log(`Transfer started: ${response}`);
    asperaWeb.startTransferPromise(transferSpec);
  // } catch(err) {
  //   throw new Error(`Could not start transfer: ${err}`);
  // }
}

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        안녕하세요..!!!!
        <input type="button" value={'test'}  onClick={testAspera}/>
      </header>
    </div>
  );
}

export default App;

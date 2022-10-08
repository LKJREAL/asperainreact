import './App.css';
// import { Connect, ConnectInstaller } from '@ibm-aspera/connect-sdk-js';
import { Connect, ConnectInstaller, Utils, Logger } from '@ibm-aspera/connect-sdk-js';

function testAspera() {
  const connectClient = new Connect();
  connectClient.initSession();

  setTimeout(()=>{
    console.log("3sec======================================================================================");
    transferAsper(connectClient);
  }, 3000);
  
}

function transferAsper(connectClient) {
  try {
    const TransferSpec = {
      paths: [
        {
          source: '2.txt'
        }
      ],
      remote_host: '115.71.42.22',
      remote_user: 'asperatest',
      remote_password: 'rootroot',
      direction: 'receive'
    };
  
    // connectClient.startTransferPromise(TransferSpec);
    // var ConnectSpec = "";
    const response = connectClient.startTransferPromise(TransferSpec);
    console.log(`Transfer started: ${response}`);
  } catch(err) {
    throw new Error(`Could not start transfer: ${err}`);
  }
}

function App() {
 
  return (
    <div className="App">
        <input type="button" value={'test'}  onClick={testAspera}/>
    </div>
  );
 
};

export default App;
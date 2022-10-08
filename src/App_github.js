import './App.css';
import { Connect, ConnectInstaller } from '@ibm-aspera/connect-sdk-js';

  const connect = new Connect();
  const options = { sdkLocation: '//localhost:3000/connectsdk' };
  const connectInstaller = new ConnectInstaller(options);
  connect.initSession();
  connectInstaller.connected();

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
      console.log('Start Failed by Console message');
    }
  };

  connect.startTransferPromise(transferSpec, connectSpec, transferCallback);
}


function App() {

return (
<div className="App">

<input type="button" value={'Transfer   Test'} onClick={testAspera}/>

</div>
);
}

export default App;

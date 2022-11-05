import './App.css';
import {io} from 'socket.io-client';
import { Button } from 'antd';
import 'antd/dist/antd.css';


const socket = io("http://localhost:3010/")

function App() {
  
  return (
    <div>
      hello frontend chatapp
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;


import { Route ,Routes,useNavigate} from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
import { Button, ButtonGroup } from '@chakra-ui/react'
// import dotenv from 'dotenv'
// import path from 'path'
// import os from 'os'
// import crypto from 'crypto'
// dotenv.config()
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/chats" element={<Chatpage></Chatpage>} />
      {/* <Route path="/" element={Homepage} /> */}
      </Routes>
    </div>
  );
}

export default App;

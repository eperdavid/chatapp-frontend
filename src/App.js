import { useState } from "react";
import "./App.css";

import HomePage from "./pages/home/HomePage";
import ChatPage from "./pages/chat/ChatPage";

import io from 'socket.io-client';
const socket = io('https://chatapp-server-ed8n.onrender.com'); 

function App() {

  const login = (username, socketId) => {
    setPage(<ChatPage socket={socket} username={username} socketId={socketId} />)
  }

  const [page, setPage] = useState(<HomePage socket={socket} login={login} />);

  

  return (
    <div className="App">
      {page}
    </div>
  );
}

export default App;

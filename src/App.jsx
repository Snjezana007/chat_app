import {useState, useEffect } from 'react';
import "./App.css";
import { Input, Messages, OnlineMembers } from "./components";
import { randomColor, randomName } from "./RandomUserHelpers/RandomUser";


function App() {

const [messages, setMessages] = useState([]);
const [member, setmember] = useState ({
  username: randomName(),
  color: randomColor(),
});
const [drone, setDrone] = useState(null);
const [room, setRoom]= useState(null);
const [onlineMembers, setOnlineMembers] = useState([]);

useEffect(() => {
  const drone = new window.Scaledrone(ImB5jZWgMgCKsQPL, {data: member,});
drone.on("open", (error) => {
  if (error) {
    return console.error(error);
  }
  member.id = drone.clientId;
  setmember(member);
});
const room = drone.subscribe("observable-room");
room.on("message", (message) => {
  setMessages((prevState)) => [...prevState, message]);

});



  return (
    <div className="App">
      
      <h1>Algebra Chat App</h1>
      <OnlineMembers onlineMembers={onlineMembers} currentMember={member} />
      <Messages messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />     </div>
  );
}

export default App;


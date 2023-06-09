
import React, { useState, useEffect } from 'react';
import "./App.css";
import { Input, Messages, OnlineMembers } from "./components";
import { randomColor, randomName } from "./helpers/RandomUser";

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);
  const [room, setRoom] = useState(null);
  const [onlineMembers, setOnlineMembers] = useState([]);

  useEffect(() => {
    const sId = process.env.REACT_APP_CHANNEL_ID;
    const drone = new window.Scaledrone(sId, {
      data: member,
    });

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const updatedMember = { ...member, id: drone.clientId };
      setMember(updatedMember);
    });

    const room = drone.subscribe("observable-room");
    room.on("message", (message) => {
      setMessages((prevState) => [...prevState, message]);
    });

    room.on("members", (currentMembers) => {
      setOnlineMembers([...currentMembers]);
    });

    room.on("member_join", (member) => {
      setOnlineMembers((prevOnlineMembers) => [...prevOnlineMembers, member]);
    });

    room.on("member_leave", (memberLeft) => {
      setOnlineMembers((prevMembers) =>
        prevMembers.filter((m) => m.id !== memberLeft.id)
      );
    });

    setDrone(drone);
  }, []);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <div className="App">
      <h1>Algebra Chat App</h1>
      <OnlineMembers onlineMembers={onlineMembers} currentMember={member} />
      <Messages messages={messages} currentMember={member} />
      <Input onSendMessage={onSendMessage} />
    </div>
  );
}

export default App;
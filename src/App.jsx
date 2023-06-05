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



}
)

const [messageInput, setMessageInput] = useState('');

const drone = new setDrone('ImB5jZWgMgCKsQPL');


useEffect(() => {
    drone.on('open', error =>{
      if (error) { console.error(error);}
    });
drone.on('message',(message, user) => {
  const newMessage = { author: user.clientData.name, text: message.data};
setMessages(prevMessages => [...prevMessages, newMessage]);
});
}, []);



  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendmessage = () => {
    if (messageInput.trim() !== '') {
      drone.publish({ 
        room: 'chat', 
        message: messageInput.trim(),
      });
      setMessageInput('');
    }
  };


  return (
    <div className="App">
      <div className="ChatWindow">
        {
          messages.map((message, index) => (
            <div key={index} className="Message">
              <span className="Author">{message.author}</span>
              <span className="Text">{message.text}</span>
              </div>
          )
          )
        } 
      </div>

      <div className="InputContainer">
<input type="text"
className="MessageInput" 
value={messageInput}
onChange={handleInputChange}
placeholder="Type your message..."/>

<button className="SendButton" 
onClick={handleSendmessage}> Send 
</button>

      </div>
    </div>
  );

}
export default App;

import React, {useState, useEffect } from 'react';
import Scaledrone from 'scaledrone-react';

function App() {

const [messages, setMessages] = useState([]);
const [messageInput, setMessageInput] = useState('');

const drone = new Scaledrone('ImB5jZWgMgCKsQPL');


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
              <span className="Text">{message.tekst}</span>
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
onClick={handleSandMessage}> Send 
</button>

      </div>
    </div>
  );

}
export default App;

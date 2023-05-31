import React, { useState } from 'react';

function Input(props) {
  const [text, setText] = useState('');

  const onChange =(e) => {
    setText(e.target.value);
  };

  const onSubmit =(e)=> {
    e.preventDefault();
    setText('');
    props.onSendMessage(text);
  };

  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Enter your message"
          autoFocus={true}
        />
        <button disabled={text === ''}>Send</button>
      </form>
    </div>
  );
}

export default Input;
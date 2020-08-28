import React, { useState,useEffect } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel,Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');
  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt('Enter your name'));
  }, [])
  
  

  // console.log(input)
  // console.log(messages)

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className="App">
        <h1>Hello my dear friends</h1>
        <form >
          <FormControl>
            <InputLabel htmlFor="my-input">Enter a message...</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" value={input} onChange={event => setInput(event.target.value)}/>
            <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send</Button>
          </FormControl>
        </form>
        <FlipMove>
          {
            messages.map(({id,message}) => (
            <Message key={id} username={username} message={message}/>
            ))
          }
        </FlipMove>
       
    </div>
  );
}

export default App;

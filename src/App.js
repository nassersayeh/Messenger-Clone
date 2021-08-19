import React , {useEffect, useState} from 'react';
import './App.css';
import { Input} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  const [input, setInput] = useState('');
  const[messages,setMessages]= useState([]);
  const [username,setUsername] = useState('');


  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id , message: doc.data()})))
    });
  },[])


  useEffect(()=>{
    setUsername(prompt('Please enter your name'));

  },[])
  const sendMessage = (event) =>{
    event.preventDefault();


    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // logic for sending the message
    setInput('');
  }

  return (
    <div className="App">
      
      <img src="https://en.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messangerlogo"/>
      <h1>FaceBook Messanger</h1>
      <h2> User {username}</h2>
      <form className="app__form">
        
      <FormControl className="app_formcontrol">
          <Input className="input_css" placeholder="Enter a Message .." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="icon_button" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton >
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

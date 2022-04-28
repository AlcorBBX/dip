import React, { useEffect, useState } from 'react'
import {Box, Button, Container, TextField} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';

const ChatPage = () => {
  return (
    <Container style={{ paddingTop: "100px"}}>
      <Messages/>
      <MessageForm/>
    </Container>
  )
}

const Messages = () => {
  const messages = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div style={{height: '400px', width: '500px', overflowY: 'auto'}}>
      {messages.map((m) => <Message/>) }
    </div>
  )
}


const Message = () => {
  const message = {
    url: 'https://via.placeholder.com/150',
    author: 'Dimych',
    text: 'Hello friends'
    }
    return (
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <img alt='avatar' src={message.url} style={{height: "36px", borderRadius: "50%", marginRight: '10px'}}/> 
        <div>
          <p>{message.author}</p>
          <p>{message.text}</p>
        </div>
    </div>
  )
}


const MessageForm = () => {

  return (
    <div>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Message" variant="standard" />
          <Button>Отправить</Button>
        </Box>
    </div>
  )
}



export default ChatPage

// const ChatPage = () => {
//   return (
//     <div style={{paddingTop: "100px", paddingLeft: "100px"}}><Chat/></div>
//   )
// }

// const Chat = () => {

//   return (
//     <div>
//     <Messages/>
//     <AddMessageForm/>
//     </div>
//   )
// }

// const Messages = () => {
//   const [message, setMessages] = useState([])

//   useEffect(() => {
//     ws.addEventListener('message', (e) => {
//       setMessages(JSON.parse(e.data));
//     })
//   }, [])

//   return (
//     <div style={{height: '400px', overflowY: 'auto'}}>
//       {message.map((m, index) => <Message key={index} message={m}/>)}
//     </div>
//   ) 
// }

// const Message =({message}) => {
  
//   return(
//     <div >
//       <img alt='avatar' src={message.photo} style={{width: '50px', borderRadius: '30px'}}/>
//       <b>{message.userName}</b>
//       <br/>
//       {message.message}
//       <hr/>
//     </div>
//   )
// }


// const AddMessageForm = () => {
//   return (
//     <div>
//       <textarea></textarea>
//       <button>Send</button>
//     </div>
//   )
// }

import React, { useEffect, useState, useContext } from 'react'
import { observer } from "mobx-react-lite";
import {Box, Button, Container, TextField, Input} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import {fetchMessage, createMessage} from '../../http/chatAPI'
import {Context} from '../../index'

const ChatPage = () => {
  const [change, setChange] = useState(false)
  const [message, setMessage] = useState([])

  useEffect(() => {
    setChange(false)
    fetchMessage().then(data => setMessage(data.rows))
}, [change])

  return (
    <Container style={{ paddingTop: "100px"}}>
      <Messages message={message}/>
      <MessageForm setChange={setChange}/>
    </Container>
  )
}

const Messages = ({message}) => {
//   const [change, setChange] = useState(false)
//   const [message, setMessage] = useState([])

//   useEffect(() => {
//     setChange(false)
//     fetchMessage().then(data => setMessage(data.rows))
// }, [change])

  console.log(message)
  return (
    <div style={{height: '400px', width: '500px', overflowY: 'auto' , margin: '0 auto'}}>
      {message.map((m) => <Message m = {m}/>) }
      {message.map((m) => 
          <div key={m.id}>
            {console.log(m.text)}
          </div>)
        }
    </div>
  )
}


const Message = ({m}) => {
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
          <p>{m.text}</p>
        </div>
    </div>
  )
}


const MessageForm = ({setChange}) => {
  // const [changeC, setChangec] = useState(false)
  const {user} = useContext(Context)
  const [text, setText] = useState('')
  const [userId, setUserId] = useState()
  console.log(userId)
  

  const addMessage = () => {
    setUserId(user.user.id)
    console.log(userId)
    const formData = new FormData()
    formData.append("text", text)
    formData.append("userId", userId)
    createMessage(formData).then(data => setChange(true))
}

    // useEffect(() => {
    //   setChangec(false)
    //   fetchMessage().then(data => setMessage(data.rows))
    // }, [change])
  return (
    <div>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' , justifyContent: 'center'}}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          {/* <TextField  id="input-with-sx" label="Message" variant="standard" style={{width: '300px'}}/> */}
          <Input value={text} onChange={e => setText(e.target.value)} id="input-with-sx" placeholder = 'Message' variant="standard" style={{width: '300px'}}/>
          <Button onClick={addMessage}>Отправить</Button>
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

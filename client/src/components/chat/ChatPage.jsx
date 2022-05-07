import React, { useEffect, useState, useContext } from 'react'
import { observer } from "mobx-react-lite";
import {Box, Button, Container, Input} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import {fetchMessage, createMessage} from '../../http/chatAPI'
import {Context} from '../../index'
import { fetchUsers } from '../../http/userAPI';

const ChatPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then(data => setUsers(data.rows))
}, [])
  // console.log(users)
  const [change, setChange] = useState(false)
  const [message, setMessage] = useState([])
  
  useEffect(() => {
    setChange(false)
    fetchMessage().then(data => setMessage(data.rows))
}, [change])

  return (
    <Container style={{ paddingTop: "100px"}}>
      <Messages message={message} users={users}/>
      <MessageForm setChange={setChange}/>
    </Container>
  )
}

const Messages = ({message, users}) => {
  return (
    <div style={{height: '400px', width: '500px', overflowY: 'auto' , margin: '0 auto'}}>
      {message.map((m) => <Message m = {m} users={users}/>) }
    </div>
  )
}


const Message = ({m, users}) => {
  // {users.map((user) => 
  //   <div key={user.id}>
  //   {console.log(user.email)}
  //   </div>
  //   )}
  const message = {
    url: 'https://via.placeholder.com/150',
    author: 'Dimych',
    text: 'Hello friends'
    }
    return (
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <img alt='avatar' src={message.url} style={{height: "36px", borderRadius: "50%", marginRight: '10px'}}/> 
        <div>
          <p key={m.userId}>{users.email}</p>
          <p>{m.text}</p>
        </div>
    </div>
  )
}


const MessageForm = ({setChange}) => {
  const {user} = useContext(Context)
  const [text, setText] = useState('')
  const [userId, setUserId] = useState()
  

  const addMessage = () => {
    setUserId(user.user.id)
    console.log(userId)
    const formData = new FormData()
    formData.append("text", text)
    formData.append("userId", userId)
    createMessage(formData).then(data => setChange(true))
}
  return (
    <div>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' , justifyContent: 'center'}}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <Input value={text} onChange={e => setText(e.target.value)} id="input-with-sx" placeholder = 'Message' variant="standard" style={{width: '300px'}}/>
          <Button onClick={addMessage}>Отправить</Button>
        </Box>
    </div>
  )
}



export default ChatPage
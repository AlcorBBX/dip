import React, { useEffect, useState, useContext } from 'react'
import { observer } from "mobx-react-lite";
import {Avatar, Box, Button, Container, Input} from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import {fetchMessage, createMessage} from '../../http/chatAPI'
import {Context} from '../../index'
import { fetchUsers } from '../../http/userAPI';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { PROFILE_ROUTE } from "../../utils/consts";

const ChatPage = () => {
  const {id} = useParams()
  
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetchUsers().then(data => setUsers(data.rows)).finally(setFinal(true))
}, [])


  

  const [change, setChange] = useState(false)
  const [message, setMessage] = useState([])
  const [final, setFinal] = useState(false)
 
  useEffect(() => {
    setChange(false)
    fetchMessage().then(data => setMessage(data.rows))
}, [change])
// {users === undefined ? console.log("stop") : console.log(users.email)}
// console.log(message.userId)

if(!users){
  return ''
}

  return (
    <Container style={{ paddingTop: "100px"}}>
      <Messages message={message} users={users}/>
      <MessageForm setChange={setChange} id={id}/>
    </Container>
  )
}

const Messages = ({message, users}) => {
  // console.log(users)
  return (
    <div style={{height: '400px', width: '700px', overflowY: 'auto' , margin: '0 auto'}}>
      {message.map((m) => <Message m = {m} users={users}/>) }
    </div>
  )
}


const Message = ({m, users}) => {
  const history = useNavigate()
    return (
      <div style={{display: 'flex', marginBottom: '20px'}}>
      {users.map(users => 
        <div style={{display: 'flex', marginBottom: '20px'}}>

          {users.id === m.userId? 
            <Avatar alt='avatar' 
              src={"http://localhost:5000/" + users.img}
              style={{height: "36px", borderRadius: "50%", marginRight: '10px', cursor:'pointer'}}
              onClick={() => history(PROFILE_ROUTE+ '/' + m.userId)}
              /> 
            :''
          }
          <div>
            <div>
             
              <div>
                <p style={{color: 'white'}}>{users.id === m.userId? users.email : ''} </p>
              </div>
            
            </div>
          </div>
        </div>
        )}
          <p style={{width: '400px', color: 'white', marginLeft: '-32px', paddingTop: '10px'}}><br/>{m.text}</p>
        
    </div>
  )
}


const MessageForm = ({setChange, id}) => {
  const {user} = useContext(Context)
  const [text, setText] = useState('')
  const [userId, setUserId] = useState()
  // {id !== undefined ? setUserId(Number(id)) : console.log("stop")}
  console.log(user.user.id)
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
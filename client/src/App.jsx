import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/header/Header";
import AppRouter from '../src/components/AppRouter'
import { check } from "./http/userAPI";
import { Context } from "./index";

const App = observer(() => {
  // получаем состояние
  const {user} = useContext(Context)

  useEffect(()=>{
    //вызываем функцию check и если она выполнилась успешно, то 
    check().then(data =>{
      user.setUser(data)
      user.setIsAuth(true)
    })
  }, [])
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
})

export default App;

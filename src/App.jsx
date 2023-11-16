import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Enter from './pages/Enter';
import Search from './pages/Search';
import Cdr from './pages/Cdr';
import Account from './pages/Account';
import Aadhar from './pages/Aadhar';

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap" rel="stylesheet"></link>

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/enter" element= {<Enter/>}/>
          <Route path = "/search" element = {<Search/>}/>
          <Route path = "/cdr" element = {<Cdr/>}/>
          <Route path = "/account" element = {<Account/>}/>
          <Route path = "/aadhar" element = {<Aadhar/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
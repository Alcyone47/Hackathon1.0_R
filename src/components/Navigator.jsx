import React from 'react'
import "../css/Navigator.css"
import { Navigate, useNavigate } from 'react-router-dom'

const Navigator = () => {
  const navigate = useNavigate();

  function toEnter(event){
    navigate('/enter');
  }

  function toSearch(event){
    navigate('/search')
  }

  function toCdr(event){
    navigate('/cdr')
  }

  function toAccount(event){
    navigate('/account')
  }

  function toAadhar(event){
    navigate('/aadhar')
  }

  return (
    <div className='nav__layout'>
      <button onClick={toEnter}>ENTER</button>
      <button onClick={toSearch}>SEARCH</button>
      <button onClick={toCdr}>CDR</button>
      <button onClick={toAccount}>BANK ACCOUNT</button>
      <button onClick={toAadhar}>AADHAR</button>
    </div>
  )
}

export default Navigator
import React from 'react'
import Navigator from '../components/Navigator'
import Top from '../components/Top'
import '../css/Scba.css'

const Account = () => {
  return (
    <div className='layout'>
      <Top/>
      <Navigator/>
      <div className='hero'>
        <h2>Search Bank Account Details</h2>
        <div className='search__box'>
          <h2>Search By </h2>
          <input type="text" placeholder='Account Number'/>
          <button>SEARCH</button>
        </div>
      </div>
    </div>
  )
}

export default Account
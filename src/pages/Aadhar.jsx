import React from 'react'
import Navigator from '../components/Navigator'
import Top from '../components/Top'
import '../css/Scba.css'


const Aadhar = () => {
  return (
    <div className='layout'>
      <Top/>
      <Navigator/>
      <div className='hero'>
        <h2>Search Aadhar Details</h2>
        <div className='search__box'>
          <h2>Search By </h2>
          <input type="text" placeholder='Aadhar Number'/>
          <button>SEARCH</button>
        </div>
      </div>
    </div>
  )
}

export default Aadhar
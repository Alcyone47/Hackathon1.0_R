import React from 'react'
import Navigator from '../components/Navigator'
import Top from '../components/Top'
import '../css/Scba.css'

function Search () {
  return (
    <div className='layout'>
      <Top/>
      <Navigator/>
      <div className='hero'>
        <h2>Search By Case Number</h2>
        <div className='search__box'>
          <h2>Search By </h2>
          <input type="text" placeholder='Case Number'/>
          <button>SEARCH</button>
        </div>
      </div>
    </div>
  )
}

export default Search
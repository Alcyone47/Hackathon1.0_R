import React from 'react'
import { useNavigate } from 'react-router'
import Top from '../components/Top'
import Navigator from '../components/Navigator'
import '../css/Home.css'

function Home(){
    return(
        <div className="home__layout">
            <Top/>
            <h1>WELCOME VIKRAM</h1>
            <h2>CRIME BRANCH</h2>
            <Navigator/>
        </div>
    )
}

export default Home
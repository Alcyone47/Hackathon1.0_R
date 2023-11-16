import React from 'react'
import { useNavigate } from 'react-router'
import Top from '../components/Top'
import Navigator from '../components/Navigator'
import '../css/Home.css'

function Home(){
    return(
        <div className="home__layout">
            <Top/>
            <div className='welcome__user'>
                <h1>WELCOME VIKRAM</h1>
                <h2>CRIME BRANCH</h2>
            </div>
            <Navigator/>
            <div className='info__card'>
                {/* Top stats */}
                <div className='current__info'>
                    <h2>CURRENT CASES</h2>
                    <ul className='cases__list'>
                        <li>Rajesh Sharma - Car Accident - 234</li>
                        <li>Abhey Arora - Car Accident - 240</li>
                        <li>Akriti Chadda - Theft - 340</li>
                        <li>Vinay Kumar - Theft - 350</li>
                    </ul>
                </div>
                {/* Bottom stats */}
                <div className='total__info'>
                    <div className='total__item'>TOTAL CASES <br/>500</div>
                    <div className='total__item'>CLOSED CASES <br />300 </div>
                    <div className='total__item'>OPEN CASES <br />200</div>
                    <div className='total__item'>SOLVED CASES <br />250</div>
                </div>
            </div>
        </div>
    )
}

export default Home
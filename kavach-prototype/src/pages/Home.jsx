import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            {/* SplashScreen */}
            <div id="splashscreen">
                <h2>Welcome !</h2>
                <img src="../assets/background.png"/>
                <a href="#" class="enter_link">Enter on the website</a>
            </div>

            {/* Hero */}
            <div>
                <h1>Home Page</h1>
            </div>
        </div>
        
    )
}

export default Home
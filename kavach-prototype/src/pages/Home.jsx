import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Home.css'

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default Home
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../css/Login.css'

function Login() {
    const navigate = useNavigate();
    return (
        <div className='login__card'>
            {/* SplashScreen */}
            {/* <div id="splashscreen">
                <h2>Welcome !</h2>
                <img src="../assets/background.png"/>
                <a href="#" class="enter_link">Enter the website</a>
            </div> */}

            {/* Hero */}
                <img className='login__logo' src=".\src\assets\PIDM LOGO 1.png" alt="" />
                <div className='login__form'>
                    <div className='form__field user__field'>
                        <img className='form__img user__img' src="\src\assets\person.svg" alt="" />
                        <input className='form__input user__input' type="text" placeholder='USERNAME' />
                    </div>
                    <div className='form__field pass_field'>
                        <img className='form__img password__img' src="\src\assets\lock.svg" alt="" />
                        <input className='form__input pass__input' type="password" placeholder='PASSWORD'/>
                    </div>
                </div>
                <button onClick={toHome} className='login__btn'>LOG IN</button>
        </div>
    )
    function toHome(event){
        navigate('/home');
    }

}



export default Login
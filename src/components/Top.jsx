import React from 'react'
import '../css/Top.css'
import { Navigate, useNavigate } from 'react-router-dom'

function Top(){
    const navigate = useNavigate();
    function toHome(event){
        navigate('/home');
    }
    return(
        <div className='top__main'>
            <div className='top__left'>
                <img className='top__img' src=".\src\assets\Asset 1logo4 1.png" alt=""/>
                <h3>POLICE INVESTIGATION DATA MANAGEMENT</h3>
            </div>
            <div className='top__right'>
                
                <button>
                    <img onClick={toHome} src=".\src\assets\ant-design_home-filled.png" alt="" />
                </button>

                <button>
                    <img src=".\src\assets\ph_user-circle-fill.png" alt="" />
                </button>
            
            </div>
                
        </div>
    )
}

export default Top
import React from 'react'
import "../css/Enter.css"
import Navigator from '../components/Navigator'
import Top from '../components/Top'

function Enter(){
    return (
        <div className='layout'>
            <Top/>
            <Navigator/>
            <h2>CASE DETAILS</h2>
            <div className='input__card'>
                <h2>Personal Information</h2>
                <div className='input__row'>
                    <input className='row__item' type="text" placeholder='First Name'/>
                    <input className='row__item' type="text" placeholder='Middle Name'/>
                    <input className='row__item' type="text" placeholder='Last Name' />
                </div>
                <div className='input__row'>
                    <div className='gender__input'>
                        <h3>Gender</h3>
                        <div className='gender__opt'>
                            <input className='radio__btn' type="radio" name="gender" id="gender" />
                            <h4 className='radio__tag'>Male</h4>
                        </div>
                        <div className='gender__opt'>
                            <input className='radio__btn' type="radio" name="gender" id="gender" />
                            <h4 className='radio__tag'>Female</h4>
                        </div>
                        
                    </div>
                    <input className='row__item' type="date" name="" id="" />
                    <input className='row__item' type="text" name="" id="" placeholder='Occupation' />
                </div>
                <div className='input__row'>
                    <input className='oAddress' type="text" placeholder='Occupational Address' />
                </div>
                <div className='input__row'>
                    <input className='pAddress' type="text" placeholder='Home Address'/>
                </div>
                <h2>Call Detail Records</h2>
                <div className='number__row'>
                    <input className='number__item' type="" name="" id="" placeholder='Phone Number'/>
                    <input className='number__item' type="" name="" id="" placeholder='Phone Number'/>
                </div>
                <h2>Bank Account</h2>
                <div className='number__row'>
                    <input className='number__item' type="text" placeholder='Account Number'/>
                    <input className='number__item' type="text" placeholder='Bank Name'/>
                </div>
                <h2>FIR Details</h2>
                <div className='input__row'>
                    <input className='row__item' type="text" placeholder='FIR Number'/>
                    <input className='row__item' type="date" placeholder='Date of Incident'/>
                    <input className='row__item' type="text" placeholder='Place of Incident'/>
                </div>
                <div className='input__row'>
                    <input className='pAddress' type="text" name="" id="" placeholder='Incident Details'/>
                </div>
                <div className='input__row'>
                    <input className='fileBtn' type="file" name="" id=""  data-buttonText='Upload FIR file'/>
                </div>
                <button className='submitBtn'>Enter</button>
            </div>
        </div>
        
    )
}
export default Enter
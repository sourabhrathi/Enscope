import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Meterialscopeswitch = ({ merchant, collaterals}) => {
    const [active,setactive]=useState("")
    const navigate=useNavigate()
    return (
        <div className=" d-flex">
            <div className={`collaterals-lab ${collaterals}`} onClick={() => {  setactive('Pending & Rejected'); navigate('/settings') }}>

                <h4 className= {` text-size ${active === 'Pending & Rejected ' ? 'active ' : ''}`}>Material</h4>
            </div>
            <div className={` ms-4 merchandise-libary ${merchant} `} onClick={() => {setactive('Approved'); navigate('/scope') 
            }}>

                <h4 className={`  text-size ${active === 'Approved' ? 'active' : ''}`}>Scope</h4>
             
            </div>
        </div>
    )
}

export default Meterialscopeswitch
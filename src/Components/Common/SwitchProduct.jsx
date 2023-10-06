import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SwitchProduct = ({ merchant, collaterals }) => {
    const [active,setactive]=useState("")
const navigate=useNavigate()
    return (
        <div className="product-service d-flex">
            <div className={`collaterals-lab ${collaterals}`} onClick={() => { setactive('Pending & Rejected');  navigate('/approvalrequests')
            }}>

                <h4 className= {`text-size ${active === 'Pending & Rejected' ? 'active' : ''}`}>Pending & Rejected</h4>
            </div>
            <div className={` ms-4 merchandise-libary ${merchant} `} onClick={() => { setactive('Approved');     navigate('/pending')
            }}>

                <h4 className={` text-size ${active === 'Approved' ? 'active' : ''}`}>Approved</h4>
             
            </div>
        </div>
    )
}

export default SwitchProduct

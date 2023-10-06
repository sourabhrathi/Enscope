import React from 'react';
import rigntIcon from "../../Assets/images/icons/chevron_right.svg"
import { useNavigate } from 'react-router-dom'

const InnerHeader = ({data}) => {
   
    const nevigation = useNavigate()

    const handleclick = () => {
        nevigation('/companies')
    }
    return (
        <div className='py-3 px-14 bg-white inner-header m-2 flex items-center' style={{height:'48px'}} >
            <p style={{ color: ' #7E7E7E', cursor: 'pointer' }} onClick={handleclick}>Companies  </p>
            <img src={rigntIcon} alt="" />
            <p>{data}</p>
        </div>
    )
}

export default InnerHeader

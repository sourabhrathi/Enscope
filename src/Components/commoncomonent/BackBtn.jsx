import React from 'react'
import Arrow from "../../Assets/image/icons/arrow_back.svg"
import { useNavigate } from 'react-router-dom';

const Backbtn = ({ title, handleBack }) => {
    const navigate = useNavigate();
    return (
        <div className=' scope-wraper pt-2 pb-4'>
            <div className='go_back flex items-center' onClick={() => navigate(-1)}>
                <button className='back_btn'><img src={Arrow} alt="" /></button>
                <h3 className='px-4'> {title}</h3>
            </div>
        </div>
    )
}
export default Backbtn

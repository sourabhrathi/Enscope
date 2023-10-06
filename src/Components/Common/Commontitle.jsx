import React, { useContext } from 'react'
import AuthContext from '../../Utils/auth-context'

const Commontitle = ({ title }) => {
    const { toogle, handle } = useContext(AuthContext)


    return (

        <div className='flex justify-between items-center'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div id='hamburger-1'   
                className={`hamburger ${toogle ? 'is-active hidden' : ''}`}
           
                onClick={()=>handle()}
            >
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>

            </div>

        </div>
    )
}

export default Commontitle
import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import InnerHeader from '../../../Components/Common/InnerHeader'
import InnerTabe from '../../../Components/Common/InnerTabe'
import SteamPlant from '../../../Components/Common/SteamPlant'

const Steam_Heat = () => {


    return (
        <div>
            <InnerHeader />
            <div className='mainWrapper'>
                <Backbtn title="Steam & Heat" />
                <Descriptions discrip="" />
                <InnerTabe />
             <SteamPlant/>

            </div>
        </div>
    )
}

export default Steam_Heat
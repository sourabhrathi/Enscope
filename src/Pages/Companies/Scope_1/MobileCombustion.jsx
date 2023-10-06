import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import InnerHeader from '../../../Components/Common/InnerHeader'
import InnerTabe from '../../../Components/Common/InnerTabe'
import MobileCombustionPlant from '../../../Components/Common/MobileCombustionPlant'


const MobileCombustion = () => {
    return (
        <div>
            <InnerHeader />
            <div className='mainWrapper'>
                <Backbtn title="Mobile Combustion" />
                <Descriptions discrip="" />
                <InnerTabe />
                <MobileCombustionPlant />

            </div>
        </div>
    )
}

export default MobileCombustion;
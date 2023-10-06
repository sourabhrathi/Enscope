import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import InnerHeader from '../../../Components/Common/InnerHeader'
import InnerTabe from '../../../Components/Common/InnerTabe'
import CoolingPlant from '../../../Components/Common/CoolingPlant'

const Cooling = () => {

    return (
        <div>
            <InnerHeader />
            <div className='mainWrapper'>
                <Backbtn title="Cooling" />
                <Descriptions discrip="" />
                <InnerTabe />
                <CoolingPlant/>
            </div>
        </div>
    )
}

export default Cooling;
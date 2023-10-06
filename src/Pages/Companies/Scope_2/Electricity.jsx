import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import EctricityPlant from '../../../Components/Common/EctricityPlant'
import InnerHeader from '../../../Components/Common/InnerHeader'
import InnerTabe from '../../../Components/Common/InnerTabe'

const Electricity = () => {
    return (
        <div>
            <InnerHeader />
            <div className='mainWrapper'>
                <Backbtn title="Electricity" />
                <Descriptions discrip="" />
                <InnerTabe />
                <EctricityPlant />
            </div>
        </div>
    )
}

export default Electricity;
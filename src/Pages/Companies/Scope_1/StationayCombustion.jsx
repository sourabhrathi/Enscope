import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import InnerHeader from '../../../Components/Common/InnerHeader'
import InnerTabe from '../../../Components/Common/InnerTabe'
import StationaryPlantOne from '../../../Components/Common/StationaryPlantOne'

const StationayCombustion = () => {
    return (
        <div>
            <InnerHeader />
            <div className='mainWrapper'>
                <Backbtn title="Stationary Combustion" />
                <Descriptions discrip="" />
                <InnerTabe />
                <StationaryPlantOne />
            </div>
        </div>
    )
}

export default StationayCombustion
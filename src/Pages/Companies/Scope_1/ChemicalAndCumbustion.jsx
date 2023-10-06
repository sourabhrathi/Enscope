import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import ChemicalGasPlant from '../../../Components/Common/ChemicalGasPlant'
import Descriptions from '../../../Components/Common/Descriptions'
import InnerHeader from '../../../Components/Common/InnerHeader'
import InnerTabe from '../../../Components/Common/InnerTabe'

const ChemicalAndCumbustion = () => {
    return (
        <div>
            <InnerHeader />
            <div className='mainWrapper'>
                <Backbtn title="Chemicals and gases" />
                <Descriptions discrip="" />
                <InnerTabe />
                <ChemicalGasPlant />

            </div>
        </div>
    )
}

export default ChemicalAndCumbustion;
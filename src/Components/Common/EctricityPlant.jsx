import React from 'react'
import ChemicalPlant from './PlantTables/ChemicalPlant'
import ElectricityPlantTable from './ScopTwoPlantTable/ElectricityPlantTable'
import { YearCurrent } from '../../Utils/services'
const EctricityPlant = () => {


    return (
        <div className='pt-2'>
            <p className='profile-texts'>Donnelly-Wisozk Die cast manufacturing unit</p>
       
            <ElectricityPlantTable />
  
        </div>
    )
}

export default EctricityPlant
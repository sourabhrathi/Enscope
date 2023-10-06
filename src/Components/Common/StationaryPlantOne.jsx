import React, { useState, useEffect } from 'react'
import PlantTable from './PlantTables/PlantTable'
import { YearCurrent } from '../../Utils/services'

const StationaryPlantOne = () => {

    const [data, setdata] = useState([])
    const showdata = async () => {
        const result = await YearCurrent()
        setdata(result?.res?.data)
        // console.log(result.res.data[0].year, "check");
    }

    useEffect(() => {
        showdata();
    }, [])

    return (
        <div className='mt-3'>
            <p className='profile-texts'>Donnelly-Wisozk Die cast manufacturing unit</p>
            <div className='pt-5'>
                <p className='ass-year'>Assessment Year : {data[0]?.year}</p>
            </div>
            {data.map((item, index) => (
                <div>
                    <p className='pt-4 yearname' style={{ color: '#929292' }}>{item.created_on}</p>
                    <PlantTable month={item.assessment_month} YearData={2023} CreatOn="Apr-2023" manthFilter={item?.assessment_month} year={item?.year}/>
                </div>  
            ))}
        </div>
    )
}

export default StationaryPlantOne
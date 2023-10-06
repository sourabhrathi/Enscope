import React, { useState, useEffect } from 'react'
import MobilePlantTable from './PlantTables/MobilePlantTable'
import { YearCurrent } from '../../Utils/services'

const MobileCombustionPlant = () => {

    const [data, setdata] = useState([])
    const showdata = async () => {
        const result = await YearCurrent()
        setdata(result?.res?.data)
        // console.log(result.res.data[0].year, "checkdatayear");
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
                <p className='pt-4' style={{ color: '#929292' }}>{item.created_on}</p>
                <MobilePlantTable month={item.assessment_month} YearData={2023} CreatOn="Apr-2023" manthFilter={item?.assessment_month} year={item?.year}/>
            </div>  
        ))}

    </div>
    )
}

export default MobileCombustionPlant
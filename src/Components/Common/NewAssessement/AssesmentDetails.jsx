import React, { useState } from 'react'
import Select from 'react-select';
import cloudIcon from "../../../Assets/images/icons/cloud_download.svg"


const options = [
    { value: '2020-2021', label: '2020-2021' },
    { value: '2021-2022', label: '2021-2022' },
    { value: '2022-2023', label: '2022-2023' }
];

const AssesmentDetails = ({ selectedOption, setSelectedOption }) => {


    function handleSelect(option) {
        setSelectedOption(option);
    }



    return (
        <div className='assment_year pt-20'>
            <p>Assessment Year</p>
            <div className='flex justify-between items-center mt-3'>
                <Select
                    value={selectedOption}
                    onChange={handleSelect}
                    options={options}
                    className="assment-select"
                />

                <div className='flex'>
                    <button className='pdf-btn flex items-center px-5'> <img src={cloudIcon} alt="" /> <span className='pl-2'>Download PDF</span></button>
                    <button className='submit-btn'>Submit</button>
                </div>
            </div>





        </div >
    )
}

export default AssesmentDetails
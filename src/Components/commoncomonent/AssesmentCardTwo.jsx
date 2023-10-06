import React from 'react'

const AssesmentCardTwo = ({ cardImage, title, description, handleRedirect }) => {
    // console.log(title, description,"title, description")

    return (
        <div>
            {/* <div class="card w-full max-w-90 mt-2 bg-white border border-gray-300  dark:bg-gray-800 dark:border-gray-700 bg-white  rounded-lg" onClick={handleRedirect} style={{cursor:'pointer'}}> */}
                {/* <div className='flex justify-center items-center '>
                    <img src={cardImage} alt="" />
                </div> */}
                <div className='d-flex align-items-center justify-content-between borderscope mt-2'onClick={handleRedirect} style={{cursor:'pointer'}}  >
                    <p className='text-start   assment-title text-black'> {title}</p>
                    <p className='text-start  assment-title ' style={{ color: '#929292' }} > {description}</p>
                </div>
            </div>
        // </div>
    )
}

export default AssesmentCardTwo
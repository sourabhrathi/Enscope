import React from 'react'

const AssesmentCardTwo = ({ cardImage, title, handleRedirect }) => {
    return (
        <div>
            <div class="card w-full max-w-sm bg-white border border-gray-200 rounded-lg assementcard dark:bg-gray-800 dark:border-gray-700 py-14" onClick={handleRedirect}>
                <div className='flex justify-center items-center '>
                    <img src={cardImage} alt="" />
                </div>
                <p className='text-center pt-8 assment-title'> {title}</p>
            </div>
        </div>
    )
}

export default AssesmentCardTwo
import React from 'react'
import infoIcon from "../../../Assets/images/icons/info.svg"
import cardImage from "../../../Assets/images/NewAssement/cardImage.png"

const AssessmentCard = ({ title, srcImage, cardBg, scope, handleRedirect }) => {
    return (
        <div>
            <div class="card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className='flex justify-end p-4'>
                    <img src={infoIcon} alt="info" className='cursor-pointer' />
                </div>

                <div className='flex justify-center items-center h-40'>
                    <img src={srcImage} alt="card" />
                </div>
                <div className={`p-9 ${scope}`}>
                    <p className='text-center'>{title}</p>
                </div>
                <div className={`${cardBg} back from-bottom cursor-pointer`} onClick={handleRedirect}>
                    <div className='flex justify-center items-center h-full	'>
                        <h3> {title}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AssessmentCard
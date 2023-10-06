import React from 'react';
import rigntIcon from "../../Assets/images/icons/chevron_right.svg"

const InnerHeader = () => {
    return (
        <div className='py-4 px-14 bg-white inner-header m-2 flex items-center' >
            <p>New Assessment  </p>
            <img src={rigntIcon} alt="" />
            <p>Scope 1</p>

        </div>
    )
}

export default InnerHeader
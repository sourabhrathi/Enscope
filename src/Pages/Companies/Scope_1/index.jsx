import React from 'react'
import InnerHeader from '../../../Components/Common/InnerHeader'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import ScopeLabs from '../../../Components/Common/ScopeLabs'

const ScopeOne = () => {

    return (
        <div >
            <InnerHeader data={"Scope1"} />
            <div className='mainWrapper'>
                <Backbtn title="Scope 1" />
                <Descriptions discrip="" />
                <ScopeLabs />
            </div>

        </div>
    )
}

export default ScopeOne
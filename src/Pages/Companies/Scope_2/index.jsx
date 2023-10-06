import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import InnerHeader from '../../../Components/Common/InnerHeader'
import ScopeLabstwo from '../../../Components/Common/ScopeLabstwo'

const ScopeTwo = () => {
    return (
        <div >
            <InnerHeader data={'Scope 2'} />
            <div className='mainWrapper'>
                <Backbtn title="Scope 2" />
                <Descriptions discrip="" />
                <ScopeLabstwo />
            </div>
        </div>
    )
}

export default ScopeTwo 
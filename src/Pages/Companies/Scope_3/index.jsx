import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import InnerHeader from '../../../Components/Common/InnerHeader'
import ScopeLabsthree from '../../../Components/Common/ScopeLabsthree'

const ScopeThree = () => {

    return (
        <div >
            <InnerHeader data={'Scope 3'} />
            <div className='mainWrapper pb-16'>
                <Backbtn title="Scope 3" />
                <Descriptions discrip="" />
                <ScopeLabsthree /> 
            </div>
        </div>
    )
}

export default ScopeThree

import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn'
import Descriptions from '../../../Components/Common/Descriptions'
import InnerHeader from '../../../Components/Common/InnerHeader'
import InnerTabe from '../../../Components/Common/InnerTabe'
import Row_materialplant from '../../../Components/Common/ScopeThreeTables/Row-materials/Row_materialplant'

const RowMaterial = (props) => {
    return (
        <div>
            <InnerHeader />
            <div className='mainWrapper'>
                <Backbtn title={props.title} />
                <Descriptions discrip="" />
                {/* <InnerTabe /> */}
                <Row_materialplant title={props.title} />
            
            </div>
        </div>
    )
}

export default RowMaterial
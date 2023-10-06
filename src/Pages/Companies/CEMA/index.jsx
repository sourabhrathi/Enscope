import React from 'react'
import Backbtn from '../../../Components/Common/Backbtn';
import CemaTable from '../../../Components/Common/Cematable';
import Descriptions from '../../../Components/Common/Descriptions';
import InnerHeader from '../../../Components/Common/InnerHeader';

const Cema = () => {
    return (
        <div >
            <InnerHeader data={'CEMA'} />
            <div className='mainWrapper'>
                <Backbtn title="CEMA" />
                <Descriptions discrip="" />
                <CemaTable />
            </div>

        </div>
    )
}

export default Cema;
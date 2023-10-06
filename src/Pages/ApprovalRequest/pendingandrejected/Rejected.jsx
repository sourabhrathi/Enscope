import React from 'react'
import { useNavigate } from 'react-router-dom';
import Rejectpending from '../../../Components/Common/Rejectpending';
import Superadmin from '../../../Components/Common/Superadmin';
import SwitchProduct from '../../../Components/Common/SwitchProduct'
import Rejectedqcadmin from '../../../Components/commoncomonent/Rejectedqcadmin';
import Commontitle from '../../../Components/Common/Commontitle';
const Rejected = () => {

  const navigate = useNavigate();
  const handleCollateralpage = (e) => {
    navigate('/pending')

  };
  return (
    <div className="mainWrapper pt-5">
      <div className='relate'>
      <div className='companies'>
        {/* <h1 >Approval Requests</h1> */}
        <Commontitle title={'Approval Requests'}/>

      </div>
      <div className="productswitch ">
        <SwitchProduct
          collaterals="productactive"
          handleMarchant={handleCollateralpage}
        />
      </div>
      <div className=' d-flex align-items-cemter justify-between barbtn'>
        <div className='searchInput searching' >
          <input type="text" />
        </div>
        <Rejectpending />
      </div>
      <div className=''>


        <p className='padtop' style={{ color: '#1E1E1E', fontSize: '16px',fontWeight:500 }} >Rejected by Q.C Admin</p>
        <Rejectedqcadmin />

      </div>
      </div>

    </div>
  )
}

export default Rejected

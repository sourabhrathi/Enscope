import React, { useEffect,useState } from 'react'
import Rejectpending from '../../../Components/Common/Rejectpending';
import Superadmin from '../../../Components/Common/Superadmin';
import SwitchProduct from '../../../Components/Common/SwitchProduct';
import Commontitle from '../../../Components/Common/Commontitle';

function ApprovalRequests() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    // console.log(newValue,'newvalue');
  };

  return (
    <div className="mainWrapper pt-5">
      <div className='companies'>
        {/* <h1 >Approval Requests</h1> */}
        <Commontitle title={'Approval Requests'}/>

      </div>
      <div className="productswitch ">
        <SwitchProduct
          collaterals="productactive"
        />
      </div>
      <div className=' d-flex align-items-center justify-between barbtn'>
        <div className='searchInput searching' >
          <input type="text" onChange={handleInputChange} value={inputValue} />
        </div>
        <Rejectpending /> 
      </div>
      <Superadmin inputValue={inputValue} />
    </div>
  )
}
export default ApprovalRequests

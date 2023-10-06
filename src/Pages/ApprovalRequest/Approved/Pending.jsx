import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SwitchProduct from '../../../Components/Common/SwitchProduct';
import Approvedrequest from '../../../Components/Common/Approvedrequest';
import Commontitle from '../../../Components/Common/Commontitle';

function Pending() {
  const navigate = useNavigate();
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
          merchant="productactive"
        />
      </div>
      <div className=' d-flex align-items-cemter justify-between barbtn'>
        <div className='searchInput' >
          <input type="text" onChange={handleInputChange} value={inputValue}/>
        </div>
      </div>
      <div className='padtop'>
        <Approvedrequest inputValue={inputValue} />

      </div>
    </div>
  )
}

export default Pending
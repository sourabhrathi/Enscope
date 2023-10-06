import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Editingrequest from '../../Components/Common/Editingrequest';
import Pendingrequest from '../../Components/Common/Pendingrequest';
import Commontitle from '../../Components/Common/Commontitle';

function EditingRequests() {
  const navigate = useNavigate();
  const handleCollateralpage = (e) => {
    navigate('/pending')
  };

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    // console.log(newValue,'newvalue');
  };


  return (
    <div className="mainWrapper pt-5">
      <div className='companies'>
        {/* <h1 >Editing Requests</h1> */}
        <Commontitle title={'Editing Requests'}/>

      </div>
      <div className=' d-flex align-items-cemter justify-between barbtn'>
        <div className='searchInput' >
          <input type="text" onChange={handleInputChange} value={inputValue} />
        </div>
      </div>
      <div className='mt-3 pding' >
        {/* <p className='pt-5' style={{ color: '#1E1E1E', fontSize: '16px' }}>Pending</p> */}
        <Editingrequest inputValue={inputValue}/>
        
      </div>
    </div>
  )
}
export default EditingRequests

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Rejectpending = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [selectedOption, setSelectedOption] = useState('/approvalrequests');

//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//         navigate(event.target.value);
//     }


//     const handleAll = () => {
//         navigate('/approvalrequests');
//     }

//     const handleRejectedbySa = () => {
//         navigate('/rejectedbysa');
//     }

//     const handleRejected = () => {
//         navigate('/rejected');
//     }
        
//     const handlePending = () => {
//         navigate('/sapending');
//     }

//     const data = () => {
//         const item = JSON.parse(localStorage.getItem('userdata'))
//         if (item.Admin === 2) {
//             return true
//         }
//         return false
//     }
//     useEffect(() => {
//         setSelectedOption(location.pathname);
//     }, [location.pathname]);


//     return (
//         <>
//             <div className='showinweb'>
//                 <div className='d-flex align-items-center allrejextbtn'>
//                     <p className={`pendreject ${window.location.pathname === '/approvalrequests' ? 'active' : ''}`} onClick={handleAll}>All</p>
//                     {data() ?
//                         <p className={`pendreject ${window.location.pathname === '/rejectedbysa' ? 'active' : ''}`} onClick={handleRejectedbySa}>Rejected by S.A.</p>
//                         : ""}
//                     <p className={`pendreject ${window.location.pathname === '/rejected' ? 'active' : ''}`} onClick={handleRejected}>Rejected</p>
//                     <p className={`pendreject ${window.location.pathname === '/sapending' ? 'active' : ''}`} onClick={handlePending}>Pending</p>
//                 </div>
//             </div>
            
//             <div className='showinmobile'>
//                 <div className='d-flex align-items-center allrejextbtn'>
//                     <select value={selectedOption} onChange={handleOptionChange} className="pendreject">
//                         <option value="/approvalrequests" className={selectedOption === '/approvalrequests' ? 'active ' : ''}>All</option>
//                         {data() && (
//                             <option value="/rejectedbysa" className={selectedOption === '/rejectedbysa' ? 'active ' : ''}>
//                                 Rejected by S.A.
//                             </option>
//                         )}
//                         <option value="/rejected" className={selectedOption === '/rejected' ? 'active ' : ''}>
//                             Rejected
//                         </option>
//                         <option value="/sapending" className={selectedOption === '/sapending' ? 'active ' : ''}>
//                             Pending
//                         </option>
//                     </select>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Rejectpending;







import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import Select from 'react-select';

const Rejectpending = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState({});
  const [options,setoptions]=useState([])



  const handleOptionChange = (selected) => {
    console.log(selected.label,"selectedOption");
    setSelectedOption(selected);
    navigate(selected.value);
  };

  const handleAll = () => {
    setSelectedOption('/approvalrequests');
    navigate('/approvalrequests');
  };

  const handleRejectedbySa = () => {
    setSelectedOption('/rejectedbysa');
    navigate('/rejectedbysa');
  };

  const handleRejected = () => {
    setSelectedOption('/rejected');
    navigate('/rejected');
  };

  const handlePending = () => {
    setSelectedOption('/sapending');
    navigate('/sapending');
  };

  const data = () => {
    const item = JSON.parse(localStorage.getItem('userdata'));
    if (item.Admin === 2) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setSelectedOption(location.pathname);
  }, [location.pathname]);



useEffect(()=>{
    const data_1 = [
        { value: '/approvalrequests', label: 'All' },
        data() && { value: '/rejectedbysa', label: 'Rejected by S.A.' },
        { value: '/rejected', label: 'Rejected' },
        { value: '/sapending', label: 'Pending' },
      ].filter(Boolean);
      const selected = data_1.find(option => option.value === location.pathname);
      if (selected) {
            setoptions(data_1);
            setSelectedOption(selected);
          }


},[location.pathname])


  return (
    <>
             <div className='showinweb'>
                 <div className='d-flex align-items-center allrejextbtn'>
                     <p className={`pendreject ${window.location.pathname === '/approvalrequests' ? 'active' : ''}`} onClick={handleAll}>All</p>
                     {data() ?
                         <p className={`pendreject ${window.location.pathname === '/rejectedbysa' ? 'active' : ''}`} onClick={handleRejectedbySa}>Rejected by S.A.</p>
                         : ""}
                     <p className={`pendreject ${window.location.pathname === '/rejected' ? 'active' : ''}`} onClick={handleRejected}>Rejected</p>
                     <p className={`pendreject ${window.location.pathname === '/sapending' ? 'active' : ''}`} onClick={handlePending}>Pending</p>
                 </div>
             </div>

      <div className="showinmobile">
        <div className="d-flex align-items-center allrejextbtn">
          <Select
            // value={{ value: selectedOption, label: selectedOption }}
            value={selectedOption}
            onChange={handleOptionChange}
            options={options}
            className="pendreject"
            isSearchable={false}
            menuPlacement="auto"
          />
        </div>
      </div>
    </>
  );
};

export default Rejectpending;

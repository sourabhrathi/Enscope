import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import approve from "../../Assets/image/icons/approve.svg"
import reject from "../../Assets/image/icons/reject.svg"
import Editingrequestmodel from '../commoncomonent/Editingrequestmodel'
import ViewdataModel from '../commoncomonent/ViewdataModel';
import { REQUEST_EDIT } from '../../Utils/services'
import DenyRequestModel from './DenyRequestModel';
import moment from "moment";

const Editingrequest = ({inputValue}) => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [deny, setdeny] = useState(false)
    const [turn, setturn] = useState(false);
    const [webid, setwebid] = useState()
    const [exc,setexc]=useState()
    const [data, setdata] = useState([{}])
    const [isDropdownVisible, setIsDropdownVisible] = useState([]);
    const [clickedIndex, setClickedIndex] = useState(null);

    const handlescope = (id) => {
        navigate(`/dataview/${id}`);
        // navigate('/dataview')
    }

    
    const request = async () => {
        const result = await REQUEST_EDIT()
        const filteredData = await result.res.data[0].filter(item => item.editRequest !== 0 );
        // console.log(filteredData, "filteredData");
        setdata(filteredData);
        setexc(filteredData)
        setIsDropdownVisible(Array(filteredData.length).fill(false));

    }
    useEffect(() => {
        request()
    }, [])
    
    const handlesearch =()=>
    {
        const filterArray = exc?.filter((e) => {
            return (
              e.companyName.toLowerCase().includes(inputValue.toLowerCase())
            );
          });

          setdata(filterArray);
    }
    useEffect(() => {
        handlesearch()
    }, [inputValue])
  
        const toggleDropdown = (index) => {
      setIsDropdownVisible((prevState) =>
        prevState.map((value, i) => (i === index ? !value : value))
      );
  
      if (clickedIndex !== null && clickedIndex !== index) {
        // Close the previously clicked dropdown if it's not the same one
        setIsDropdownVisible((prevState) =>
          prevState.map((value, i) => (i === clickedIndex ? false : value))
        );
      }
  
      setClickedIndex(index);
    };

    return (
        <div>
            {
                data?.length > 0 ?
                    data.map((item,index) => {
                        return (
                            <div>
                                <div class="w-full max-w-90 mt-2 rounded-lg qcadmin" style={{ background: '#FFFFFF', border: '1px solid #E6E6E6', borderLeft: '3px solid #E7A543', height: '106px', borderRadius: '4px' }} >
                                    <div className='qcboad'>
                                        <div>
                                            <p className=' pl-20 Kris-Ltd pt-4 text-start' style={{ color: '#929292' ,fontWeight:400}}> <span style={{fontSize:'14px',    fontWeight:600 }}> Requested on :</span> {moment(item.approval_date).format('DD MMMM, YYYY')}</p>
                                            <p className='text-start pb-4 pl-20 Kris-Ltd text-black' style={{fontSize:'14px',fontWeight:600 }}> {item.companyName} :<span style={{ fontSize: '14px', color: '#929292' }}>{moment(item.submittedDate).format('YYYY-DD')}</span> </p>
                                        </div>
                                        <div className='flex mr-12'>
                                        <div className="showthreedot ">
                              <div className="dropdown threedot">
                                <ul
                                  className={`dropbtnicon icons ${isDropdownVisible[index] ? 'showLeft' : ''}`}
                                  onClick={()=>toggleDropdown(index)}
                                >
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                                <div
                                  id="myDropdown"
                                  className={`dropdown-content ${isDropdownVisible[index] ? 'show' : ''}`}
                                  style={{
                                    background: "#FDFDFD",

                                  }}
                                >
                                         <div className='viewcomment' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }} onClick={() => {setturn(true);setwebid(item?.userId)}} >View Comment</div>
                                            <div className='viewcomment' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }} onClick={()=>handlescope(item.userId)}>View Scope data</div>
                                </div>
                              </div>
                            </div>
                            <div className="showdatabtn">

                                            <button className='viewcomment' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }} onClick={() => {setturn(true);setwebid(item?.userId)}} >View Comment</button>
                                            <button className='viewcomment' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }} onClick={()=>handlescope(item.userId)}>View Scope data</button>
                            </div>
                                            <button className='d-flex align-items-center   viewcomment' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }} onClick={() => { setwebid(item.id); setOpen(true) }}><img src={approve} alt="..." className='mr-2' /> Allow</button>
                                            <button className='d-flex align-items-center  viewcomment' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }} onClick={() => { setwebid(item.id); setdeny(true) }} > <img src={reject} alt="..." className='mr-2' /> Deny</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    :
                    <div>
                        <div class="w-full max-w-90 mt-2 rounded-lg d-flex align-item-center justify-content-center" style={{ background: '#FFFFFF', border: '1px solid #E6E6E6', height: '106px', borderRadius: '4px' }}>

                            <div className='d-flex align-items-center justify-content-center'>

                                <p className='sincedays'> No Records Found</p>

                            </div>
                        </div>
                    </div>
            }


            <Editingrequestmodel webid={webid} setOpen={setOpen} open={open} reques={request} datas={data && data[0]}/>
            <DenyRequestModel webid={webid} setOpen={setdeny} open={deny} request={request} datas={data && data[0]}/>
            <ViewdataModel webid={webid} setOpen={setturn} open={turn} />

        </div>
    )
}
    
export default Editingrequest
import React, { useState, useEffect } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import error from "../../Assets/image/icons/error.svg"
import check_circle from "../../Assets/image/icons/check_circle.svg"
import { REQUEST_STATUS,ViewReport,ViewCertificate } from '../../Utils/services'
import ReportModel from '../commoncomonent/ReportModel';
import CertificateModel from '../commoncomonent/CertificateModel';
import arrowdown from "../../Assets/image/icons/arrowdown.svg"
import ViewdataModel from '../commoncomonent/ViewdataModel';
import { toast } from 'react-toastify';


const Approvedrequest = ({inputValue}) => {
    const [open, setOpen] = useState(false);
    const [deny, setdeny] = useState(false)
    const [turn, setturn] = useState(false);
    const [webid, setwebid] = useState()
    const [data, setdata] = useState()
    const item = JSON.parse(localStorage.getItem('userdata'))
    const [exc,setexc]=useState()
   const [repot,setrepot]=useState([])
   const [download,setdownload]=useState([])
   const [isDropdownVisible, setIsDropdownVisible] = useState([]);
   const [clickedIndex, setClickedIndex] = useState(null);


    const request = async () => {
        const result = await REQUEST_STATUS()
        if (item.Admin === 1) {
            const filteredData = await result.res.data[0].filter(item => item.status === 'Approval' && item.approvedBy_SuperAdmin !==null && item.approvedBy_QCAdmin !==null);
            setdata(filteredData);
            setdata(filteredData);
        //    console.log(filteredData,"filteredDatafilteredData")
        setexc(filteredData)
        setIsDropdownVisible(Array(filteredData.length).fill(false));

        }else{
            const filteredData = await result.res.data[0].filter(item => item.status === 'Approval' && item.approvedBy_QCAdmin !==null );
            setdata(filteredData);
        setexc(filteredData)
        setIsDropdownVisible(Array(filteredData.length).fill(false));

        }


    }
const reportview=async()=>{
const result= await ViewReport()
setrepot(result.res.data)
const downloaddata=await ViewCertificate()
setdownload(downloaddata.res.data)
// console.log(result.res.data ,"chewhfiwhi");
}

    useEffect(() => {
        request()
        reportview()
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
  

    const data1 = () => {
        const item = JSON.parse(localStorage.getItem('userdata'))
        if (item.Admin !== 2) {
            return true
        }
        return false
    }

    const data2 = () => {
        const item = JSON.parse(localStorage.getItem('userdata'))
        if (item.Admin === 2) {
            return true
        }
        return false
    }
   

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
        <>
            {
                data?.length > 0 ?
                    data?.map((item,index) => {
                        if (item.status === 'Approval') {
                            const dataid=repot && repot[0]?.filter(item=>item.userId===item.userId)
                            const datadownload=download && download[0]?.filter(item=>item.userId===item.userId)

                            return (
                                <div>
                                    <div class="w-full max-w-90 mt-2 rounded-lg approvadmin" style={{ background: '#FFFFFF', border: '1px solid #E6E6E6', borderLeft: '3px solid #158D47', borderRadius: '4px', height: '106px' }} >
                                        <div className='qcboad'>
                                            <div>
                                                <p className=' pl-20 Kris-Ltd pt-4 text-start' style={{ color: '#929292' ,fontWeight:400}}> Approved by<span style={{ fontWeight:600}}> {item.approvedBy}</span> <span style={{fontWeight:600}}>on :</span>  {item.approval_date}</p>
                                                <p className='text-start pb-4 pl-20 Kris-Ltd text-black' style={{fontWeight:600}}> {item.companyName}</p>
                                            </div>
                                            {data2() ? <div><p className='sincedays' style={{  color: '#929292', fontWeight: '400' }}>{item.pending_day} </p></div> : ""} 
                                            <div className='flex mr-12 flexing'>
                                                {data1() ?
                                                    <button className='d-flex align-items-center   uploaddrop ddroper' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }}  >
                                                        <Dropdown className="d-flex align-items-center">
                                                            <Dropdown.Toggle className="d-flex align-items-center justify-content-center orderbar px-3 hoverbtn droup">
                                                                <p className='uploaddropdownw me-2 '>Upload</p>
                                                                <img src={arrowdown} alt="..."></img>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="sortheight p-2 " >
                                                                <div className='d-flex'> 
                                                                    <img src={error} alt="..." />      
                                                                    <p className='ms-2' onClick={() => { setwebid(dataid[0].id); setOpen(true) }} >Report</p>
                                                                </div>
                                                                <div className='d-flex pt-4'>
                                                                    <img src={check_circle} alt="..." />
                                                                    <p className='ms-2' onClick={() => { setwebid(datadownload[0].id); setturn(true) }} >Certificate</p>
                                                                </div>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </button>
                                                    : ""}
                                                <button className='d-flex align-items-center uploaddrop ddroper' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }}>
                                                    <Dropdown className="d-flex align-items-center" >
                                                        <Dropdown.Toggle className="d-flex align-items-center justify-content-center orderbar px-3 hoverbtn droup" >
                                                            <div    style={{position:'relative'}}>
                                                            <p className='uploaddropdownw '>Download</p>
                                                            <img src={arrowdown} alt="..." style={{position:'absolute' ,right:'-9px',top:'7px',marginLeft:'4px'}}></img>
                                                            </div>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="sortheight p-2 " >
                                                            <div className='d-flex'>
                                                                <img src={error} alt="..." />
                                                                <p className='ms-2' onClick={() => { dataid[0].status =="Pending" ? toast.error("Report is pending") : window.open(dataid[0].viewReport, "_blank")}} >Report</p>
                                                            </div>
                                                            <div className='d-flex pt-4'>
                                                                <img src={check_circle} alt="..." />
                                                                <p className='ms-2' onClick={() => { datadownload[0].status =="Pending" ? toast.error("Certificate is pending") :window.open(datadownload[0].assurance_file, "_blank") }} >Certificate</p>
                                                            </div>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </button>
                                <div className="showthreedot " style={{marginLeft:'12px'}}>
                              <div className="dropdown threedot">
                                <ul
                                  className={`dropbtnicon icons icones ${isDropdownVisible[index] ? 'showLeft' : ''}`}
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
                                <button className='d-flex align-items-center  uploaddroper droper   ' style={{ background: '#FDFDFD'}} onClick={() => {setdeny(true);setwebid(item?.userId)}}>  View Comment</button>

                                
                                </div>
                              </div>
                            </div>
                            <div className="showdatabtn">

                                                <button className='d-flex align-items-center  uploaddroper   ffrp ' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }} onClick={() => {setdeny(true);setwebid(item?.userId)}}>  View Comment</button>
                                           </div>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                    :
                    <div>
                        <div class="w-full max-w-90 mt-2 rounded-lg d-flex align-items-center justify-content-center" style={{ background: '#FFFFFF', border: '1px solid #E6E6E6',  height: '106px', borderRadius: '4px' }} >

                            <div className='d-flex align-items-center justify-content-center'>

                                <p className='sincedays'> No Records Found</p>

                            </div>
                        </div>
                    </div>
            }
            <ReportModel repot={repot} webid={webid} setOpen={setOpen} open={open} />
            <CertificateModel repot={repot} webid={webid} setOpen={setturn} open={turn} />
            <ViewdataModel webid={webid} setOpen={setdeny} open={deny} />
        </>
    )
}
export default Approvedrequest
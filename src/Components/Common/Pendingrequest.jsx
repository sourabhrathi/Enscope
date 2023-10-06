import React, { useEffect, useState } from 'react'
import approve from "../../Assets/image/icons/approve.svg"
import reject from "../../Assets/image/icons/reject.svg"
import { REQUEST_STATUS } from '../../Utils/services'
import ViewCancelModel from '../Common/ViewCancelModel'
import ViewcommentModel from '../commoncomonent/ViewcommentModel'
import { useNavigate } from 'react-router-dom'
import PendingRequestItem from "../commoncomonent/PendingRequestItem"
import done from "../../Assets/image/icons/done.svg";
import block from "../../Assets/image/icons/block.svg";
import moment from "moment";

const Pendingrequest =  ({inputValue}) => {
  const [data, setdata] = useState()
  const [exc,setexc]=useState()

  const item = JSON.parse(localStorage.getItem('userdata'))

  const request = async () => {
    const result = await REQUEST_STATUS()
    if (item.Admin === 1) {
        const filteredData = await result.res.data[0].filter(item => item.status === 'Approval' && item.approvedBy_QCAdmin !==null && item.rejectedBy_QCAdmin===null && item.approvedBy_SuperAdmin===null
        );
        setdata(filteredData);
    setexc(filteredData)

    }else{
        const filteredData = await result.res.data[0].filter(item => item.status === 'pending');
        setdata(filteredData);
    setexc(filteredData)

    }
}



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


useEffect(() => {
    request()
}, [])
    // console.log(webid, "check id")
    return (
        <>
            {
                // data.length >0?
                data?.length > 0 ?
                    data?.map((item) => {

                        // console.log(data.length);
                        // if (item.status === 'pending') {

                            return (
                              <PendingRequestItem
                              data={data && data[0]} 
                              item={item}
                              request={request}
                            />
                            )
                        // }
                    })
                    :
                    <div>
                        <div class="w-full max-w-90 mt-2  d-flex align-items-center justify-content-center" style={{ border:'1px solid #E6E6E6',backgroundColor: '', height: '106px', borderRadius: '4px' }} >
                            <div className='d-flex align-items-center justify-content-center'>

                                <p className='sincedays'> No Records Found</p>

                            </div>
                        </div>
                    </div>
            }
            {/* <ViewcommentModel webid={webid} setOpen={setOpen} open={open} handleApprove={handleApprove} request={request} datas={data && data[0]}  setApproved={setApproved} />
            <ViewCancelModel  lModel webid={webid} setOpen={setTurn} open={turn} hanldeCancel={hanldeCancel} request={request} datas={data && data[0]} setRejected={setRejected}/> */}
        </>
    )
}
export default Pendingrequest
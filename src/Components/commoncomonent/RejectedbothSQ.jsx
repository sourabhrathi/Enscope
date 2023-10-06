import React, { useEffect, useState } from 'react'
import { REQUEST_STATUS } from '../../Utils/services'
import ViewCancelModel from '../Common/ViewCancelModel'
import ViewcommentModel from './ViewcommentModel'

const RejectedbothSQ = () => {
    const [data, setdata] = useState([])
    const [webid, setwebid] = useState()
    const [open, setOpen] = useState(false);
    const [turn, setTurn] = useState(false);
    const handleApprove = () => {
        setOpen(false)
    }

    const hanldeCancel = () => {
        setOpen(false)
    }
    const request = async () => {

        const result = await REQUEST_STATUS()
        const filteredData = await result.res.data[0].filter(item => item.status === 'Reject');
        setdata(filteredData);
    }
    useEffect(() => {
        request()
    }, [])

    return (
        <>
            {
                // data.length >0?
                data?.length > 0 ?
                    data?.map((item) => {

                        // console.log(data.length);
                        if (item.status === 'Reject') {

                            return (
                                <div>
                                    <div class="w-full max-w-90 mt-2 " style={{ border: '1px solid #E6E6E6', height: '106px', borderLeft: '3px solid #EA3C3C', borderRadius: '4px' }} >

                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div>
                                                <p className=' pl-20 Kris-Ltd pt-4' style={{ color: '#929292',fontWeight:400 }}> Rejected by <span style={{ color: '#929292',fontWeight:400 }}>{item?.rejectedBy} </span> on : {item?.submittedDate}</p>
                                                <p className='text-start pb-4 pl-20 Kris-Ltd text-black' style={{fontSize:'14px',fontWeight:600}}> {item?.companyName}</p>
                                            </div>
                                            <div className='flex mr-12'>
                                                <button className='viewcomment' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }} >View Comment</button>
                                                {/* <button className='viewcomment' >View Scope data</button>
                                    <p className='d-flex align-items-center   viewcomment'   ><img src={approve} alt="..." className='mr-2' /> Approve</p>
                                    <p className='d-flex align-items-center  viewcomment' > <img src={reject} alt="..." className='mr-2' /> Reject</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                    :
                    <div>
                        <div class="w-full max-w-90 mt-2  d-flex align-items-center justify-content-center" style={{ border: '1px solid #E6E6E6', height: '106px', borderLeft: '3px solid #EA3C3C', borderRadius: '4px' }} >
                            <div className='d-flex align-items-center justify-content-center justify-contnt-cener '>

                                <p className='sincedays'> No Records Found</p>

                            </div>
                        </div>
                    </div>

            }
            <ViewcommentModel setOpen={setOpen} open={open} handleApprove={handleApprove} />
            <ViewCancelModel webid={webid} setOpen={setTurn} open={turn} hanldeCancel={hanldeCancel} />
        </>
    )
}
export default RejectedbothSQ

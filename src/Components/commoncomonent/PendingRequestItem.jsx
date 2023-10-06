import React, { useState } from "react";
import approve from "../../Assets/image/icons/approve.svg";
import reject from "../../Assets/image/icons/reject.svg";
import done from "../../Assets/image/icons/done.svg";
import block from "../../Assets/image/icons/block.svg";
import moment from "moment";
import ViewCancelModel from "../Common/ViewCancelModel";
import ViewcommentModel from "./ViewcommentModel";
import { useNavigate } from "react-router-dom";

const PendingRequestItem = ({
  data,
  item,
  request
}) => {
  const navigate = useNavigate();
  const itemloc = JSON.parse(localStorage.getItem('userdata'))
  const [display,setdisplay] = useState(false)
  const [webid, setwebid] = useState()
  const [open, setOpen] = useState(false);
  const [turn, setTurn] = useState(false);
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  

    const handleApprove = () => {
      setApproved(true);
      setOpen(false)
  }    

const handleReject = () => {
  setRejected(!rejected);
};


  const hanldeCancel = () => {
      setOpen(false)
  }



  const handlenavigate = (id) => {
      navigate(`/dataview/${id}`);
  }
  const [approvedone, setapprovedone] = useState(false);
  const [rejectedone, setrejectedone] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <>
    
      <div style={{display:`${!display ?"" : "none"}`}}>
        {!approvedone && !rejectedone ? (
          <div
            class="w-full max-w-90 mt-2 apprrej "
            style={{
              border: "1px solid #E6E6E6",
              backgroundColor: `${parseInt(item?.pending_day.match(/(\d+)/))<7?"white":"#FFF3E2" }` ,
              height: "106px",
              borderLeft: "3px solid #E7A543",
              borderRadius: "4px",
            }}
          >
            
            <div className=" tablex">
              <div>
                <p
                  className=" pl-20 Kris-Ltd pt-3"
                  style={{ color: "#929292", fontWeight: 400 }}
                >
                  <span style={{ fontWeight: 600 }}>Requested on :</span>
                  {moment(item.submittedDate).format("DD MMMM, YYYY")}
                </p>
                <p className="text-start pb-4 pl-20 Kris-Ltd text-black">
                  {item?.companyName}
                </p>
              </div>
              <p className="sincedays">{item?.pending_day}</p>

        



              <div className="flex mr-8 flexing">
              <div className="showdatabtn">

                <button
                  className="viewcomment"
                  style={{ background: "#FDFDFD", border: "1px solid #EAEBEF" }}
                  onClick={() => handlenavigate(item.userId)}
                >
                  View Scope data
                </button>
                </div>
                <p
                  className="d-flex align-items-center   viewcomment"
                  style={{ background: "#FDFDFD", border: "1px solid #EAEBEF" }}
                  onClick={() => {
                    // setapprovedone(true);
                    setwebid(item.id);
                    setOpen(true);
                  }}
                >
                  <img src={approve} alt="..." className="mr-2" /> Approve
                </p>
                <p
                  className="d-flex align-items-center  viewcomment"
                  style={{ background: "#FDFDFD", border: "1px solid #EAEBEF" }}
                  onClick={() => {
                    // setrejectedone(true);
                    setwebid(item.id);
                    setTurn(true);
                  }}
                >
                  {" "}
                  <img src={reject} alt="..." className="mr-2" /> Reject
                </p>
                <div className="showthreedot " style={{marginLeft:'12px'}}>
                              <div className="dropdown threedot">
                                <ul
                                  className={`dropbtnicon icons icones ${isDropdownVisible ? 'showLeft' : ''}`}
                                  onClick={toggleDropdown}
                                >
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                                <div
                                  id="myDropdown"
                                  className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}
                                  style={{
                                    background: "#FDFDFD",

                                  }}
                                >
                                  <div className="viewomment sizing"  onClick={() => handlenavigate(item.userId)}
                                  >
                                    View Scope data
                                  </div>
                                
                                </div>
                              </div>
                            </div>
              </div>
              
            </div>
          </div>
        ) : null}

        {approvedone ? (
          <div
            class={`w-full max-w-90 mt-2  d-flex align-items-center justify-content-center boxer ${
              approved ? "visible" : ""
            }`}
            style={{
              backgroundColor: "#158D47",
              height: "106px",
              borderRadius: "8px",
              height: "106px",
              borderRadius: "4px",
            }}
          >
            <img src={done} alt="..." />
            <h2
              className="d-flex alihn-items-center ms-2 box-inner"
              style={{
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "0px",
              }}
            >
              Approved
            </h2>
          </div>
        ) : null}
        {rejectedone ? (
          <div
            class={`w-full max-w-90 mt-2  d-flex align-items-center justify-content-center boxer ${
              rejected ? "visible" : ""
            }`}
            style={{
              backgroundColor: "#E86F55",
              height: "106px",
              borderRadius: "8px",
              height: "106px",
              borderRadius: "4px",
            }}
          >
            <img src={block} alt="..." />
            <h2
              className="d-flex alihn-items-center ms-2"
              style={{
                color: "#FFFFFF",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "0px",
              }}
            >
              Rejected
            </h2>
          </div>
        ) : null}
      </div>

      <ViewcommentModel
      setdisplay={setdisplay}
        webid={webid}
        setOpen={setOpen}
        open={open}
        handleApprove={handleApprove}
        request={request}
        datas={data}
        setApproved={setapprovedone}
      />
      <ViewCancelModel
      setdisplay={setdisplay}
        lModel
        webid={webid}
        setOpen={setTurn}
        open={turn}
        hanldeCancel={hanldeCancel}
        request={request}
        datas={data}
        setRejected={setrejectedone}
      />
    </>
  );
};

export default PendingRequestItem;

import React, { useEffect, useState } from "react";
import approve from "../../Assets/image/icons/approve.svg";
import reject from "../../Assets/image/icons/reject.svg";
import done from "../../Assets/image/icons/done.svg";
import block from "../../Assets/image/icons/block.svg";
import { useNavigate } from "react-router-dom";
import ViewcommentModel from "./ViewcommentModel";
import ViewCancelModel from "../Common/ViewCancelModel";
import ViewdataModel from "../commoncomonent/ViewdataModel";
import { REQUEST_STATUS } from "../../Utils/services";
import moment from "moment";

const Rejectedsuperadmin = ({ inputValue }) => {
  const [data, setdata] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [turn, setTurn] = useState(false);
  const [deny, setdeny] = useState(false);
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [webid, setwebid] = useState();
  const [exc, setexc] = useState();
  const [isDropdownVisible, setIsDropdownVisible] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);

  const request = async () => {
    const result = await REQUEST_STATUS();
    const filteredData = await result.res.data[0].filter(
      (item) => item.status === "Reject" && item.rejectedBy_SuperAdmin !== null
    );
    setdata(filteredData);
    setexc(filteredData);
    setIsDropdownVisible(Array(filteredData.length).fill(false));

  };
  useEffect(() => {
    request();
  }, []);

  const handlesearch = () => {
    const filterArray = exc?.filter((e) => {
      return e.companyName.toLowerCase().includes(inputValue.toLowerCase());
    });

    setdata(filterArray);
  };
  useEffect(() => {
    handlesearch();
  }, [inputValue]);

  const handlenavigate = (id) => {
    // navigate("/dataview")
    navigate(`/dataview/${id}`);
    // console.log(id,"idddd");
  };
  const View = () => {
    const item = JSON.parse(localStorage.getItem("userdata"));
    if (item.Admin === 2) {
      return true;
    }
    return false;
  };
  // const toggleDropdown = () => {
  //   setIsDropdownVisible(!isDropdownVisible);
  // };

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
      {data?.length > 0 ? (
        data?.map((item,index) => {
          if (item.status === "Reject") {
            return (
              <div>
                {!approved && !rejected ? (
                  <div
                    class={
                      View()
                        ? "w-full max-w-90 mt-2 superreject qcadmin"
                        : "w-full max-w-90 mt-2 superrejectagain qcadmin"
                    }
                  >
                    <div className="qcboad">
                      <div>
                        <p
                          className="pl-20 Kris-Ltd pt-4 text-start"
                          style={{ color: "#929292", fontWeight: 400 }}
                        >
                          Rejected by{" "}
                          <span style={{ fontWeight: 600 }}>
                            {item?.rejectedBy}
                          </span>{" "}
                          on:
                          {moment(item.submittedDate).format("DD MMMM, YYYY")}
                        </p>
                        <p
                          className="text-start pb-4 pl-20 Kris-Ltd text-black"
                          style={{ fontSize: "14px", fontWeight: 600 }}
                        >
                          {item?.companyName}
                        </p>
                      </div>
                      <div className="flex mr-12 flexing flexting">
                        {View() ? (
                          <>
                            <div className="showthreedot">
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
                                  <div className="viewomment sizing" onClick={() => {
                                    setdeny(true);
                                    setwebid(item.userId);
                                  }}
                                  >
                                    View Comment
                                  </div>
                                  <div
                                    className="sizing"
                                    style={{


                                      marginTop: '12px'
                                    }}
                                    onClick={() => handlenavigate(item.userId)}
                                  >
                                    View Show data
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="showdatabtn">
                              <button
                                className="viewcomment"
                                style={{
                                  background: "#FDFDFD",
                                  border: "1px solid #EAEBEF",
                                }}
                                onClick={() => {
                                  setdeny(true);
                                  setwebid(item.userId);
                                }}
                              >
                                View Comment
                              </button>
                              <button
                                className="viewcomment"
                                style={{
                                  background: "#FDFDFD",
                                  border: "1px solid #EAEBEF",
                                }}
                                onClick={() => handlenavigate(item.userId)}
                              >
                                View Scope data
                              </button>
                            </div>

                          </>
                        ) : (
<>
                          <div className="showthreedot">
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
                                padding:'0px'

                              }}
                            >
                           <button
                            className="viewcomment"
                            style={{
                              background: "#FDFDFD",
                            }}
                            onClick={() => {
                              setdeny(true);
                              setwebid(item.userId);
                            }}
                          >
                            View Comment
                          </button>
                            </div>
                          </div>
                        </div>

                        <div className="showdatabtn">

                          <button
                            className="viewcomment"
                            style={{
                              background: "#FDFDFD",
                              border: "2px solid #EAEBEF",
                            }}
                            onClick={() => {
                              setdeny(true);
                              setwebid(item.userId);
                            }}
                          >
                            View Comment
                          </button>
                          </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}
                {approved ? (
                  <div
                    class="w-full max-w-90 mt-2  d-flex align-items-center justify-content-center"
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
                      className="d-flex alihn-items-center ms-2"
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
                {rejected ? (
                  <div
                    class="w-full max-w-90 mt-2  d-flex align-items-center justify-content-center"
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
            );
          }
        })
      ) : (
        <div>
          <div
            class="w-full max-w-90 mt-2  d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "",
              border: "1px solid #E6E6E6",
              height: "106px",

              borderRadius: "4px",
            }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <p className="sincedays"> No Records Found</p>
            </div>
          </div>
        </div>
      )}

      <ViewcommentModel
        webid={webid}
        setOpen={setOpen}
        open={open}
        setApproved={setApproved}
      />
      <ViewCancelModel
        webid={webid}
        setOpen={setTurn}
        open={turn}
        setRejected={setRejected}
      />
      <ViewdataModel webid={webid} setOpen={setdeny} open={deny} />
    </>
  );
};
export default Rejectedsuperadmin;

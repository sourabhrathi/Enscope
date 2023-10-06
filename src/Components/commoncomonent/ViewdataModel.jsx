import React, { useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Swal from "sweetalert2";
import { ViewComment } from "../../Utils/services";
import moment from "moment";

export default function ViewdataModel({ webid, open, setOpen }) {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  const request = async () => {
    const result = await ViewComment(webid);
    setValue(result?.res[0]);
    setData(result?.res[0]?.user);
  };

  useEffect(() => {
    request();
  }, [webid]);

  const handleallow = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title:
        '<span style="font-size: 14px">Editing access has been allowed</span>',
    });
    setOpen(false);
  };

  return (
    <>
      <React.Fragment>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 650,
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
            }}
          >
            <ModalClose
              variant="outlined"
              sx={{
                top: "calc(-1/4 * var(--IconButton-size))",
                right: "calc(-1/4 * var(--IconButton-size))",
                boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                borderRadius: "50%",
                border: "#808191",
                border: 2,
                bgcolor: "white",
                color: "#808191",
              }}
            />
            <div id="modal-desc" textColor="text.tertiary">
              <div
                className="peopleaddmodel "
                style={{ padding: "24px 16px", height: "none" }}
              >
                <div className="peoplelabin ">
                  <h2 style={{ fontSize: "22px" }}>View Comment</h2>
                  <div className="">
                    <div className="row ">
                      <div
                        className="col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12 mt-0"
                        style={{ borer: "8px" }}
                      >
                        <div>
                          <p
                            style={{
                              fontFamily: "Inter",
                              fontWeight: "600",
                              fontSize: "14px",
                              color: "#929292",
                              paddingTop: "15px",
                            }}
                          >
                            {data?.name} .<span style={{fontWeight:400}}>{value?.assessment_year}</span>
                          </p>
                          <p>
                            
                          </p>
                          <div className="d-flex mt-3">
                            <input
                              style={{
                                background: "white",
                                borderRadius: "25px",
                              }}
                              className="form-control me-3"
                              type="email"
                              placeholder={data?.email}
                              disabled
                            />
                            <input
                              style={{
                                background: "white",
                                borderRadius: "25px",
                              }}
                              className="form-control"
                              type="phone"
                              placeholder={data?.mobile_no}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {value?.rejectedBy_QCAdmin === "RejectQC" ? (
                  <div
                    className="mt-3"
                    style={{
                      backgroundColor: "#FFE2E2",
                      padding: "16px",
                      border: "1px solid #E6E6E6",
                      borderRadius: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#929292",
                      }}
                    >
                      Rejected by <span style={{fontWeight:600}}>{value?.name_QCAdmin}</span>  on   {moment(value?.rejected_date).format("DD MMMM, YYYY")}{" "}
                    
                    </p>
                    <p className="pt-2" style={{ fontSize: "14px" }}>
                      {value?.comment_QCAdmin}
                    </p>
                  </div>
                ) : value?.approvedBy_QCAdmin === "ApprovalQC" ? (
                  <div
                    className="mt-3"
                    style={{
                      backgroundColor: "#F5FEF2",
                      padding: "16px",
                      borderRadius: "8px",
                      border: "1px solid #E6E6E6",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#929292",
                      }}
                    >
                      Accepted by <span style={{fontWeight:600}}>{value?.name_QCAdmin} </span>  on {moment(value?.approval_date).format("DD MMMM, YYYY")}{" "}
                    </p>
                    <p className="pt-2" style={{ fontSize: "14px" }}>
                      {value?.comment_QCAdmin}
                    </p>
                  </div>
                ) : (
                  ""
                )}

                {/* Admin Comment  */}

                {value?.rejectedBy_SuperAdmin === "RejectSUPER" ? (
                  <div
                    className="mt-3"
                    style={{
                      backgroundColor: "#FFE2E2",
                      padding: "16px",
                      border: "1px solid #E6E6E6",
                      borderRadius: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#929292",
                      }}
                    >
                      Rejected by  <span style={{fontWeight:600}}>{value?.name_SuperAdmin} </span> on  {moment(value?.rejected_date).format("DD MMMM, YYYY")}{" "}
                    </p>
                    <p className="pt-2" style={{ fontSize: "14px" }}>
                      {value?.comment_superAdmin }
                    </p>
                  </div>
                ) : value?.approvedBy_SuperAdmin === "ApprovalSUPER" ? (
                  <div
                    className="mt-3"
                    style={{
                      backgroundColor: "#F5FEF2",
                      padding: "16px",
                      borderRadius: "8px",
                      border: "1px solid #E6E6E6",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#929292",
                      }}
                    >
                      Accepted by <span style={{fontWeight:600}}>{value?.name_SuperAdmin} </span>on {moment(value?.approval_date).format("DD MMMM, YYYY")}{" "}
                    </p>
                    <p className="pt-2" style={{ fontSize: "14px" }}>
                      {value?.comment_superAdmin}
                    </p>
                  </div>
                ) : (
                  ""
                )}

                {/* Admin comment End  */}
              </div>
            </div>
          </Sheet>
        </Modal>
      </React.Fragment>
    </>
  );
}

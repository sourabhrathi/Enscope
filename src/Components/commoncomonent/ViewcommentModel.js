import * as React from "react";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import approve from "../../Assets/image/icons/approve.svg";
import { STATUSUPDATE } from "../../Utils/services";
import moment from "moment";

export default function ViewcommentModel({
  open,
  webid,
  setOpen,
  setApproved,
  request,
  datas,
  setdisplay,
}) {
  const [data, setdata] = React.useState();
  const user = JSON.parse(localStorage.getItem("userdata"));
  const date = moment().format("YYYY-MM-DD");

  const item = JSON.parse(localStorage.getItem("userdata"));

  const updatesatus = async () => {
    if (item?.Admin === 1) {
    }

    const result = await STATUSUPDATE(
      {
        rejectBy: user.name,
        status: "Approval",
        approval_date: date,
        ...(item?.Admin === 1
          ? {
              comment_superAdmin: data,
              approvedBy_SuperAdmin: "ApprovalSUPER",
              name_SuperAdmin: user.name,
            }
          : {
              comment_QCAdmin: data,
              approvedBy_QCAdmin: "ApprovalQC",
              name_QCAdmin: user.name,
            }),
      },
      webid
    );
    if (result) {
      setOpen(false);
      setApproved(true);
      // sethide(webid)
      setTimeout(() => {
        // request()
        setdisplay(true);
        setApproved(false);
      }, 2200);
      setTimeout(() => {
        request()
      }, 2500);
    }
  };

  const hanldeCancel = () => {
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
                            width: {
                                xs: '90%', // Default for extra small screens
                                sm: '90%', // Default for small screens
                                md: '640px',   // Width for medium screens
                                lg: '650px',   // Width for large screens
                              },
                              borderRadius: {
                                xs: 'none', // Default for extra small screens
                                sm: 'none', // Default for small screens
                                md: 'md',   // Border radius for medium screens
                                lg: 'md',   // Border radius for large screens
                              },
                              p: {
                                xs: 2,      // Padding for extra small screens
                                sm: 2,      // Padding for small screens
                                md: 3,      // Padding for medium screens
                                lg: 3,      // Padding for large screens
                              },
                              boxShadow: {
                                xs: 'none', // No shadow for extra small screens
                                sm: 'none', // No shadow for small screens
                                md: 'md',   // Shadow for medium screens
                                lg: 'lg',   // Shadow for large screens
                              },
                            
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
              <div className="peopleaddmodel ">
                <div className="peoplelabin ">
                  <h2 style={{ fontSize: "22px" }} className="d-flex">
                    <img src={approve} alt="..." className="mr-2" />
                    Approve request?
                  </h2>
                  <div className="">
                    <h5
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#929292",
                        paddingTop: "15px",
                      }}
                    >
                      {datas?.companyName}
                    </h5>
                    <div className="row ">
                      <div
                        className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3"
                        style={{ borer: "8px" }}
                      >
                        <div>
                          <textarea
                            rows="4"
                            cols="20"
                            name="comment"
                            style={{
                              border: "1px solid #E6E6E6",
                              borderRadius: "8px",
                              height: "96px",
                              width: "100%",
                              background: "#FFFFFF",
                              padding: "10px",
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "#929292",
                            }}
                            onChange={(e) => setdata(e.target.value)}
                            placeholder="Write your comment here"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="d-flex align-items-center justify-content-end "
                style={{
                  backgroundColor: "#F7F7F7",
                  height: "70px",
                  padding: "0px 16px",
                }}
              >
                <button
                  className="modelcancel mb-0 d-flex align-items-center justify-content-center me-2"
                  style={{ border: "1px solid" }}
                  onClick={hanldeCancel}
                >
                  Cancel
                </button>
                <button
                  className="modelbottom mb-0 d-flex align-items-center justify-content-center "
                  onClick={updatesatus}
                  disabled={!data?.length > 0}
                >
                  Approve
                </button>
              </div>
            </div>
          </Sheet>
        </Modal>
      </React.Fragment>
    </>
  );
}

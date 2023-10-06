import * as React from "react";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Swal from 'sweetalert2';
import { UPDATEEDIT } from "../../Utils/services";
import moment from "moment";

export default function Editingrequestmodel({ open, setOpen, webid ,request,datas}) {

  const user = JSON.parse(localStorage.getItem('userdata'))
  const date = moment().format('YYYY-MM-DD')
  // console.log(webid, 'user check')

  const updatesatus = async () => {
    const result = await UPDATEEDIT({
      "editRequest": 0,
      "editRequestApprovedBy": user.name,
      // "status": "Approval",
      // "approval_date": date,
      
    }, webid)
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: '<span style="font-size: 14px">Editing access has been allowed</span>',
    })
    setOpen(false);
    request()
  }

  const hanclecancel = () => {
    setOpen(false)
  }

  return (
    <>
      <React.Fragment>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={() => setOpen(false)}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 650,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}
          >
            <ModalClose
              variant="outlined"
              sx={{
                top: 'calc(-1/4 * var(--IconButton-size))',
                right: 'calc(-1/4 * var(--IconButton-size))',
                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                borderRadius: '50%',
                border: '#808191',
                border: 2,
                bgcolor: 'white',
                color: '#808191'
              }}
            />
            
            <div id="modal-desc" textColor="text.tertiary">
              <div className="alloweddit ">
                <div className="peoplelabin ">
                  <h2 style={{ fontSize: '22px', color: '#223F63', fonWeight: '600', fontFamily: 'Inter' }}>Allow Editing?</h2>
                  <div className="">
                    <div className="row mt-3">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3" style={{ borer: '8px' }}>
                        <div style={{ fontSize: '16px', fontWeight: '400', color: '#929292' }}>
                          Are you sure you want to allow <span style={{ color: '#223F63' }}> {datas?.companyName}</span> to edit <span style={{ color: '#223F63' }}>{datas?.approval_date}</span>data?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end " style={{ backgroundColor: '#F9FBFC', height: '70px', padding: '0px 14px' }}>
                <button className="modelcancel mb-0 d-flex align-items-center justify-content-center me-3" style={{ border: '1px solid' }} onClick={hanclecancel}>Cancel</button>
                <button className="modelbottom mb-0 d-flex align-items-center justify-content-center" onClick={updatesatus}>Allow</button>
              </div>
            </div>
          </Sheet>
        </Modal>
      </React.Fragment>
    </>
  );
}

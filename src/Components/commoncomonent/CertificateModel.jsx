import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Swal from 'sweetalert2';
import { Certificateupload } from "../../Utils/services";
import { useDropzone } from 'react-dropzone'
import attachfile from "../../Assets/image/icons/upload.svg";
import task from "../../Assets/image/icons/task.svg"
import closebtn from "../../Assets/image/icons/close.svg"

export default function CertificateModel({ open, setOpen, webid }) {
  const [files, setFiles] = useState([]);

  const updatesatus = async () => {
    const formData = new FormData();
    formData.append('assurance_file', files[0]);

    const result = await Certificateupload(formData, webid);
    // console.log(result);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'success',
      title: result.message
    });
    setOpen(false);
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: ["application/pdf", "image/jpeg"],
    onDrop: (acceptedFiles) => {
      setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    }
  });

  const deleteFile = (index) => {
    setFiles(prevFiles => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  }
  const containerClass = files.length > 3 ? 'file-container scroll-y' : 'file-container';
  const handleclose = () => {
    setOpen(false)
  }

  return (
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
            <div className="ReportModel">
              <div className="peoplelabin">
                <h2 style={{ fontSize: '22px', color: '#223F63', fonWeight: '600', fontFamily: 'Inter' }}>Upload Certificate</h2>
                <div className="">
                  <div className="row" style={{marginTop:'2.5rem'}}>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-2" style={{ borer: '8px' }}>
                      <div className="d-flex align-items-center justify-content-center uploadfile">
                        <div>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} name="files" multiple />
                            {isDragActive ? (
                              <p>Drop files here</p>
                            ) : (
                              <>
                                <div className="d-flex justify-content-center browsertext">
                                  <img src={attachfile} alt=".." className="ms-3" />
                                </div>
                                <div className="mt-2">
                                  <p className="dragtext">Drag and drop or choose files to upload</p>
                                </div>
                              </>
                            )}
                            {isDragReject && <p>File type not accepted, sorry!</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className={containerClass}>
                      {files.map((file, index) => (
                        <div
                          className="d-flex align-items-center justify-content-between col-md-12 filesaver mt-2"
                          key={file.length + 1}
                        >
                          <div className="d-flex align-items-center mt-1">
                            <img src={task} alt="..." />
                            <div className="ms-3">
                              <p className="d-flex align-items-center text-center">{file.name}</p>
                            </div>
                          </div>
                          <img
                            src={closebtn}
                            alt="..."
                            onClick={() => deleteFile(index)}
                            style={{ cursor: 'pointer' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end" style={{ height: '70px', padding: '0px 14px',marginTop:'24px' }}>
              <button className="modelcancel mb-0 d-flex align-items-center justify-content-center me-3" style={{ border: '1px solid #158D47', color: '#158D47' }} onClick={() => handleclose()}>Cancel</button>
              {files.length <= 0 ?
                <button className="modelbottom mb-0 d-flex align-items-center justify-content-center" disabled>Upload</button>
                :
                <button className="modelbottom mb-0 d-flex align-items-center justify-content-center" onClick={updatesatus}>Upload</button>
              }
            </div>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

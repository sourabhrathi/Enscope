import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Swal from 'sweetalert2';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { UserCreate } from "../../Utils/services";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import arrowdown from "../../Assets/image/icons/arrowdown.svg"

export default function Usermodel({ open, setOpen, request }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});
    //   const form = new FormData();

    const onSubmit = async (evt) => {
        // form.append("name", formData.name);
        // form.append("email", formData.email);
        // form.append("role", formData.role);
        // form.append("mobile_no", 8089089080);

        const digitsToRemove = 2;
        const upphoneNumber = formData.mobile_no.substring(digitsToRemove);
        const data =
        {
            "name": formData.name,
            "email": formData.email,
            "password": "sourabhrathi123",
            "company_name": "",
            "company_type": "",
            "mobile_no": formData.mobile_no,
            "telephone_no": "",
            "designation": "",
            "verificationCode": 0,
            "expiresAt": "",
            "address": "",
            "gst_no": "",
            "isEmailVerified": true,
            "payment_detail": 0,
            "userType": 0,
            "role": formData.role,
            "IsAdmin": 1,

        }
        // console.log(data, "data")
        try {
            const result = await UserCreate(data);
            reset({

                name: "",
                role: "",
                mobile_no: "",
            });
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
                title: '<span style="font-size: 14px">User create successfully</span>',
            })

        }
        catch (error) {
            //   console.log(error.message);
            toast.error(error.message);
        }
        setOpen(false)
        request()
    };

    const onInputChange = (evt) => {
        let { name, value } = evt.target;
        if (name != "mobile_no") {
            setFormData({ ...formData, [name]: value });
        }
    };

    const closemodel = () => {
        setOpen(false)
    }

    const handlePhoneChange = (value) => {
        setFormData({ ...formData, ["mobile_no"]: value });
        // console.log(value,"duyftyeour yf");
    };

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
                            <div className="peopleaddmodell ">
                                <div className="peoplelabin ">
                                    <h2 className="adduser" >Add Staff</h2>
                                    <form onSubmit={handleSubmit(onSubmit)} method="post" onChange={onInputChange} >
                                        <div className="">
                                            <div className="row pt-12">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="">
                                                        <p className="modelpara">Full Name</p>
                                                        <input type="text" className="form-control mt-2" placeholder="Enter full name" name="name"   {...register("name", { required: true, maxLength: 20 })} />
                                                        {errors?.name?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                                    <div className="mdlcase">
                                                        <p className="modelpara">Mobile Number</p>
                                                        <ReactPhoneInput
                                                            name="mobile_no"
                                                            country={'in'}
                                                            placeholder="Enter phone number"
                                                            onChange={handlePhoneChange}
                                                            className="mt-2"
                                                        />

                                                        {/* {errors?.mobile_no?.type === "required" && <p className="validationform">This field is required</p>} */}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 modelnamelast mt-4">
                                                    <div className="select-container">
                                                        <p className="modelpara">Role</p>
                                                        <div className="select-wrapper">
                                                            <select className="form-control mt-2" name="role" {...register("role", { required: true })}>
                                                                <option value="" className="form-control " >Select role</option>
                                                                <option value="QC Admin">QC Admin</option>
                                                                <option value="Super Admin">Super Admin</option>
                                                            </select>
                                                            <img src={arrowdown} alt="..." className="ml-1"></img>
                                                        </div>
                                                        {errors?.role?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                                                    <div>
                                                        <p className="modelpara">Email ID</p>
                                                        <input
                                                            className="form-control mt-2"
                                                            type="email"
                                                            placeholder="Enter Email ID "
                                                            name="email"
                                                            {...register("email", { required: true, maxLength: 20 })}
                                                        />
                                                        {errors?.email?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-end pt-5 mt-5" >
                                                    <button className="modelcancel mb-0 d-flex align-items-center justify-content-center me-2" style={{ border: '1px solid' }} onClick={closemodel}>Cancel</button>
                                                    <button className="modelbottom mb-0 d-flex align-items-center justify-content-center " onClick={onSubmit}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Sheet>
                </Modal>
            </React.Fragment>
        </>
    );
}
import React, { useState } from 'react'
import InnerHeader from '../../Components/Common/InnerHeader'
import Backbtn from '../../Components/Common/Backbtn'
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { UpdateUser } from '../../Utils/services';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import arrowdown from "../../Assets/image/icons/arrowdown.svg"
    
const Edituser = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [formData, setFormData] = useState(location?.state?.props);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const form = new FormData();

    const onSubmit = async (evt) => {
        const data =
        {
            "name": formData.name,
            "mobile_no": formData.mobile_no,
            "isAdmin": formData.isAdmin,
            "email": formData.email,
            "id": formData.id,
            
        }
        const id = formData?.id
        // console.log(data, "data")
        try {
            const result = await UpdateUser(data);
            reset({
                id: "",
                name: "",
                mobile_no: "",
                isAdmin: "",
                email: "",

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
                title: '<span style="font-size: 14px">User update successfully</span>',
            })
            navigate('/staff')
        }
        catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };
             
    const onInputChange = (evt) => {
        let { name, value } = evt.target;
        setFormData({ ...formData, [name]: value });
    };

    // const handlePhoneChange = (value) => {
    //     console.log(value);
    // };

    return (
        <>
            <div>
                <InnerHeader />
            </div>
            <div className='mainWrapper'>
                <div className=''>
                    <Backbtn title="Edit Staff" />
                </div>
                <form method="put" onSubmit={handleSubmit(onSubmit)} onChange={onInputChange} >
                    <div className="d-flex align-items-center justify-content-end pt-4" >
                        <button className="modelbottom mb-0 d-flex align-items-center justify-content-center " type="submit">Save</button>
                    </div>
                    <div className='pt-2'>
                        <div className="">
                            <div className="row ">
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12">
                                    <div className="">
                                        <p className='formtext'>Full Name</p>
                                        <input type="text" className="form-control mt-2 pt-1" placeholder="Enter full name" name="name" value={formData?.name} />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 ">
                                    <div className="">
                                        <p className='formtext'>Mobile Number</p>

                                        <ReactPhoneInput
                                            defaultCountry={'us'}
                                            placeholder="Enter phone number"
                                            // onChange={handlePhoneChange}
                                            className="mt-2"
                                            name="mobile_no"
                                            value={formData?.mobile_no}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 modelnamelast mt-3">
                                    {/* <div>
                                        <p>Role</p>
                                        <input type="text" className="form-control mt-3" placeholder="Select role" name="isAdmin" value={formData?.isAdmin === 1 ? "Super Admin" : "QC Admin"} />
                                    </div> */}
                                    <div className="select-container">
                                        <p className='formtext'>Role</p>
                                        <div className="select-wrapper">
                                        <select className="form-control mt-2 pt-1" name="isAdmin" {...register("isAdmin", { required: true })}>
                                        <option value="0" selected={formData?.isAdmin === 0}>QC Admin</option>
                                        <option value="1" selected={formData?.isAdmin === 1}>Super Admin</option>
                                       </select>
                                       
                                            <img src={arrowdown} alt="..." className="ml-1"></img>
                                        </div>
                                        {errors?.role?.type === "required" && <p className="validationform">This field is required</p>}
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 mt-3">
                                    <div>
                                        <p className='formtext'>Email ID</p>
                                        <input
                                            className="form-control mt-2 pt-1"
                                            type="text"
                                            placeholder="Enter Email ID "
                                            name="email"
                                            value={formData?.email}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Edituser
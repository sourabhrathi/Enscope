import React, { useState } from 'react'
import InnerHeader from '../../Components/Common/InnerHeader'
import Backbtn from '../../Components/Common/Backbtn'
import 'react-phone-input-2/lib/style.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { ScopeEmmissionUpdate } from '../../Utils/services';
import { toast } from 'react-toastify';
import arrowdown from "../../Assets/image/icons/arrowdown.svg"

const Editmeterial = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [formData, setFormData] = useState(location?.state?.props);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const form = new FormData();

    const onSubmit = async (evt) => {
        const data =
        {
            "name": formData.name,
            "category": formData.category,
            "scope_type": formData.scope_type,
            "value": formData.value,
            "unit": formData.unit
        }
        const id = formData?.id
        // console.log(data, "data")
        try {
            const result = await ScopeEmmissionUpdate(data, id);
            reset({
                id: "",
                name: "",
                category: "",
                scope_type: "",
                value: "",
                unit: ""
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
            navigate('/settings')
        }
        catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    const onInputChange = (evt) => {
        let { name, value } = evt.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <div>
                <InnerHeader />
            </div>
            <div className='mainWrapper'>
                <div className=''>
                    <Backbtn title="Edit" />
                </div>
                <form method="put" onSubmit={handleSubmit(onSubmit)} onChange={onInputChange} >     

                    <div className="d-flex align-items-center justify-content-end pt-12" >
                        <button className="modelbottom mb-0 d-flex align-items-center justify-content-center " type="submit">Save</button>
                    </div>
                    <div className='pt-2'>
                        <div className="">
                            <div className="row ">
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12">
                                    <div className="">
                                        <p>Name</p>
                                        <input type="text" className="form-control mt-3" placeholder="Enter name here" name="name" value={formData?.name}  {...register("name", { required: true, maxLength: 20 })} />
                                        {errors?.name?.type === "required" && <p className="validationform">This field is required</p>}
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 ">
                                    <div className="">
                                        <p>Category</p>
                                        <input type="text" className="form-control mt-3" placeholder="Enter category" name="category" value={formData?.category} {...register("category", { required: true, maxLength: 20 })} />
                                        {errors?.category?.type === "required" && <p className="validationform">This field is required</p>}
                                    </div>
                                </div>
                                {/* <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 modelnamelast mt-3">
                                    <div>
                                        <p>Scope_type</p>
                                        <input type="text" className="form-control mt-3" placeholder="Select role" name="scope_type" value={formData?.scope_type} {...register("scope_type", { required: true })} />
                                        {errors?.scope_type?.type === "required" && <p className="validationform">This field is required</p>}
                                    </div>
                                </div> */}
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 modelnamelast mt-3">
                                                    <div className="select-container">
                                                        <p >Scope_type</p>
                                                        <div className="select-wrapper">
                                                            <select className="form-control mt-3 pt-1" name="scope_type"  value={formData?.scope_type} {...register("scope_type", { required: true })}>
                                                                {/* <option >{formData?.scope_type}</option> */}
                                                                <option value="1">scope 1</option>
                                                                <option value="2">scope 2</option>
                                                                <option value="3">scope 3</option>
                                                            </select>
                                                            <img src={arrowdown} alt="..." className="ml-1"></img>
                                                        </div>
                                                        {errors?.scope_type?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 mt-3">
                                    <div>
                                        <p>Value</p>
                                        <input
                                            className="form-control mt-3"
                                            type="text"
                                            placeholder="Enter value here"
                                            name="value"
                                            value={formData?.value}
                                            {...register("value", { required: true, maxLength: 20 })}
                                        />
                                        {errors?.value?.type === "required" && <p className="validationform">This field is required</p>}
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 col-12 mt-3">
                                    <div>
                                        <p>Unit</p>
                                        <input
                                            className="form-control mt-3"
                                            type="text"
                                            placeholder="Enter unit"
                                            name="unit"
                                            value={formData?.unit}
                                            {...register("unit", { required: true, maxLength: 20 })}
                                        />
                                        {errors?.unit?.type === "required" && <p className="validationform">This field is required</p>}
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

export default Editmeterial
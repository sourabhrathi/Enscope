import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Swal from 'sweetalert2';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { EmissionStoreData } from "../../Utils/services";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import arrowdown from "../../Assets/image/icons/arrowdown.svg"

export default function Meterialmodel({ open, setOpen }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});
      const form = new FormData();

    const onSubmit = async (evt) => {
        const data =
        {
            "id":formData.id,
            "name" :formData.name,
            "category": formData.category,
            "scope_type": formData.scope_type,
            "value": formData.value,
            "unit": formData.unit

        }
        
        // console.log(data, "data")
        try {
            const result = await EmissionStoreData(data);
            reset({
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
                title: '<span style="font-size: 14px">User create successfully</span>',
            })
            setOpen(false)
        }
        catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    const onInputChange = (evt) => {
        let { name, value } = evt.target;
     
            setFormData({ ...formData, [name]: value });
        
    };

    const closemodel = () => {
  
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
                            maxWidth: {
                                xs: '90%', // Default for extra small screens
                                sm: '90%', // Default for small screens
                                md: 640,   // Width for medium screens
                                lg: 650,   // Width for large screens
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
                                    <h2 style={{ fontSize: '22px' }}>Add Fuel</h2>
                                    <form  method="post" onSubmit={handleSubmit(onSubmit)} onChange={onInputChange} >
                                        <div className="">
                                            <div className="row pt-3 mt-5">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                    <div className="">
                                                        <p className="formtext">Name</p>
                                                        <input type="text" className="form-control mt-2 pt-1" placeholder="Enter name here" name="name"   {...register("name", { required: true, maxLength: 20 })} />
                                                        {errors?.name?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                                    <div className="mdlcase">
                                                        <p className="formtext"> Category</p>
                                                        <input type="text" className="form-control mt-2 pt-1" placeholder="Enter category" name="category"   {...register("category", { required: true, maxLength: 20 })} />
                                                        {errors?.category?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 modelnamelast mt-3">
                                                    <div className="select-container">
                                                        <p className="formtext">Scope_type</p>
                                                        <div className="select-wrapper">
                                                            <select className="form-control mt-2 pt-1" name="scope_type" {...register("scope_type", { required: true })}>
                                                                <option value="">Select type</option>
                                                                <option value="1">scope 1</option>
                                                                <option value="2">scope 2</option>
                                                                <option value="3">scope 3</option>
                                                            </select>
                                                            <img src={arrowdown} alt="..." className="ml-1"></img>
                                                        </div>
                                                        {errors?.scope_type?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                                                    <div>
                                                        <p className="formtext">Value</p>
                                                        <input
                                                            className="form-control mt-2 pt-1"
                                                            type="text"
                                                            placeholder="Enter value here"
                                                            name="value"
                                                            {...register("value", { required: true, maxLength: 20 })}
                                                        />
                                                        {errors?.value?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-3">
                                                    <div>
                                                        <p className="formtext">Unit</p>
                                                        <input
                                                            className="form-control mt-2 pt-1"
                                                            type="text"
                                                            placeholder="Enter unit"
                                                            name="unit"
                                                            {...register("unit", { required: true, maxLength: 20 })}
                                                        />
                                                        {errors?.unit?.type === "required" && <p className="validationform">This field is required</p>}
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-end pt-4 mt-5" >
                                                    <button className="modelcancel mb-0 d-flex align-items-center justify-content-center me-2" style={{ border: '1px solid' }} onClick={closemodel}>Cancel</button>
                                                    <button className="modelbottom mb-0 d-flex align-items-center justify-content-center " type="submit">Save</button>
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
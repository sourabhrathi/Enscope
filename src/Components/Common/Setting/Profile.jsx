import React, { useEffect, useState } from 'react'
import profileIcon from "../../../Assets/images/setting/person_filled.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { editProfile, getViewProfile } from '../../../Utils/services';
import Spinner from '../Spinner';

const Profile = () => {
    const [formData, setFormData] = useState({ fullName: "", designation: "", address: "", gstNo: "", companyname: "", email: "", companytype: "", password: "" });
    const [phoneData, setPhoneData] = useState();
    const [tellyphoneData, setTellyPhoneData] = useState();
    const [loading, setloading] = useState(false)


    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const profileApi = async () => {
        setloading(true)
        const result = await getViewProfile();
        setFormData({
            fullName: result.res.name, designation: result.res.designation, address: result.res.address,
            gstNo: result.res.gst_no, companyname: result.res.company_name, email: result.res.email,
            companytype: result.res.company_type
        })

        setPhoneData(result.res.mobile_no)
        setTellyPhoneData(result.res.telephone_no)
        setloading(false)
    }

    const editProfileAPi = async () => {
        const result = await editProfile(
            {
                "id": 5,
                "name": formData.fullName,
                "password": "test@123",
                "company_name": formData.companyname,
                "company_type": formData.companytype,
                "mobile_no": phoneData,
                "telephone_no": tellyphoneData,
                "designation": formData.designation,
                "address": formData.address,
            }

        )

        profileApi()
    }




    useEffect(() => {
        profileApi()
    }, [])




    return (
        <div  >
            {
                loading ?
                    <Spinner />
                    :
                    <>
                        <div className='grid grid-cols-3 gap-14 w-full profile-form'>
                            <div>
                                <div className='w-full mb-6'>
                                    <p className="mb-3">Full Name</p>
                                    <div>
                                        <input type="text" value={formData.fullName} name="fullName" placeholder='Enter name' className='p-2.5 w-full' onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className='w-full mb-6'>
                                    <p className="mb-3">Mobile Number</p>

                                    <PhoneInput placeholder="phoneNumber" country={"in"} onlyCountries={['in']}
                                        value={phoneData}
                                        onChange={phone => setPhoneData(phone)}
                                        regions={['asia']}
                                        required
                                    />
                                </div>
                                <div className='w-full mb-6'>
                                    <p className="mb-3">Type of Company</p>
                                    <input type="text" placeholder='Enter your designation' name='companytype' className='p-2.5 w-full' value={formData.companytype} onChange={handleInputChange} required />
                                </div>
                                <div className='w-full mb-6'>
                                    <p className="mb-3">Telephone Number</p>
                                    <PhoneInput
                                        placeholder="phoneNumber"
                                        country={"in"}
                                        onlyCountries={['in']}
                                        value={tellyphoneData}
                                        onChange={phone => setTellyPhoneData(phone)}
                                        regions={['asia']}
                                        required
                                    />
                                </div>

                            </div>
                            <div>
                                <div className='w-full mb-6'>
                                    <p className="mb-3">Designation</p>
                                    <input type="text" name='designation' value={formData.designation} placeholder='Enter your designation' className='w-full p-2.5' onChange={handleInputChange} required />

                                </div>
                                <div className='w-full mb-6'>
                                    <p className="mb-3">Company Name</p>
                                    <input type="text" name="companyname" value={formData.companyname} placeholder='Enter your company name' className='w-full p-2.5' onChange={handleInputChange} required />
                                </div>
                                <div className='w-full mb-6'>
                                    <p className="mb-3">Address</p>
                                    <input type="address" placeholder='Enter address' className='w-full p-2.5' name='address' value={formData.address} onChange={handleInputChange} required />
                                </div>
                                <div className='w-full mb-6'>
                                    <p className="mb-3">Email Address</p>
                                    <input type="text" disabled="true" value={formData.email} className='w-full px-4 py-3	' placeholder='Cynthia R. Delgado' />
                                </div>

                            </div>

                        </div>

                        <div className='pt-20'>
                            <button className='save-btn' onClick={editProfileAPi}>Save</button>
                        </div>


                    </>
            }






        </div>



    )
}

export default Profile
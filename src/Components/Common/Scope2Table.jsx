import { useState } from "react";
import { FilterStore, FilterUpdate } from "../../Utils/services";
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


function Scope2Table({ editid, seteditid, item, index, onDelete, setExc2, exc1,request }) {
  const [isEditing, setIsEditing] = useState(editid === item.id ? true : false);
  const [rowData, setRowData] = useState(item);
  const [btnshow, setbtnshow] = useState(true)
  const[editshow,seteditshow]=useState(false)
  // 
  const [_errors, setErrors] = useState({}); 
// 

  const handleDelete = () => {
    onDelete()
  };

  
// 
const validateFields = () => {
  let errors = {};

  // Check if rowData.product is null or an empty string
  if (rowData.product === null || rowData.product.trim() === '') {
    errors["product"] = "Product cannot be empty";
  }

  // Add more validation checks as needed for other fields

  setErrors(errors);
  return Object.keys(errors).length === 0; // Form is valid if there are no errors
};

// 



  const handlesubmit = async (evt) => {
// 
    if (!validateFields()) {
      return; // Validation failed, do not proceed

    }
// 
    const data =
    {
      "id": rowData.id,
      "product": rowData.product,
      "status": rowData.status ,
      "scope_type": "2"
    }

    try {
      const result = await FilterStore(data);
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
      toast.error("An error occurred. Please try again.");
    }
    request()
  };

  const handlechange = (evt) => {
    const { name, value } = evt.target;
// 
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined, // Set the error message to undefined
    }));

// 
    setRowData((prevRowData) => ({ ...prevRowData, [name]: value }));
  };
  const handleEditClick = () => {

    setbtnshow(false)
      
    seteditshow(true)
 
  };

  const handleEdit = async () => {
// 
    if (!validateFields()) {
      return; // Validation failed, do not proceed
    }
// 
    setbtnshow(true)
    seteditshow(false)
    const data =
    {

      "product": rowData.product,
      "status": rowData.status ,
      "scope_type": "1"
    }
  
    const id=rowData?.id
    // console.log(data, "data")
    try {
      const result = await FilterUpdate(data,id);
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
  
    }
    catch (error) {
      toast.error("An error occurred. Please try again.");
    }
    request()
  }

  if (isEditing || editshow) {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <input
            name="product"
            className="text-center"
            value={rowData?.product}
            onChange={handlechange}
          />
 {/* */}
{_errors["product"] && (
          <div className="error-message" style={{fontSize:'10px',color:'red'}}>{_errors["product"]}</div>
        )}
{/*  */}
          
        </td>
        <td>
          <select
            name="status"
            className="text-center"
            value={rowData?.status}
            onChange={handlechange}
          >
            <option value="0">Active</option>
            <option value="1">Deactive</option>
          </select>



        </td>
        <td className=" d-flex text-center align-items-center justify-content-center">
          <button
            className="edit-btn-table text-center btnsz"
            onClick={isEditing ? handlesubmit : handleEdit}
          >
            Save
          </button>
          <button className="edit-btn-table flex items-center ms-3 text-center btnsz" onClick={handleDelete}>
              <span className="px-2">Delete</span>
            </button>
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td className=" text-center">{index + 1}</td>
      <td className=" text-center">
        <input
          name="product"
          className="rowInput text-center"
          value={rowData?.product}
              disabled={!editshow}
       onChange={handlechange}
        />
        
      </td>
      <td className=" text-center">
        {/* <input
          name="status"
          className="rowInput text-center"
          value={rowData?.status === 0 ? "Active" : "Deactive"}
            disabled={!editshow}
          onChange={handlechange}
        /> */}
        
              <select
            name="status"
            className="text-center"
            style={{border:'none'}}
            value={rowData?.status}
            disabled={!editshow}
            onChange={handlechange}
          >
            <option value="0">Active</option>
            <option value="1">Deactive</option>
          </select>
      </td>
      <td className=" d-flex text-center align-items-center justify-content-center">
        {btnshow ? (

          <button className="edit-btn-table text-center btnsz" onClick={handleEditClick}>
            Edit
          </button>
        ) : (
          <button className="edit-btn-table text-center btnsz" onClick={handleEdit}>
            Save
          </button>
        )}
           <button className="edit-btn-table flex items-center ms-3 text-center btnsz" onClick={handleDelete}>
              <span className="">Delete</span>
            </button>
      </td>
    </tr>
  );
}
export default Scope2Table;
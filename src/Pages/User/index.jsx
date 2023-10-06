import React, { useEffect, useState } from 'react';
import Usertable from '../../Components/Common/Usertable';
import Dropdown from "react-bootstrap/Dropdown";
import arrowdown from "../../Assets/image/icons/arrowdown.svg"
import { Form } from 'react-bootstrap';
import Usermodel from '../../Components/commoncomonent/Usermodel';
import { ViewDataUser } from '../../Utils/services';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Commontitle from '../../Components/Common/Commontitle';

function User() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = useState([]);

  const [check,setcheck]=useState({
        qc:false,
        admin:false
      })

  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(v => v !== value));
    }
  };

  const [editid, seteditid] = useState(0);
  const [data, setData] = useState([]);
  const [FilteredData,setFilteredData]=useState([])
  
  const request = async () => {
    const result = await ViewDataUser()
    setData(result.res.data)
    setFilteredData(result.res.data)
    // setcheck(result.res.data)
  }
  
  useEffect(() => {
    request()
  }, [])



  // const handleDeleteRow = async (id) => {
  //   try {
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         const deleteResult = await DeleteScope(id);
  //         Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         );
  //         request();
  //       }
  //     });
  //   } catch (error) {
  //     toast.error("An error occurred. Please try again.");
  //   }
  // };






  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filterArray = FilteredData.filter((e) => {
      return e.name.toLowerCase().includes(searchValue.toLowerCase()) 
    });
    if (searchValue === "") {
      setData(data);
      request();
    } else {
      setData(filterArray);
    }
  };

const handleclicked = (isAdminValue) => {
  setcheck({
    admin:isAdminValue===1? !check.admin: check.admin,
    qc : isAdminValue===0? !check.qc:check.qc
  })
};
  

const filter=()=>{
  const arr= []

  if(check.admin){
    FilteredData.filter((item) => {if(item.isAdmin === 1){
      arr.push(item)
    }})
  }
  if(check.qc){
    FilteredData.filter((item) => {if(item.isAdmin === 0){
      arr.push(item)
    }})
  }

  setData(arr);
  if(!check.qc && !check.admin){
    setData(FilteredData)
  }
}

useEffect(()=>{
  // console.log(check);
  filter()
},[check])


  return (
    <div className="mainWrapper pt-5">
      <div className='fffff ' style={{height:'160px'}}>
              <div className='companies'>
        {/* <h1>Staff</h1> */}
      <Commontitle title={'Staff'}/>

      </div>
      <div className=' d-flex align-items-cemter justify-between barbtn'>
        <div className='searchInput' >
          <input type="text" onChange={handleSearch}/>
        </div>
        {/* onClick={handleAddRow} */}
        <button className='addcompany' onClick={() => setOpen(true)}>Add Staff</button>
      </div>
      </div>
      <div className="plant-table " style={{ overflowY: 'scroll',height:'calc(100vh - 210px)'}}>
        <table className="w-100  table-theme-1 " style={{ overflowX: 'scroll',overflowY:'scroll'}}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Staff Name</th>
              <th>Contact Number</th>
              <th>
                <Dropdown className="d-flex align-items-center">
                  <Dropdown.Toggle className="d-flex align-items-center justify-content-center orderbar  droup">
                    Role
                    <img src={arrowdown} alt="..." className="ml-1"></img>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="weightsort" >
                    <Form.Check
                      type="checkbox"
                      label="QC Admin"
                      value="QC Admin"
                      className="form-checked checkbox-green"
                      checked={selected.qc}
                      onChange={e => handleCheckboxChange("QC Admin", e.target.checked)}
                      onClick={(e) => handleclicked(0)} 
                    />

                    <Form.Check
                      type="checkbox"
                      label="Super Admin"
                      value="Super Admin"
                      className="form-checked checkbox-green"
                      checked={selected.admin}
                      onChange={e => handleCheckboxChange("Super Admin", e.target.checked)}
                      onClick={(e) => handleclicked(1)} 
                    />

                  </Dropdown.Menu>
                </Dropdown>
              </th>  
              <th>Email Id</th>  
              <th>Date Joined</th>  
              <th></th>  
            </tr>  
          </thead>  
          <tbody>  
            {data?.map((item, index) => (  
              <Usertable  
                editid={editid}  
                seteditid={seteditid}
                key={item.id}
                index={index}
                item={item}
                // onDelete={()=>handleDeleteRow(item.id)}  
              />
            ))}
          </tbody>
        </table>
      </div>
      <Usermodel setOpen={setOpen} open={open} request={request} />
    </div>
  );
}
export default User;
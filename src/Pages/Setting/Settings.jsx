import React, { useEffect, useMemo, useState } from 'react';
import Settingdescription from '../../Components/Common/Settingdescription';
import Materialscopeswitch from '../../Components/Common/Materialscopeswitch';
import TableRow from '../../Components/Common/TableRow';
import { saveAs } from 'file-saver';
import sample from "../../../src/Assets/file/sample.xlsx"
import { DataScopeEmission, DeleteScope, EmissionScope } from '../../Utils/services';
import { toast } from 'react-toastify';
import Meterialmodel from '../../Components/commoncomonent/Materialmodel';
import Swal from 'sweetalert2';
import MaterialCertificate from '../../Components/commoncomonent/MaterialCertificate';
import Commontitle from '../../Components/Common/Commontitle';

function Settings() {
  const [open, setOpen] = React.useState(false);
const [turn, setturn] = useState(false);
  const [file, setfile] = useState(null);
  const [editid, seteditid] = useState(0)
  const [data, setData] = useState([]);
  const [FilteredData,setFilteredData]=useState([])
  const [webid, setwebid] = useState()


  const request = async () => {
    const result = await DataScopeEmission()
    setData(result.res.data)
    // console.log(result.res.data,"resutldata");
    setFilteredData(result.res.data)
  }
  useEffect(() => {
    request()
  }, [])
    
    const handleDeleteRow = async (id) => {
      try {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
          if (result.isConfirmed) {
            const deleteResult = await DeleteScope(id);
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            request();
          }
        });
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    };

  const handledownload = () => {
    saveAs(sample, 'Sample.xlx');  
  } 

  const filechange = (e) => {
    setfile(e.target.files[0])
  }
  const handlefile = async (values) => {
    if (file != null) {
      try {
        const formData = new FormData();
        if (file) {
          formData.append("file", file);
          // console.log(formData);
          const result = await EmissionScope(formData);
          toast.success(result.message);
        }
      }
      catch (error) {
        toast.error(error.message);
      }
    }
    else {
      toast.error("file is required")
    } 
  }

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filterArray = FilteredData.filter((e) => {
      return e.name.toLowerCase().includes(searchValue.toLowerCase()) || e.value.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setData(data);
      request();
    } else {
      setData(filterArray);
    }
  };

  return (
    <div className="mainWrapper pt-5">
      <div className='martop'>
      <div className="companies">
        {/* <h1>Settings</h1> */}
      <Commontitle title={'Settings'}/>

      </div>
      <div className="productswitch mt-3 d-flex align-items-center justify-content-between">
        <Materialscopeswitch
          collaterals="productactive"
        />

      </div>
      <div className="mt-3">
        <Settingdescription discrip="" />
      </div>
      </div>
      <div className="mt-3 dropupper" >
        <div className="d-flex align-items-center justify-content-between butnsrch">
        <div className='searchInput searchinginput'>
              <input type="text"  onChange={handleSearch} />
            </div>


      <div className='flex justify-end buttonsd'>
<button className='d-flex align-items-center uploaddrop' style={{  border: '1px solid #1CAF59' ,padding:'8px 17px',marginRight:'8px'}} onClick={() => { setturn(true) }} >
            <p  style={{color:'#158D47',fontSize:'14px',fontWeight:500}}>Upload from CSV</p>
</button>




          <button
            className="table-pdf-btn px-3 py-2 flex items-center me-3 editsttingbutton"
            onClick={() => setOpen(true)}
            style={{background:'#1CAF59',color:'white'}}
          >
            <span className="px-2">Add Fuel</span>
          </button>
          </div>
        </div>
        <div className="plant-table mt-3 dataheig" style={{overflowY:'scroll',height:'calc(100vh - 380px)'}} >
          <table className="w-100  table-theme-1 " style={{ overflowX: 'scroll',overflowY:'scroll'}}>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Value</th>
                <th>Unit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <TableRow
                  editid={editid}
                  seteditid={seteditid}
                  key={item.id}
                  index={index}
                  item={item}
                  onDelete={()=>handleDeleteRow(item.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Meterialmodel setOpen={setOpen} open={open} />
<MaterialCertificate setOpen={setturn} open={turn} />

    </div>
  );
}
export default Settings;
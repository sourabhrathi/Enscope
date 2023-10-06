import React, { useEffect, useState } from 'react';
import Materialscopeswitch from '../../Components/Common/Materialscopeswitch';
import Scope1Table from '../../Components/Common/Scope1Table';
import Settingdescription from '../../Components/Common/Settingdescription';
import Settingscope from '../../Components/Common/Settingscope';
import { FilterDelete, ScopeSettingGet } from '../../Utils/services';
import Scope3Table from '../../Components/Common/Scope3Table';
import Scope2Table from '../../Components/Common/Scope2Table';
import { saveAs } from 'file-saver';
import { toast } from 'react-toastify';
import { EmissionScope } from '../../Utils/services';
import Swal from 'sweetalert2';
import MaterialCertificate from '../../Components/commoncomonent/MaterialCertificate';
import Commontitle from '../../Components/Common/Commontitle';


const Scope = () => {
  const [exc1, setExc1] = useState([]);
  const [exc2, setExc2] = useState([]);
  const [exc3, setExc3] = useState([]);
  const [editId, setEditId] = useState(0);
  const [type, setType] = useState(1);
  const [originalExc, setOriginalExc] = useState([]);
  const [file, setfile] = useState(null);
  const [turn, setturn] = useState(false);
  const request = async () => {
    const result = await ScopeSettingGet();
    // console.log(result.res, "result.res.data");
    setExc1(result.res.filter((item) => item.scope_type === "1"));
    setExc2(result.res.filter((item) => item.scope_type === "2"));
    setExc3(result.res.filter((item) => item.scope_type === "3"));
    setOriginalExc(result.res);
  };

  useEffect(() => {
    request();
  }, []);

  const handleAddRow = () => {
    let newRow;
    if (type === 1) {
      newRow = {
        id: originalExc.length + 1,
        product: "",
        status: 0,
        scope_type: String(type)
      };
      setExc1(prevExc1 => [...prevExc1, newRow]);
    } else if (type === 2) {
      newRow = {
        id: originalExc.length + 1,
        product: "",
        status: 0,
        scope_type: String(type)
      };
      setExc2(prevExc2 => [...prevExc2, newRow]);
    } else if (type === 3) {
      newRow = {
        id: originalExc.length + 1,
        product: "",
        status: 0,
        scope_type: String(type)
      };
      setExc3(prevExc3 => [...prevExc3, newRow]);
    }
    setOriginalExc(prevOriginalExc => [...prevOriginalExc, newRow]);
    setEditId(newRow.id);

  };

  const testing = () => {
    if (type === 1) {
      const filteredData = originalExc.filter((item) => item.scope_type === "1");
      setExc1(filteredData);
    } else if (type === 2) {
      const filteredData = originalExc.filter((item) => item.scope_type === "2");
      setExc2(filteredData);
    } else if (type === 3) {
      const filteredData = originalExc.filter((item) => item.scope_type === "3");
      setExc3(filteredData);
    }
  }

  useEffect(() => {
    testing()
  }, [type]);

  const filechange = (e) => {
    setfile(e.target.files[0])
  }

  const handlefile = async (values) => {
    if (file != null) {
      try {
        const formData = new FormData();
        if (file) {
          formData.append("file", file);
          // console.log(formData,"sourabhrathi");
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
    if (type === 1) {
      const filterArray = originalExc.filter((e) => {
        return (
          e.product.toLowerCase().includes(searchValue.toLowerCase()) &&
          e.scope_type === "1"
        );
      });
      setExc1(filterArray);
    } else if (type === 2) {
      const filterArray = originalExc.filter((e) => {
        return (
          e.product.toLowerCase().includes(searchValue.toLowerCase()) &&
          e.scope_type === "2"
        );
      });
      setExc2(filterArray);
    } else if (type === 3) {
      const filterArray = originalExc.filter((e) => {
        return (
          e.product.toLowerCase().includes(searchValue.toLowerCase()) &&
          e.scope_type === "3"
        );
      });
      setExc3(filterArray);
    }
  };

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
          const result = await FilterDelete(id);
          Swal.fire(
            'Deleted!',
            'User Delete successfully.',
            'success'
          );
          request();
        }
      });
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mainWrapper pt-5">
      <div  className='martoper'>

      <div className="companies">
        {/* <h1>Settings</h1> */}
      <Commontitle title={'Settings'}/>

      </div>
      <div className="productswitch mt-3">
        <Materialscopeswitch merchant="productactive" />

      </div>
      <div className="mt-3 ">
        <Settingdescription discrip="" />
      </div>
      </div>
      <div className="mt-3 ">
      <div className='searchInput searchinginput'>
          <input type="text" onChange={handleSearch} />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3 cntain">
          <Settingscope settype={setType} type={type} />
          <div className='flex items-center gap-2 gapbtw'>
          
            <button className='d-flex align-items-center uploaddrop droperable' onClick={() => { setturn(true) }}  style={{  border: '1px solid #1CAF59' ,padding:'8px 17px',marginRight:'8px'}}>
            <p  style={{color:'#158D47',fontSize:'14px',fontWeight:500}}>Upload from CSV</p>
            </button>
            <button className="addcompany" onClick={handleAddRow}>
              Add Parameter
            </button>
          </div>
        </div>

        <div className="plant-table mt-3 dataheigh" style={{ overflowY: 'scroll', height:'calc(100vh - 410px' }} >
          <table className="w-100  table-theme-1 " style={{ overflowX: 'scroll', overflowY: 'scroll' }}>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name of Parameter</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                if (type === 1) {
                  return exc1.map((item, index) => (
                    <Scope1Table
                      index={index}
                      key={"s1" + item.id}
                      item={item}
                      editid={editId}
                      seteditid={setEditId}
                      exc1={exc1}
                      setExc1={setExc1}
                      request={request}
                      onDelete={() => handleDeleteRow(item.id)}
                    />
                  ));
                } else if (type === 2) {
                  return exc2.map((item, index) => (
                    <Scope2Table
                      index={index}
                      key={"s2" + item.id}
                      item={item}
                      editid={editId}
                      seteditid={setEditId}
                      exc2={exc2}
                      setExc2={setExc2}
                      request={request}
                      onDelete={() => handleDeleteRow(item.id)}
                    />
                  ));
                } else if (type === 3) {
                  return exc3.map((item, index) => (
                    <Scope3Table
                      index={index}
                      key={"s3" + item.id}
                      item={item}
                      editid={editId}
                      seteditid={setEditId}
                      exc3={exc3}
                      setExc3={setExc3}
                      request={request}
                      onDelete={() => handleDeleteRow(item.id)}
                    />
                  ));
                }
              })()}
            </tbody>
          </table>
        </div>
      </div>
<MaterialCertificate setOpen={setturn} open={turn} />

    </div>
  );
};
export default Scope;
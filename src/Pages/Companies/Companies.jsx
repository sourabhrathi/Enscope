import React, { useEffect, useMemo, useRef, useState,useContext } from "react";
import item from "../../Components/commoncomonent/item.json";
import ColletralTable from "../../Components/commoncomonent/ColletralTable";
import Dropdown from "react-bootstrap/Dropdown";
import "../../Pagescss/Comapnies.css";
import Pagination from "../../Components/commoncomonent/Pagination";
import { useNavigate } from "react-router-dom";
import PeopleAddModel from "../../Components/commoncomonent/PeopleAddModel";
import { getViewProfile } from "../../Utils/services";
import moment from "moment";
import downarrows from "../../Assets/image/icons/arrowdown.svg";
import AuthContext from '../../Utils/auth-context'
import Commontitle from "../../Components/Common/Commontitle";

function Companies() {
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data1, setdata1] = useState([]);
  const [exc, setexc] = useState([]);
  const [itemsPerPage, setitemperpage] = useState(20);
  const { toogle, handle } = useContext(AuthContext)

  const [check,setcheck]=useState({
    Pending:false,
    Approved:false,
    Rejected:false
  })
  const scrollTableRef = useRef(null);
  const fixedHeightRef = useRef(null);

  const tableHeightRef = useRef("auto"); 

  const navigate = useNavigate();
  const handleclick = (id) => {
    // navigate("/dataview")
    navigate(`/dataview/${id}`);
  };
  const companydata = async () => {
    const result = await getViewProfile();
    setdata1(result.res.data);
    setexc(result.res.data);
    // console.log(result.res.data, "companuy data ");
  };
  useEffect(() => {
    companydata();
  }, []);

  const FeedsColumns = useMemo(
    () => [
      {
        Header: "S No",
        accessor: (data1, i) => {
          return (
            <div style={{ fontWeight: "500" }}>
              <span>{i + 1}</span>
            </div>
          );
        },
      },
      {
        Header: "Company Name",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.company}</span>
            </>
          );
        },
      },
      {
        Header: " ",
        accessor: (data1) => {
          return (
            <>
              <button
                className="viewscope"
                onClick={() => handleclick(data1.id)}
              >
                View Scope data
              </button>
            </>
          );
        },
      },
      {
        Header: "Order",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.order}</span>
            </>
          );
        },
      },
      {
        Header: "Contact Person",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.contact_person}</span>
            </>
          );
        },
      },
      {
        Header: "Contact Number",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.contact_number}</span>
            </>
          );
        },
      },
      {
        Header: "Sign Up",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.signup}</span>
            </>
          );
        },
      },
      {
        Header: "Email Id",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.email}</span>
            </>
          );
        },
      },
      {
        Header: "Date Joined",
        accessor: (data1) => {
          return (
            <>
              <span>{moment(data1.join_date).format("YY-MM-DD")}</span>
            </>
          );
        },
      },
      {
        Header: "Date Of submission",
        accessor: (data1) => {
          return (
            <>
              <span>
                {data1.Submission_date != ""
                  ? moment(data1.Submission_date).format("YY-MM-DD")
                  : "N/A"}
              </span>
            </>
          );
        },
      },
      {
        Header: "Date Of approval",
        accessor: (data1) => {
          return (
            <>
              <span>
                {data1.approval_date != ""
                  ? moment(data1.approval_date).format("YY-MM-DD")
                  : "N/A"}{" "}
              </span>
            </>
          );
        },
      },
      {
        Header: "GST Number",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.gst}</span>
            </>
          );
        },
      },

      {
        Header: "City",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.city}</span>
            </>
          );
        },
      },
         {
        Header: "Country",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.country}</span>
            </>
          );
        },
      },
         {
        Header: "State",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.state}</span>
            </>
          );
        },
      },
         {
        Header: "Street Address",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.street_address}</span>
            </>
          );
        },
      },
        {
        Header: "Zip Code",
        accessor: (data1) => {
          return (
            <>
              <span>{data1.zip_code}</span>
            </>
          );
        },
      },
      
    ],
    [itemsPerPage]
  );
  const columnWidths = {
    'S No': '7rem',
    'Company Name': '28rem',
    ' ': '15rem',
    'Order': '12rem',
    'Contact Person': '12rem',
    'Contact Number': '12rem',
    'Sign Up': '12rem',
    'Email Id': '12rem',
    'Date Joined': '12rem',
    'Date Of submission': '12rem',
    'Date Of approval': '12rem',
    'GST Number': '12rem',
    'City': '12rem',
    'Country': '12rem',
    'State': '12rem',
    'Street Address': '12rem',
    'Zip Code': '12rem',
    
  };

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleItemsPerPageChange(num) {
    const newItemsPerPage = parseInt(num);
    setitemperpage(newItemsPerPage);
    setCurrentPage(1);
    const tableHeight = `${newItemsPerPage * 30 + 70}px`; // Adjust the height calculation as needed
    tableHeightRef.current = tableHeight;
  }

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

   useEffect(() => {
    // Apply pagination logic here based on currentPage and itemsPerPage
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = exc.slice(startIndex, endIndex);
    setdata1(currentItems);
  
  }, [currentPage, itemsPerPage]);


  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filterArray = exc.filter((e) => {
      return (
        e.company.toLowerCase().includes(searchValue.toLowerCase()) ||
        e.contact_person.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setdata1(filterArray);
  };

  const handleclicked = (isAdminValue) => {
    setcheck({
      Pending:isAdminValue==="Pending"? !check.Pending: check.Pending,
      Approved : isAdminValue==="Approved"? !check.Approved:check.Approved,
      Rejected: isAdminValue==="Rejected"? !check.Rejected:check.Rejected

    })
  };

  
  const filter=()=>{
    const arr= []
  
    if(check.Pending){
      exc.filter((item) => {if(item.order === "Pending"){
        arr.push(item)
      }})
    }
    if(check.Approved){
      exc.filter((item) => {if(item.order === "Approved"){
        arr.push(item)
      }})
    }
    if(check.Rejected){
      exc.filter((item) => {if(item.order === "Rejected"){
        arr.push(item)
      }})
    }

    setdata1(arr);
    if(!check.Approved && !check.Pending && !check.Rejected){
      setdata1(exc)
    }
  }
  
  useEffect(()=>{
    // console.log(check);
    filter()
  },[check])
  
 

  
  useEffect(() => {
    const scolltable = scrollTableRef.current;
  
    const setTableStyles = () => {
      if (scolltable) {
        const numRows = data1.length; // Get the number of rows
  
        if (numRows > 10) {
          scolltable.style.overflowY = "scroll";
          scolltable.style.height = "650px";
        } else {
          scolltable.style.overflowY = "hidden";
          scolltable.style.height = "auto";
        }
      }
    };
  
    requestAnimationFrame(setTableStyles);
  }, [data1]);


  // useEffect(() => {
  //   const scolltable = scrollTableRef.current;
  
  //   const setTableStyles = () => {
  //     if (scolltable) {
  //       const numRows = data1.length; // Get the number of rows
  //       const isMac = window.navigator.platform.toUpperCase().includes('MAC');
  //       let maxHeight;
  
  //       if (isMac) {
  //         maxHeight = numRows > 10 ? '650px' : '512px';
  //       } else {
  //         maxHeight = numRows > 10 ? '700px' : 'auto';
  //       }
  
  //       scolltable.style.overflowY = numRows > 10 ? 'scroll' : 'hidden';
  //       scolltable.style.height = maxHeight;
  //     }
  //   };
  
  //   requestAnimationFrame(setTableStyles);
  // }, [data1]);
  


  // ... (rest of your code)
  useEffect(() => {
    const setTableHeight = () => {
      const scrollTable = scrollTableRef.current;
      const fixedHeight = fixedHeightRef.current;

      if (scrollTable && fixedHeight) {
        const fixedHeightValue = fixedHeight.clientHeight;
        const newHeight = `calc(100vh - ${fixedHeightValue+30}px)`;
        
        scrollTable.style.height = newHeight;
      }
    };

    setTableHeight();
    window.addEventListener("resize", setTableHeight); // Update on window resize
    return () => {
      window.removeEventListener("resize", setTableHeight);
    };
  }, []);
  return (
    <>
      <div className="mainWrapper pt-5">

        <div style={{height:'154px'}} ref={fixedHeightRef}>
        <div className="companies ">
          {/* <h1>Companies</h1> */}
          <Commontitle title={'Companies'}/>
       
        </div>
        <div className=" flex items-cemter justify-between barbtn">
          <div className="searchInput">
            <input type="text" onChange={handleSearch} />
          </div>
          <button className="addcompany" onClick={() => setOpen(true)}>
            Add Company
          </button>
        </div>
        </div>


        <div className=" mt-3 " style={{overflow:'hidden'}} > 
         <div className="scolltable "ref={scrollTableRef} style={{minHeight:'300px',height:'calc(100vh - 350px)'}}>
              <ColletralTable data={data1} columns={FeedsColumns} columnWidths={columnWidths} handleclicked={handleclicked}/>
          </div>
          <div className="d-flex align-items-center justify-content-between rowssize">
            <Dropdown className="d-flex align-items-center">
              <p className="rowspera">Rows per page</p>
              <Dropdown.Toggle className="d-flex align-items-center justify-content-center  excle-export ms-3 px-3 hoverbtn droup">
                <p className="me-2 mbotom"style={{fontSize:'14px',fontWeight:'400'}}>{itemsPerPage}</p>
                <img src={downarrows} alt="..."></img>
              </Dropdown.Toggle>
              <Dropdown.Menu className="sortwidth">
                <Dropdown.Item
                  href="#/action-1"
                  value={10}
                  onClick={() => handleItemsPerPageChange(10)}
                  
                >
                  10
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  value={20}
                  onClick={() => handleItemsPerPageChange(20)}
                >
                  20
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  value={30}
                  onClick={() => handleItemsPerPageChange(30)}
                >
                  30
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-4"
                  value={40}
                  onClick={() => handleItemsPerPageChange(40)}
                >
                  40
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="pagination">
              <Pagination
                data={exc}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                // totalPage={totalPage}
                //   pagesize={pagesize}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>

        <PeopleAddModel setOpen={setOpen} open={open} />
      </div>
    </>
  );
}
export default Companies;

import React, { useEffect, useState } from 'react';
import { REQUEST_STATUS } from '../../Utils/services';
import ViewCancelModel from '../Common/ViewCancelModel';
import ViewcommentModel from './ViewcommentModel';
import { useNavigate } from 'react-router-dom';
import ViewdataModel from './ViewdataModel';
import moment from 'moment';

const Rejectedqcadmin = ({ inputValue }) => {
  const navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [webid, setwebid] = useState();
  const [deny, setdeny] = useState(false);
  const [exc, setexc] = useState();
  const [isDropdownVisible, setIsDropdownVisible] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);

  const request = async () => {
    const result = await REQUEST_STATUS();
    const filteredData = result.res.data[0].filter(
      (item) => item.status === 'Reject' && item.rejectedBy_QCAdmin !== null
    );
    setdata(filteredData);
    setexc(filteredData);
    setIsDropdownVisible(Array(filteredData.length).fill(false));
  };

  useEffect(() => {
    request();
  }, []);

  const handlesearch = () => {
    const filterArray = exc?.filter((e) => {
      return e.companyName.toLowerCase().includes(inputValue.toLowerCase());
    });

    setdata(filterArray);
  };

  const handlenavigate = (id) => {
    navigate(`/dataview/${id}`);
  };

  useEffect(() => {
    handlesearch();
  }, [inputValue]);

  const toggleDropdown = (index) => {
    const updatedDropdownVisibility = isDropdownVisible.map(
      (value, i) => i === index
    );
    setIsDropdownVisible(updatedDropdownVisibility);
    setClickedIndex(index);
  };

  return (
    <>
      {data?.length > 0 ? (
        data?.map((item, index) => {
          if (item.status === 'Reject') {
            return (
              <div key={item.userId}>
                <div
                  className="w-full max-w-90 mt-2 qcadmin"
                  style={{
                    border: '1px solid #E6E6E6',
                    height: '106px',
                    borderLeft: '3px solid #EA3C3C',
                    borderRadius: '4px',
                  }}
                >
                  <div className="qcboad">
                    <div>
                      <p
                        className="pl-20 Kris-Ltd pt-4"
                        style={{ color: '#929292', fontWeight: 400 }}
                      >
                        {' '}
                        Rejected by{' '}
                        <span style={{ color: '#929292', fontWeight: 400 }}>
                          {item?.rejectedBy}{' '}
                        </span>{' '}
                        on :{moment(item.submittedDate).format('DD MMMM, YYYY')}
                      </p>
                      <p
                        className="text-start pb-4 pl-20 Kris-Ltd text-black"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        {' '}
                        {item?.companyName}
                      </p>
                    </div>
                    <div className="mr-4 ">
                      <div className="showthreedot ">
                        <div className="dropdown threedot">
                          <ul
                            className={`dropbtnicon icons ${
                              isDropdownVisible[index] ? 'showLeft' : ''
                            }`}
                            onClick={() => toggleDropdown(index)}
                          >
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                          <div
                            id="myDropdown"
                            className={`dropdown-content ${
                              isDropdownVisible[index] ? 'show' : ''
                            }`}
                            style={{
                              background: '#FDFDFD',
                            }}
                          >
                            <div
                              className="viewomment sizing"
                              onClick={() => handlenavigate(item.userId)}
                            >
                              View Scope data
                            </div>
                            <div
                              className="sizing"
                              style={{
                                marginTop: '12px',
                              }}
                              onClick={() => {
                                setdeny(true);
                                setwebid(item.userId);
                              }}
                            >
                              View Comment
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="showdatabtn">
                      <div className="flex mr-12 flexing">
                        <button
                          className="viewcomment"
                          style={{
                            background: '#FDFDFD',
                            border: '1px solid #EAEBEF',
                          }}
                          onClick={() => handlenavigate(item.userId)}
                        >
                          View Scope data
                        </button>
                        <button
                          className="viewcomment"
                          style={{
                            background: '#FDFDFD',
                            border: '1px solid #EAEBEF',
                          }}
                          onClick={() => {
                            setdeny(true);
                            setwebid(item.userId);
                          }}
                        >
                          View Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <div>
          <div
            className="w-full max-w-90 mt-2  d-flex align-items-center justify-content-center"
            style={{ border: '1px solid #E6E6E6', height: '106px', borderRadius: '4px' }}
          >
            <div className="d-flex align-items-center justify-content-center justify-contnt-cener ">
              <p className="sincedays"> No Records Found</p>
            </div>
          </div>
        </div>
      )}
      <ViewdataModel webid={webid} setOpen={setdeny} open={deny} />
    </>
  );
};

export default Rejectedqcadmin;

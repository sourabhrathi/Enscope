import React, { useState, useEffect } from 'react';
import stationIcon from "../../Assets/images/icons/local_gas_station.svg";
import { useNavigate } from 'react-router-dom';
import { Scope1ViewAdmin } from '../../Utils/services';

const ScopeLabs = () => {
  const navigation = useNavigate();
  const [data, setData] = useState([]);
  const id = localStorage.getItem("setid");

  const handleNavigation = (tabsValue) => {
    switch (tabsValue) {
      case "Stationary Combustion":
        navigation("/new-assessment/scope-one/stationary-combustion");
        break;
      case "Mobile Combustion":
        navigation("/new-assessment/scope-one/mobile-combustion");
        break;
      case "Chemicals and Gases":
        navigation("/new-assessment/scope-one/chemical-and-gas");
        break;
      default:
        break;
    }
  };

  const request = async () => {
    const result = await Scope1ViewAdmin(id);
    setData(result?.res?.data);
    // console.log(result.res.data);
  };
  useEffect(() => {
    request();
  }, [id]);

  return (
    <div className='pt-12'>
      <div className='grid grid-cols-1  xl:grid-cols-3  md:grid-cols-2 gap-4'>
        {data?.map((item, index) => (
          <div key={index}>
              {Object.keys(item).map((key) => (
                     <div className='labs flex items-center cursor-pointer '  onClick={() => handleNavigation(key)} >
                     <img src={stationIcon} alt="" />
                <div key={key} className="px-6 flex justify-between padngi"  >
                  <span>{key}: </span>
                  <span className='ms-4' style={{ color: '#929292',fontSize:'14px',fontWeight:500}}>{item[key].toString().slice(0, 8)}</span>
                </div>
                </div>
              ))}
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScopeLabs;


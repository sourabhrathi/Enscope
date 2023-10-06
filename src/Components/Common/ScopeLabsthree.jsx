import React, { useState, useEffect } from 'react';
import stationIcon from "../../Assets/images/icons/local_gas_station.svg";
import { useNavigate } from 'react-router-dom';
import { Scope3ViewAdmin } from '../../Utils/services';
import { dumydata } from '../../Assets/dummydata/setting';

const ScopeLabsthree = () => {
    const navigation = useNavigate();
    const [data, setData] = useState([]);
    const id = localStorage.getItem("setid");

    const handleNavigation = (tabsValue) => {  if (dumydata[tabsValue]) {
        navigation(dumydata[tabsValue]);
      } else {
        // Handle the default case here
      }
        
    };

    
    const request = async () => {
        const result = await Scope3ViewAdmin(id);
        setData(result?.res?.data);
        // console.log(result.res.data);
    };
    useEffect(() => {
        request();
    }, [id]);

    return (
        <div className='pt-12'>
             <div className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4'>

                {data?.map((item, index) => (
                    <div key={index}>
                        {Object.keys(item).map((key) => (
                            <div className='labs flex items-center cursor-pointer' onClick={() => handleNavigation(key)} >
                                <img src={stationIcon} alt="" />
                                <div key={key} className="px-6" >
                                    <span>{key}: </span>
                                    <span>{item[key].toString().slice(0, 8)}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScopeLabsthree;

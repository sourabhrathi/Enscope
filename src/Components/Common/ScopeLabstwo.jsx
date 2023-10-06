import React, { useState, useEffect } from 'react'
import electric from "../../Assets/images/icons/electric_bolt.svg"
import { useNavigate } from 'react-router-dom'
import { Scope2ViewAdmin } from '../../Utils/services'


const ScopeLabstwo = () => {
    const [data,setData]=useState([])
    const id = localStorage.getItem("setid")
    const navigation = useNavigate()

      const handleNavigation = (tabsValue) => {
        switch (tabsValue) {
          case "Electricity":
            navigation("/new-assessment/scope-two/electricity");
            break;
          case "Steam & Heat":
            navigation("/new-assessment/scope-two/steam_&_heat");
            break;
          case "Cooling":
            navigation("/new-assessment/scope-two/cooling");
            break;
          default:
            break;
        }
      };



    const request = async () => {
        const result = await Scope2ViewAdmin(id);
        setData(result?.res?.data);
    };
    
    useEffect(() => {
        request();
    }, [id]);
    
    
    return (
        <>
    <div className='pt-12'>
    <div className='grid grid-cols-1  xl:grid-cols-3  md:grid-cols-2 gap-4'>

        {data?.map((item, index) => (
          <div key={index}>
              {Object.keys(item).map((key) => (
                     <div className='labs flex items-center cursor-pointer'  onClick={() => handleNavigation(key)} >
                     <img src={electric} alt="" />
                <div key={key} className="px-6" >
                  <span>{key}: </span>
                  <span className='ms-4' style={{ color: '#929292',fontSize:'14px',fontWeight:500}}>{item[key].toString().slice(0, 8)}</span>
                </div>
                </div>
              ))}
           
          </div>
        ))}
      </div>
    </div>

        </>
    )
}

export default ScopeLabstwo
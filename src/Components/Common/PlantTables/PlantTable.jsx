import React, { useState, useContext, useEffect } from 'react';
import { filterAdminScope1 } from '../../../Utils/services';
import AuthContext from '../../../Utils/auth-context';

const PlantTable = ({ month, YearData, CreatOn, year, manthFilter }) => {
  const [fuelDetails, setFuelDetails] = useState([]);
  const [rowData, setRowData] = useState([]);
  const authCtx = useContext(AuthContext);
  const id = localStorage.getItem("setid");

  const addRow = () => {
    setFuelDetails([...fuelDetails, { type_fuel: '', quantity: '', plant_type: "plant 1", category: "cumbustion table", assessment_month: month, assessment_year: YearData, created_on: CreatOn }]);
  }

  const viewdata = async () => {
    const data = {
      "assessment_year": year,
      "category": 'Stationary Combustion',
      "user_id": id,
      "plant_type": authCtx?.plant
    };

    try {
      const result = await filterAdminScope1(data);
      const filteredData = result?.data.filter(item => item?.assessment_month === manthFilter);
      // console.log(filteredData,"filteredData");
    //  console.log(manthFilter,"manthFilter");
      setRowData(filteredData || []); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setRowData([]); 
    }
  };

  useEffect(() => {
    viewdata();
  }, [authCtx?.plant, manthFilter]); 

  return (
    <div>
      <div className='plant-table mt-4'>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Type of Fuel</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.type_fuel}</td>
                <td>
                  {item?.quantity} <span style={{ color: '#A2A2A2', fontSize: '14px' }}>{item?.unit}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlantTable;

import React, { useState, useEffect, useContext } from "react";
import PlantTable from "../../PlantTables/PlantTable";
import RowMaterialTable from "./RowMaterialTable";
import { YearCurrent, filterAdminScope3 } from "../../../../Utils/services";
import AuthContext from "../../../../Utils/auth-context";
import { tablesdata } from "../../../../Assets/dummydata/dynamictablejson";

const Row_materialplant = ({title}) => {
  /*====================== Get data from dummy data =================================   */

  const tabledata = tablesdata[title];

  const [data, setdata] = useState([]);

  const showdata = async () => {
    const result = await YearCurrent();
    setdata(result?.res?.data);
    // console.log(result.res.data[0].year, "check");
  };

  /* =============================== For Table Body ===================================*/
  const [rowData, setRowData] = useState([]);
  const authCtx = useContext(AuthContext);

  const id = localStorage.getItem("setid");

  const viewdata = async (item) => {
    if(authCtx?.data){
    const data = {
      "assessment_year":authCtx?.data,
      "category": tabledata.apikey?tabledata.apikey: title,
      "user_id": id,
      "plant_type": authCtx?.plant,
    };

    try {
      const result = await filterAdminScope3(data);
      // return filteredData
      // console.log(result);
      setRowData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  };

  /* =============================== End Table Body ===================================*/

  useEffect(() => {
    showdata();
    viewdata();
  }, [authCtx?.data]);

  return (
    <div className="pt-2">
      <p className="profile-texts">
        Donnelly-Wisozk Die cast manufacturing unit
      </p>
      <div className="pt-4">
        <p className="ass-year">Assessment Year :{data[0]?.year}</p>
      </div>
      {data.map((item, index) => {
        const filteredData = rowData?.filter(
          (res) => res?.assessment_month === item?.assessment_month
        );

        return (
          <div>
            <p className="pt-4" style={{ color: "#929292" }}>
              {item.created_on}
            </p>
            <RowMaterialTable
              columns={tabledata.column}
              row={tabledata.row}
              rowData={filteredData}
              viewdata={viewdata}
              month={item.assessment_month}
              YearData={2023}
              CreatOn="Apr-2023"
              manthFilter={item?.assessment_month}
              year={item?.year}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Row_materialplant;

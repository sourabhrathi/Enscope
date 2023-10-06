import React from "react";

const RowMaterialTable = ({ columns, row, rowData }) => {
  return (
    <div>
      <div className="plant-table mt-4">
        <table>
          <thead>
            <tr>
              {columns &&
                columns.map((val, index) => <th key={index}>{val}</th>)}
            </tr>
          </thead>

          <tbody>
            {rowData.map((item, index) => (
              <tr key={index}>
                {row.map((i) => {
                  if (i == "index") {
                    return <td>{index + 1}</td>;
                  } else if (i === "quantity") {
                    return (
                      <td>
                        {item[i]}{" "}
                        <span style={{ color: "#A2A2A2", fontSize: "14px" }}>
                        {item["unit"]}
                        </span>
                      </td>
                    );

                  } 
                  else if (i === "unit") {
                    return (
                 <td>
                        <span style={{ color: "#A2A2A2", fontSize: "14px" }}>
                        {item[i]}
                        </span>
                        </td>
                    );

                  } 
                  
                  else {
                    return <td>{item[i]}</td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RowMaterialTable;

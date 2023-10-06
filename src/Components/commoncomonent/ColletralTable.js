import React, { useState } from "react";
import { useTable } from 'react-table'
import Dropdown from "react-bootstrap/Dropdown";
import { Form } from 'react-bootstrap';
import arrowdown from "../../Assets/image/icons/arrowdown.svg"

const ColletralTable = ({ columns, data,columnWidths ,handleclicked}) => {

  const [selected, setSelected] = useState([]);
  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter(v => v !== value));
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table
      className="w-100  table-theme-1 " style={{ overflowX: 'scroll',overflowY:'scroll' }}
      {...getTableProps()}
      cellSpacing={5}
    >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              return column.Header === "Order" ? (
                // code for Order column goes here
                <th key={column.id} {...column.getHeaderProps()} style={{minWidth: columnWidths[column.id] }}>

                  <Dropdown className="d-flex  ">
                    <Dropdown.Toggle className="d-flex align-items-center justify-content-between orderbar px-3 hoverbtn droup">
                      {column.render('Header')}
                      <img src={arrowdown} alt="..." className="ml-1"></img>

                    </Dropdown.Toggle>
                    <Dropdown.Menu className="sortheight">
                      <Form.Check
                        type="checkbox"
                        label="Pending"
                        className="form-checked checkbox-green"
                        checked={selected.includes("pending")}
                        onChange={e => handleCheckboxChange("pending", e.target.checked)}
                        onClick={() => handleclicked("Pending")} 
                      />
                      <Form.Check
                        type="checkbox"
                        label="Approved"
                        value="approved"
                        className="form-checked checkbox-green"
                        checked={selected.includes("approved")}
                        onChange={e => handleCheckboxChange("approved", e.target.checked)}
                        onClick={() => handleclicked("Approved")} 
                      />
                      <Form.Check
                        type="checkbox"
                        label="Rejected"
                        value="rejected"
                        className="form-checked checkbox-green"
                        checked={selected.includes("rejected")}
                        onChange={e => handleCheckboxChange("rejected", e.target.checked)}
                        onClick={() => handleclicked("Rejected")} 
                      />
                    </Dropdown.Menu>
                  </Dropdown>

                </th>
              ) : (
                // code for other columns goes here
                <th key={column.id} {...column.getHeaderProps()} style={{ minWidth: columnWidths[column.id] }}>
                  {column.render('Header')}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()} >
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="hover-row">
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ColletralTable;
import React from "react";
import Select from 'react-select';

const AssesmentDetails = ({ setSelectedOption, exc, year }) => {
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    const datas = year?.map((item) => ({
      value: item?.assessment_year,
      label: item?.assessment_year,
    }));
    setOptions(datas);
  }, [year]);

  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const defaultSelectedOption = { value: `${currentYear}-${nextYear}`, label: `${currentYear}-${nextYear}` };

  function handleSelect(selectedOption) {
    setSelectedOption(selectedOption.value);
  }

  return (
    <div className="assment_year pt-4">
      <p>Assessment Year</p>
      <div className="flex justify-between items-center mt-3 ">
        <Select
          value={defaultSelectedOption}
          onChange={handleSelect}
          options={options}
          className="assment-select "
        />
        <div className="flex statusreject">
          <p>Status:</p>
          <p style={{ color: exc.status === "Approval" ? "green" : "red" }}>
            {exc.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssesmentDetails;




// import React from 'react';
// import Select from 'react-select';

// const AssesmentDetails = ({ selectedOption, setSelectedOption, exc, year }) => {
//   const options = year.map((item) => ({
//     value: item.assessment_year,
//     label: item.assessment_year,
//   }));

//   function handleSelect(option) {
//     setSelectedOption(option);
//   }

//   return (
//     <div className='assment_year pt-2'>
//       <p>Assessment Year</p>
//       <div className='flex justify-between items-center mt-3 '>
//         <Select
//           value={selectedOption}
//           onChange={handleSelect}
//           options={options}
//           className='assment-select bg-slate-200'
//         />
//         <div className='flex statusreject'>
//           <p>Status:</p>
//           <p style={{ color: 'red' }}>{exc.status}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssesmentDetails;

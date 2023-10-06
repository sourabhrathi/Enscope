import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { ModalContext } from '../../Context';
import Addsuplair from '../../ModalTemplate/Addsuplair';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'strawberry', label: 'Strawberry' }
];


const AssmentYear = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const modalContext = useContext(ModalContext);
    const { closeModal, handleModalData } = modalContext;

    function handleSelect(option) {
        setSelectedOption(option);
    }

    const handleModal = (type) => {
        // const tabsValue = type;
        // const Test = <TestModal item={item} />
        // const View = <ViewCollateral item={item} />
        // switch (tabsValue) {
        //     case "TEST":
        //         handleModalData(Test, "cs");
        //         break;
        //     case "VIEW":
        //         handleModalData(View, "sm");
        //         break;

        //     default:
        //         handleModalData(Test, "lg");
        //         break;
        // }
        const Addsupplier = <Addsuplair />

        handleModalData(Addsupplier, "md");
    }



    return (
        <>
            <div className='flex justify-between pt-20 items-center'>


                <div className='assment_year '>
                    <p>Assessment Year</p>
                    <div className='mt-3'>
                        <Select
                            value={selectedOption}
                            onChange={handleSelect}
                            options={options}
                            className="assment-select"
                        />

                    </div>



                </div >
                <div>
                    <button className='add-btn' onClick={handleModal}>Add</button>
                </div>

            </div>

        </>
    )
}

export default AssmentYear
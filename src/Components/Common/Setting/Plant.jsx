import React, { useMemo } from 'react'
import Tabledata from '../Table/Tabledata'

const Plant = () => {

    const dumydata = [
        {
            "id": 1,
            "Standee": "Samriti Sharma",
            "demension": "9876543210",
            "add_on": "loremipsum@gmail.com",
            "addby": "All"

        },
        {
            "id": 2,
            "Standee": "Chandan Singh",
            "demension": "9876543210",
            "add_on": "loremipsum@gmail.com",
            "addby": "Dashboard, Master, Collateral"

        },
        {
            "id": 3,
            "Standee": "Chandan Singh",
            "demension": "9876543210",
            "add_on": "loremipsum@gmail.com",
            "addby": "Dashboard, Master, Collateral"

        },
        {
            "id": 4,
            "Standee": "Chandan Singh",
            "demension": "9876543210",
            "add_on": "loremipsum@gmail.com",
            "addby": "Dashboard"

        },
        {
            "id": 5,
            "Standee": "Chandan Singh",
            "demension": "9876543210",
            "add_on": "loremipsum@gmail.com",
            "addby": "Dashboard, Master"

        },

    ]



    const FeedsColumns = useMemo(
        () => [
            {
                Header: "S.No.",
                accessor: (data, index) => {

                    return (
                        <>
                            <span className='text-sm'>{1 + index}</span>
                        </>
                    )
                }
            },

            {
                Header: "Plant Name",
                accessor: data => {
                    return (
                        <>
                            <span className='text-sm'>ABC Report</span>
                        </>
                    )
                }
            },
            {
                Header: "Address",
                accessor: data => {
                    return (
                        <>
                            <span className='text-sm'>VKU</span>
                        </>
                    )
                }
            },


            {
                Header: "Open Carried out",
                accessor: data => {
                    return (
                        <>
                            <span className='text-sm'>9 Feb, 2023</span>
                        </>
                    )
                }
            },
            {
                Header: "Plant In-charge",
                accessor: data => {
                    return (
                        <>
                            <span className='text-sm'>9 Feb, 2023</span>
                        </>
                    )
                }
            },
            {
                Header: "Ownership",
                accessor: data => {
                    return (
                        <>
                            <span className='text-sm'>9 Feb, 2023</span>
                        </>
                    )
                }
            },
            {
                Header: "Reporting Year",
                accessor: data => {
                    return (
                        <>
                            <span className='text-sm'>9 Feb, 2023</span>
                        </>
                    )
                }
            },


            {
                Header: ' Stutus',
                accessor: (data) => {
                    return (
                        <>
                            <div className='flex justify-center'>
                                <button className='table-pdf-btn px-4 py-2 flex items-center'> <span className='px-2'>Delete </span> </button>

                            </div>

                        </>
                    )
                },
            }

        ], [])


    return (
        <div>
            <Tabledata data={dumydata} columns={FeedsColumns} />
        </div>
    )
}

export default Plant
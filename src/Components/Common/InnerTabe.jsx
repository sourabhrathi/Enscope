import React, { useState, useEffect, useContext } from 'react';
import { Showplant } from "../../Utils/services";
import AuthContext from '../../Utils/auth-context';

const InnerTabe = () => {
    const [data, setData] = useState();
    const authCtx = useContext(AuthContext);
    const id = localStorage.getItem("setid")
    const asingment = async () => {
        const result = await Showplant({ "userId": id });
        setData(result)
        authCtx.setplant(result[0]?.id)
    }
    useEffect(() => {
        asingment()
    }, [id])

    return (
        <div className='pt-3 flex items-center tabebtn '>

            {
                data && data?.map((val) => {
                    return (
                        <>
                            <div className={`pr-4 cursor-pointer  ${val.id === authCtx.plant && "active-settings"} `} onClick={() => authCtx.setplant(val.id)}>
                                <p className='p-3'>{val?.name}</p>
                            </div>
                        </>
                    )
                }
                )
            }

        </div>
    )
}

export default InnerTabe
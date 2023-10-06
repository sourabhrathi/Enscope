import React from 'react';

const Settingscope = ({settype,type}) => {

    const handleRejectedbySa = () => {
        settype(1)
    }
    const handleRejected = () => {
        settype(2)
    }
    const handlePending = () => {
        settype(3)
    }
    return (
        <div className='d-flex align-items-center allrejextbtnscope '>
            <p className={` scoped ${type === 1 ? 'active' : ''}`} onClick={handleRejectedbySa}>Scope 1</p>
            <p className={` scoped ${type === 2 ? 'active' : ''}`} onClick={handleRejected}>Scope 2</p>
            <p className={` scoped ${type === 3 ? 'active' : ''}`} onClick={handlePending}>Scope 3</p>
        </div>
    )
}

export default Settingscope;
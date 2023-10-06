import React, { useState } from 'react'

const CustomTabs = ({ profile, scope, plant, setProfile, setScope, setPlant }) => {


    const handleProfile = () => {
        setProfile(true)
        setScope(false)
        setPlant(false)
    }

    const handleScope = () => {
        setScope(true)
        setProfile(false)
        setPlant(false)
    }

    const handlePlant = () => {
        setPlant(true)
        setScope(false)
        setProfile(false)
    }


    return (
        <div className='pt-20 flex items-center'>
            <div className={`pr-4 cursor-pointer ${profile && "active-settings"} `} onClick={handleProfile}>
                <p className='p-3'>Profile</p>
            </div>
            <div className={`pr-4 cursor-pointer ${scope && "active-settings"} `} onClick={handleScope}>
                <p className='p-3'>Scope Parameters</p>
            </div>
            <div className={`pr-4  cursor-pointer ${plant && "active-settings"} `} onClick={handlePlant} >
                <p className='p-3' >Plant Details</p>
            </div>
        </div>
    )
}

export default CustomTabs
import Navbar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import React from 'react'


const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayout
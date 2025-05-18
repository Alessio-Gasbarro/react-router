import Navbar from '../components/NavBar'
import { Outlet } from 'react-router-dom'


const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default DefaultLayout
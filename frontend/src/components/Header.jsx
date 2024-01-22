import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const { pathname } = location

    // Render the normal navbar for these routes only
    let renderNav = 
        (pathname === "/") || 
        (pathname === "/login") ||
        (pathname === "/register") ||
        (pathname === "/updateProfile") 

    return (
        <>
            {/* Normal navbar conditional render */}
            {renderNav && <Navbar />}
        </>
    )
}

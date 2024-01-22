import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Container from '../components/Container'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

function ProctectedScreen() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar />
            }
        </>
    )
}

export default ProctectedScreen

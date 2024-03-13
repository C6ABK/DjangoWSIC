import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import { Page } from '../../components/Headings'

function RCPSScreen() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        document.title = "Root Cause Problem Solving"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <Page title="Root Cause Problem Solving" />
                        
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default RCPSScreen

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { Page } from '../components/Headings'

function Settings() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        
        if (!userInfo.staff) {
            navigate("/dashboard")
        }

        document.title = "Settings"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <Page title="Settings" />
                        
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default Settings

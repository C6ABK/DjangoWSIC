import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { Page } from '../components/Headings'

function Teams() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        document.title = "Changelog"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <Page title="Changelog" />
                        <ul>
                            <li>Master</li>
                            <li>Key Metrics</li>
                            <li>MG Product, HP KPIs, HP Hourly Count</li>
                            <li>Loss Data</li>
                        </ul>
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default Teams

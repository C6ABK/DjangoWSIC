import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Stats from '../components/Stats'
import { Page, Section } from '../components/Headings'
import { Error, Success, Info } from '../components/Message'

function Teams() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        document.title = "Short Interval Control"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <Page title="Short Interval Control" />
                        
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default Teams

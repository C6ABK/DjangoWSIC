import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

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
                <Sidebar userInfo={userInfo}>
                    <Card>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum consectetur sint delectus culpa doloremque. Rerum tempore mollitia, provident laborum magni expedita corrupti obcaecati asperiores eum, voluptatibus assumenda autem quis.
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default ProctectedScreen

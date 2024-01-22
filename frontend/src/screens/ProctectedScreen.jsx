import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Container from '../components/Container'
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
                <Container>
                    <Card title="Protected Page">
                        <p>Protected page example - will reroute to login page unless userInfo is detected. Use in conjunction with backend route restrictions.</p>
                    </Card>
                </Container>
            }
        </>
    )
}

export default ProctectedScreen

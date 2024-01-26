import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Stats from '../components/Stats'
import { Page, Section } from '../components/Headings'
import { Error, Success, Info } from '../components/Message'

function Dashboard() {
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
                        <Page title="Dashboard" />
                        <Section title="Section Title" description="Blanditiis nostrum consectetur sint delectus culpa doloremque. Rerum tempore mollitia, provident laborum magni expedita corrupti obcaecati asperiores eum, voluptatibus assumenda autem quis." />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum consectetur sint delectus culpa doloremque. Rerum tempore mollitia, provident laborum magni expedita corrupti obcaecati asperiores eum, voluptatibus assumenda autem quis.
                        <Stats />
                        <Error>This is an error message</Error>
                        <Success>This is a success message</Success>
                        <Info>This is an information message</Info>
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default Dashboard

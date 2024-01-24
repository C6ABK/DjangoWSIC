import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import PageHeading from '../components/PageHeading'
import SectionHeading from '../components/SectionHeading'
import Stats from '../components/Stats'

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
                        <PageHeading title="Page Title" />
                        <SectionHeading title="Section Title" description="Blanditiis nostrum consectetur sint delectus culpa doloremque. Rerum tempore mollitia, provident laborum magni expedita corrupti obcaecati asperiores eum, voluptatibus assumenda autem quis." />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nostrum consectetur sint delectus culpa doloremque. Rerum tempore mollitia, provident laborum magni expedita corrupti obcaecati asperiores eum, voluptatibus assumenda autem quis.
                        <Stats />
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default ProctectedScreen

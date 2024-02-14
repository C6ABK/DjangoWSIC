import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { Page, Section } from '../components/Headings'
import Structure from '../components/Structure'

function Teams() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        document.title = "Development Tasks"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <Page title="Development Tasks" />
                        <Section title="Core Structure" description="Loss Data refers to the same table - everything is universal except the third layer which records plant specific information"/>
                        <div className="px-4 pb-6">
                            <Structure />
                        </div>
                        
                        <Section title="High Priority" description="Implement core functionality for Morning Goods, simple components for relevant support tables."/>
                        <div className="px-4 pb-6">
                            <ul className="list-disc">
                                <li>User to initialise new day if Master record doesn't exist (message to confirm)</li>
                                <li>Searchable date text box to load a particular day</li>
                                <li>Buttons to cycle through dates - yesterday, tomorrow</li>
                                <li>Key Metrics basic input</li>
                                <li>MG Product</li>
                                <li>Loss Data</li>
                            </ul>
                        </div>

                        <Section title="Planned" />
                        <div className="px-4 pb-6">
                            <ul className="list-disc">
                                <li>Add site to update profile</li>
                                <li>Restrict non-admin users to only see their site, admins can see all</li>
                            </ul>
                        </div>
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default Teams

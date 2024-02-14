import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { Page, Section } from '../components/Headings'
import Structure from '../components/Structure'

function Dashboard() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        document.title = "Dashboard"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <Page title="Dashboard" />
                        <Section title="Core Structure" description="Loss Data refers to the same table - everything is universal except the B layer which records plant specific information"/>
                        <div className="px-4 pb-6">
                            <Structure />
                        </div>
                        
                        <Section title="High Priority" description="Implement core functionality for Morning Goods, simple components for relevant support tables."/>
                        <div className="px-4 pb-6">
                            <ul className="list-disc">
                                <li>DJANGO DYNAMIC FOREIGN KEY</li>
                                <li>CLARIFY DATA TYPES FOR MGPRODUCT MODEL</li>
                                <li>Re-evaluate models for CASCADE vs SET_NULL - user Profile model as an example</li>
                                <li>Remove the login debug profile message</li>
                                <li>Log out "staff undefined" error</li>
                                <li>Dodgy dashboard view or just old cached userInfo? profileInfo was assigned incorrectly so probably fixed.</li>
                                <li>User to initialise new day if Master record doesn't exist (message to confirm)</li>
                                <li>Determine proper app name & assign each document title on every page (append a master variable?)</li>
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
                                <li>Load site name based on ID</li>
                                <li>Restrict non-admin users to only see their site, admins can see all</li>
                                <li>Revisit Corrective Actions model - Owner field can't just be User? (allow "Production" or department?) - multiple foreign keys?</li>
                                <li>Financial calendar alert when coming to end - just ask whether next year is 4 or 5 week P13 (unless able to figure out?)</li>
                                <li>Logo slow to load - use Photoshop to get a collection of various different sized ones, single W logo too.</li>
                            </ul>
                        </div>
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default Dashboard

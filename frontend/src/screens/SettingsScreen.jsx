import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { listSites } from '../actions/settingsActions'

import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { Page } from '../components/Headings'
import Loader from '../components/Loader'

function Settings() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const sitesList = useSelector(state => state.sitesList)
    const { error, loading, sites } = sitesList

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        
        if (!userInfo.staff) {
            navigate("/dashboard")
        }

        dispatch(listSites())

        document.title = "Settings"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <Page title="Settings" />
                        {loading ? <Loader />
                            : error ? <h3>Error</h3>
                            :
                            <>
                                {sites.map(site => (
                                    <p>{site.siteName}</p>
                                ))}
                            </>
                        }
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default Settings

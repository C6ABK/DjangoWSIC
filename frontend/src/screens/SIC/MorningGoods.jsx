import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import KeyMetrics from '../../components/Demo/KeyMetrics'

function MorningGoods() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        document.title = "Morning Goods SIC"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <KeyMetrics />
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default MorningGoods

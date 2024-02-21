import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import KeyMetrics from '../../components/Demo/KeyMetrics'
import HealthAndSafety from '../../components/Demo/HealthAndSafety'

function MorningGoods() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        document.title = "SIC - Morning Goods"
    }, [navigate, userInfo])

    return (
        <>
            {userInfo && 
                <Sidebar userInfo={userInfo}>
                    <Card>
                        <KeyMetrics />
                        <HealthAndSafety />
                        {/* <div>Daily Quality Assessment Scores</div>
                        <div>Root Cause Problem Solving</div>
                        <div>SAP Performance Metrics</div>
                        <div>Workplace Organisation</div>
                        <div>Labour Control</div> */}
                    </Card>
                </Sidebar>
            }
        </>
    )
}

export default MorningGoods

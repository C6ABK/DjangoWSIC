import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import KeyMetrics from '../../components/Demo/KeyMetrics'
import Safety from '../../components/Demo/Safety'
import Quality from '../../components/Demo/Quality'
import RCPS from '../../components/Demo/RCPS'

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
                        <Safety />
                        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4">
                            <Quality />
                            <RCPS />
                        </div>
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

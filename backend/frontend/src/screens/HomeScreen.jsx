import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function HomeScreen() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        } else {
            navigate("/dashboard")
        }
    }, [navigate, userInfo])

    return (
        <>
            <div className="flex h-screen">
                <div className="m-auto">
                    <div className="space-y-4">
                        <img src="/images/warburtons_logo.png" className="h-16 w-auto animate-wiggle select-none" alt="logo" />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen

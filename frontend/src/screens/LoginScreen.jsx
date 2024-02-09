import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'
import { Error } from '../components/Message'
import { ThinContainer } from '../components/Containers'
import Card from '../components/Card'
import { TextBoxR, SubmitButton } from '../components/FormControls'

import { login } from '../actions/userActions'

function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            navigate("/")
        }
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <ThinContainer>
            <Card>
                {loading ? <Loader /> :
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        {error && <Error>{error}</Error>}

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={submitHandler}>
                                <TextBoxR 
                                    type={'text'}
                                    name={'Email'}
                                    id={'email'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <TextBoxR 
                                    type={'password'}
                                    name={'Password'}
                                    id={'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <SubmitButton type={'submit'} text={'Sign In'} />
                            </form>
                        </div>
                    </div>
                }
            </Card>
        </ThinContainer>
    )
}

export default LoginScreen
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Container from '../components/Container'
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
        <Container>
            <Card>
                {loading ? <Loader /> :
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-10 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        {error && <Message>{error}</Message>}

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
        </Container>
    )
}

export default LoginScreen
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Container from '../components/Container'
import Card from '../components/Card'
import { TextBoxR, SubmitButton } from '../components/FormControls'

function RegisterScreen() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate("/")
        }
    }, [userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword){
            setMessage('Passwords do not match')
        } else {
            dispatch(register(fname, lname, email, password))
        }
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
                                Register a new account
                            </h2>
                        </div>

                        {message && <Message>{message}</Message>}
                        {error && <Message>{error}</Message>}

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-4" onSubmit={submitHandler}>
                                <TextBoxR 
                                    type={'text'}
                                    name={'First Name'}
                                    id={'first_name'}
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />

                                <TextBoxR 
                                    type={'text'}
                                    name={'Last Name'}
                                    id={'last_name'}
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                />

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

                                <TextBoxR 
                                    type={'password'}
                                    name={'Confirm Password'}
                                    id={'confirm_password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />

                                <SubmitButton type={'submit'} text={'Create New Account'} />
                            </form>
                        </div>
                    </div>
                }
            </Card>
        </Container>
    )
}

export default RegisterScreen

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Container from '../components/Container'
import Card from '../components/Card'
import { TextBox, TextBoxR, SubmitButton } from '../components/FormControls'

function ProfileScreen({ history }) {
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        } else {
            if(!user || !user.first_name || success){
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
            } else {
                setFirst_name(user.first_name)
                setLast_name(user.last_name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'first_name': first_name,
                'last_name': last_name,
                'email': email,
                'password': password
            }))
            setMessage('')
        }
    }

    return (
        <Container>
            <Card>
                {loading ? <Loader /> : 
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Profile
                            </h2>
                        </div>

                        {message && <Message>{message}</Message>}
                        {error && <Message>{error}</Message>}

                        {success && <p>Success</p>}

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-4" onSubmit={submitHandler}>
                                <TextBoxR 
                                    type={'text'}
                                    name={'First Name'}
                                    id={'first_name'}
                                    value={first_name}
                                    onChange={(e) => setFirst_name(e.target.value)}
                                />

                                <TextBoxR 
                                    type={'text'}
                                    name={'Last Name'}
                                    id={'last_name'}
                                    value={last_name}
                                    onChange={(e) => setLast_name(e.target.value)}
                                />
                                
                                <TextBoxR 
                                    type={'text'}
                                    name={'Email'}
                                    id={'email'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <TextBox
                                    type={'password'}
                                    name={'Password'}
                                    id={'password'}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <TextBox
                                    type={'password'}
                                    name={'Confirm Password'}
                                    id={'confirm_password'}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />

                                <SubmitButton type={'submit'} text={'Update Profile'} />
                            </form>
                        </div>
                    </div>
                }
            </Card>
        </Container>
    )
}

export default ProfileScreen
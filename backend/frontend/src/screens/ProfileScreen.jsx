import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { getProfile } from '../actions/settingsActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

import Loader from '../components/Loader'
import { Error, SuccessNotification } from '../components/Message'
import { ThinContainer } from '../components/Containers'
import Card from '../components/Card'
import { TextBox, TextBoxR, SubmitButton } from '../components/FormControls'

function ProfileScreen() {
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
    const { success, showMsg } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        } else {
            if(!user || !user.first_name || success){
                dispatch({ type: USER_UPDATE_PROFILE_RESET })
                dispatch(getUserDetails('profile'))
                dispatch(getProfile())
            } else {
                setFirst_name(userInfo.first_name)
                setLast_name(userInfo.last_name)
                setEmail(userInfo.email)
            }
        }
        document.title = "Update Profile"
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
        <ThinContainer>
            <Card>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Profile 
                        </h2>
                    </div>

                    {message && <Error>{message}</Error>}
                    {error && <Error>{error}</Error>}

                    {showMsg && <SuccessNotification>Your profile has been updated.</SuccessNotification>}

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {loading ? <Loader /> :
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
                        }
                    </div>
                </div>
            </Card>
        </ThinContainer>
    )
}

export default ProfileScreen
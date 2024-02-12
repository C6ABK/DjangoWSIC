import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

import Loader from '../components/Loader'
import { Error } from '../components/Message'
import { ThinContainer } from '../components/Containers'
import Card from '../components/Card'
import { TextBoxR, SubmitButton } from '../components/FormControls'

import { listSites } from '../actions/settingsActions'

function RegisterScreen() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [userSite, setUserSite] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const sitesList = useSelector(state => state.sitesList)
    const { sitesError, sitesLoading, sites } = sitesList

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        dispatch(listSites())
    }, [userInfo, navigate, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword){
            setMessage('Passwords do not match')
        } else {
            dispatch(register(fname, lname, userSite, email, password))
        }
    }

    return (
      <ThinContainer>
        <Card>
          {loading ? (
            <Loader />
          ) : (
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Create a new user
                </h2>
              </div>

              {message && <Error>{message}</Error>}
              {error && <Error>{error}</Error>}

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              {sitesLoading ? (
                      <Loader />
                  ) : (
                <form className="space-y-4" onSubmit={submitHandler}>
                  <div className="flex flex-col w-full space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <TextBoxR
                      type={"text"}
                      name={"First Name"}
                      id={"first_name"}
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />

                    <TextBoxR
                      type={"text"}
                      name={"Last Name"}
                      id={"last_name"}
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>

                  {/* SELECT SITE HERE */}
                  
                  <div className="w-full">
                    <label
                      htmlFor="site"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Site
                    </label>
                    <div className="mt-2">
                      <select
                        name="site"
                        id="site"
                        value={userSite}
                        onChange={(e) => setUserSite(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      >
                          <option value='' disabled></option>
                          {sites?.map((site) => (
                              <option value={site.id}>{site.siteName}</option>
                          ))}

                      </select>
                    </div>
                  </div>
                  
                  <TextBoxR
                    type={"text"}
                    name={"Email"}
                    id={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextBoxR
                    type={"password"}
                    name={"Password"}
                    id={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <TextBoxR
                    type={"password"}
                    name={"Confirm Password"}
                    id={"confirm_password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <SubmitButton type={"submit"} text={"Create New Account"} />
                </form>
                )}
              </div>
            </div>
          )}
        </Card>
      </ThinContainer>
    );
}

export default RegisterScreen

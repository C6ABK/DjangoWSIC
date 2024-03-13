import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/userActions'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Disclosure as="nav" className="bg-white shadow-lg">
            {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">

                            <div className="flex flex-shrink-0 items-center">
                                <img
                                className="h-8 w-auto"
                                src="/images/WarburtonsSmall.png"
                                alt="Warburtons"
                                />
                            </div>

                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {!userInfo && 
                                    <NavLink to="/" className={({ isActive }) => isActive ? 
                                        "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900" : 
                                        "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" 
                                    }>
                                        Home
                                    </NavLink>
                                }
                                {userInfo && 
                                    <>
                                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 
                                            "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900" : 
                                            "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        }>
                                            Dashboard
                                        </NavLink>
                                    </>
                                }
                            </div>
                        </div>

                        <div className="hidden sm:ml-6 sm:flex sm:items-center">
                            {userInfo ? ( 
                            <>
                                {/* <button type="button" className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3 ">
                                    <div>
                                        <Menu.Button className="relative flex bg-white text-sm px-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-blue-500">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <span className="text-sm font-medium ">
                                                {userInfo.first_name} {userInfo.last_name}
                                            </span>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink to="/updateProfile" className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                        Your Profile
                                                    </NavLink>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink onClick={logoutHandler} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                        Sign out
                                                    </NavLink>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </>) : (
                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <div className="flex h-16 justify-between">
                                        <div className="flex">
                                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                                <NavLink to="/login" className={({ isActive }) => isActive ? 
                                                    "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900" : 
                                                    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                                }>
                                                    Log In
                                                </NavLink>
                                                <NavLink to="/register" className={({ isActive }) => isActive ? 
                                                    "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900" : 
                                                    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                                }>
                                                    Register
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                </div>

{/* MOBILE */}

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 pb-3 pt-2">
                        {/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                        <NavLink to="/">
                            <Disclosure.Button className="block border-l-4 border-blue-500 bg-blue-50 py-2 pl-3 pr-4 text-base font-medium text-blue-700">
                                Home
                            </Disclosure.Button>
                        </NavLink>

                        { userInfo ? ( 
                            <NavLink to="/dashboard">
                                <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                                    Dashboard
                                </Disclosure.Button>
                            </NavLink>
                        ) : (
                            <>
                                <NavLink to="/login">
                                    <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                                        Log In
                                    </Disclosure.Button>
                                </NavLink>
                                
                                <NavLink to="/register">
                                    <Disclosure.Button className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                                        Register
                                    </Disclosure.Button>
                                </NavLink>
                            </>
                        )}
                    </div>
                    
                    {userInfo &&
                        <div className="border-t border-gray-200 pb-3 pt-4">
                            <div className="flex items-center px-2">
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">
                                        {userInfo.first_name} {userInfo.last_name}
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        {userInfo.email}
                                    </div>
                                </div>

                                <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1">
                                <NavLink to="/updateProfile">
                                    <Disclosure.Button className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                                        Your Profile
                                    </Disclosure.Button>
                                </NavLink>

                                <NavLink onClick={logoutHandler}>
                                    <Disclosure.Button className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                                        Sign out
                                    </Disclosure.Button>
                                </NavLink>
                            </div>
                        </div>
                    }
                </Disclosure.Panel>
            </>
            )}
        </Disclosure>
    )
}

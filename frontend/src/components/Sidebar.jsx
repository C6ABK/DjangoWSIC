import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  HomeIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  XMarkIcon,
  UserCircleIcon,
  ArrowRightEndOnRectangleIcon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'

import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import SideBarLink from '../components/SideBarLink'
import Loader from '../components/Loader'
 
export default function Sidebar({children, userInfo}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const userProfile = useSelector(state => state.userProfile)
    const { profileLoading, profileInfo } = userProfile

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
    }

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
    }, [navigate, userInfo])

  return (
    <>
        {profileLoading ? <Loader /> :
        <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    </Transition.Child>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src="/images/WarburtonsSmall.png"
                                alt="Warburtons"
                            />
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul className="flex flex-1 flex-col gap-y-7 justify-between">
                            <li>
                                <ul className="-mx-2 space-y-1"> 

                                    <SideBarLink 
                                        icon={<HomeIcon />}
                                        text={"Dashboard"}
                                        to={"/dashboard"}
                                    />

                                    <SideBarLink 
                                        icon={<PresentationChartLineIcon />}
                                        text={"Short Interval Control"}
                                        to={"/sic"}
                                    />

                                    <SideBarLink 
                                        icon={<MagnifyingGlassIcon />}
                                        text={"Root Cause Problem Solving"}
                                        to={"/rcps"}
                                    />

                                    { (userInfo.staff !== undefined && userInfo.staff === true) && 
                                    <>
                                        <SideBarLink 
                                            icon={<Cog6ToothIcon />}
                                            text={"Settings"}
                                            to={"/settings"}
                                        />

                                        <SideBarLink 
                                            icon={<WrenchScrewdriverIcon />}
                                            text={"Dev"}
                                            to={"/changelog"}
                                        />
                                    </>
                                    }
                                </ul>
                            </li>

                            <li>
                                <ul className="-mx-2 space-y-1">
                                    <li>
                                        <NavLink to="/updateProfile" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                            <UserCircleIcon className= "HomeIcon text-gray-400 group-hover:text-blue-600 h-6 w-6 shrink-0'" aria-hidden="true"/>
                                            {userInfo.first_name} {userInfo.last_name} - {profileInfo.site}
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink onClick={logoutHandler} className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                            <ArrowRightEndOnRectangleIcon className= "HomeIcon text-gray-400 group-hover:text-blue-600 h-6 w-6 shrink-0'" aria-hidden="true"/>
                                            Sign Out
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            </ul>
                        </nav>
                    </div>
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                <div className="flex h-16 shrink-0 items-center">
                    <img
                        className="h-8 w-auto"
                        src="/images/WarburtonsSmall.png"
                        alt="Warburtons"
                    />
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul className="-mx-2 space-y-1">
                            
                            <SideBarLink 
                                icon={<HomeIcon />}
                                text={"Dashboard"}
                                to={"/dashboard"}
                            />

                            <SideBarLink 
                                icon={<PresentationChartLineIcon />}
                                text={"Short Interval Control"}
                                to={"/sic"}
                            />

                            <SideBarLink 
                                icon={<MagnifyingGlassIcon />}
                                text={"Root Cause Problem Solving"}
                                to={"/rcps"}
                            />
                            
                            { (userInfo.staff !== undefined && userInfo.staff === true) && 
                                <>
                                    <SideBarLink 
                                        icon={<Cog6ToothIcon />}
                                        text={"Settings"}
                                        to={"/settings"}
                                    />

                                    <SideBarLink 
                                        icon={<WrenchScrewdriverIcon />}
                                        text={"Dev"}
                                        to={"/changelog"}
                                    />
                                </>
                            }
                        </ul>
                    </li>
                    
                    <li className="-mx-6 mt-auto">
                        <NavLink to="/updateProfile" className="flex items-center gap-x-4 px-6 py-3 group text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            <UserCircleIcon className='text-gray-400 group-hover:text-blue-600 h-6 w-6 shrink-0' aria-hidden="true"/> 
                            <span className="sr-only">Your profile</span>
                            <span aria-hidden="true">{userInfo.first_name} {userInfo.last_name} - {profileInfo.site}</span>
                        </NavLink>

                        <NavLink onClick={logoutHandler} className="flex items-center gap-x-4 px-6 py-3 group text-sm font-semibold leading-6 text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            <ArrowRightEndOnRectangleIcon className='text-gray-400 group-hover:text-blue-600 h-6 w-6 shrink-0' aria-hidden="true"/> 
                            <span className="sr-only">Sign Out</span>
                            <span aria-hidden="true">Sign Out</span>
                        </NavLink>
                    </li>
                    
                    </ul>
                </nav>
            </div>
        </div>

            <div className="sticky top-0 z-40 flex justify-between items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                <img
                    className="h-8 w-auto"
                    src="/images/WarburtonsSmall.png"
                    alt="Warburtons"
                />

                <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>

            <main className="py-2 sm:py-4 lg:py-4 lg:pl-72">
                <div className="px-2 sm:px-4 lg:px-4">{children}</div>
            </main>
        </div>
}
    </>
  )
}

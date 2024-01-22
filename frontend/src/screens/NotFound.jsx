import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-white">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-white">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <NavLink to="/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-lg hover:bg-gray-200 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                            Go back home
                        </NavLink>
                    </div>
                </div>
            </main>
        </>
    )
  }
  
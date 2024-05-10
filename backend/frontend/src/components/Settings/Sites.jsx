import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import Loader from '../Loader'
import { Error } from '../Message'

import { listSites } from '../../actions/settingsActions'

function Sites() {
    const sitesList = useSelector(state => state.sitesList)
    const { sitesError, sitesLoading, sites } = sitesList

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listSites())
    }, [dispatch])

    return (
      <div className="w-1/4 p-4 border-2 border-gray-200 shadow-xl rounded-xl">
        {sitesLoading ? (
          <Loader />
        ) : (
          <>
            {sitesError && <Error>{sitesError}</Error>}
            <div>
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-lg font-semibold leading-6 text-gray-900">
                    Sites
                  </h1>
                  <p className="mt-2 text-sm text-gray-700">
                    A list of all sites &amp; W codes
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Add site
                  </button>
                </div>
              </div>
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                          >
                            ID
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            W Code
                          </th>
                          <th
                            scope="col"
                            className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                          >
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {sites?.map((sites) => (
                          <tr key={sites.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                              {sites.id}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {sites.siteName}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {sites.WCode}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <Link
                                to="#"
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Edit
                                <span className="sr-only">, {sites.siteName}</span>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default Sites

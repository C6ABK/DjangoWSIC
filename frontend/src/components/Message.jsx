import { ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export function Error({ children }) {
    return (
        <div className="rounded-md bg-red-100 p-4 mt-8 shadow-xl">
            <div className="flex">
                <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>

                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Attention needed</h3>
                    <div className="mt-2 text-sm text-red-700">
                        <p>
                            { children }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Success({ children }) {
    return (
        <div className="rounded-md bg-green-100 p-4 mt-8 shadow-xl">
            <div className="flex">
                <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                </div>

                <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Success</h3>
                    <div className="mt-2 text-sm text-green-700">
                        <p>
                            { children }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Info({ children }) {
    return (
        <div className="rounded-md bg-blue-100 p-4 mt-8 shadow-xl">
            <div className="flex">
                <div className="flex-shrink-0">
                    <InformationCircleIcon className="h-5 w-5 text-blue-500" aria-hidden="true" />
                </div>

                <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">{ children }</h3>
                </div>
            </div>
        </div>
    )
}
  
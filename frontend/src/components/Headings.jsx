export function Page({title}) {
    return (
        <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight pb-4">
                    {title}
                </h2>
            </div>
        </div>
    )
}

export function Section({title, description}) {
    return (
        <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-xl font-bold leading-6 text-gray-900">{title}</h3>
            {description && 
                <p className="mt-2 max-w-4xl text-sm text-gray-500">
                    {description}
                </p>
            }
        </div>
    )
}



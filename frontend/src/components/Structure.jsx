import { OrganizationChart } from 'primereact/organizationchart';

function Structure() {
    const data = [{
        label: 'Master',
        expanded: true,
        className: "px-8 py-4 rounded-lg border-8 border-blue-500 bg-blue-500 text-white w-full m-auto",
        children: [
            {
                label: 'Key Metrics',
                className: "px-8 py-4 rounded-lg border-8 border-emerald-500 bg-emerald-500 text-white w-full m-auto",
                expanded: true,
                children: [
                    {
                        label: 'MG Product',
                        className: "px-8 py-4 rounded-lg border-8 border-red-500 bg-red-500 text-white w-full m-auto",
                        expanded: true,
                        children: [
                            {
                                label: 'Loss Data',
                                className: "px-8 py-4 rounded-lg border-8 border-lime-500 bg-lime-500 text-white w-full m-auto",
                            }
                        ]
                    },
                    {
                        label: 'HP 4 Hourly KPIs',
                        className: "px-8 py-4 rounded-lg border-8 border-amber-500 bg-amber-500 text-white w-full m-auto",
                        expanded: true,
                        children: [
                            {
                                label: 'Loss Data',
                                className: "px-8 py-4 rounded-lg border-8 border-lime-500 bg-lime-500 text-white w-full m-auto",
                            }
                        ]
                    },
                    {
                        label: 'HP Hourly Count',
                        expanded: true,
                        className: "px-8 py-4 rounded-lg border-8 border-purple-500 bg-purple-500 text-white w-full m-auto",
                        children: [
                            {
                                label: 'Loss Data',
                                className: "px-8 py-4 rounded-lg border-8 border-lime-500 bg-lime-500 text-white w-full m-auto",
                            }
                        ]
                    },
                ]
            }
        ]
    }];

    return (
        <>
            <OrganizationChart value={data}></OrganizationChart>
        </>
    )
}

export default Structure

import { NavLink } from 'react-router-dom'
function SideBarLink({...props}) {
    return (
        <li>
            <NavLink to={props.to} className={({ isActive }) => isActive ? 
                "text-blue-600 bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold" : 
                "text-gray-700 hover:text-blue-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            }>
                <div className="h-6 w-6">
                    {props.icon}
                </div>
                
                {props.text}
            </NavLink>
        </li>
    )
}

export default SideBarLink

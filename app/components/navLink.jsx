import Link from 'next/link'
import React from 'react'

// import {Monoton} from '@next/font/google'

// const monoton = Monoton({
//     weight: 400
// })

const NavLink = ({href, title, id}) => {
    return (

        
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#b0b0b0] sm:text-xl font-dancescript rounded md:p-0 hover:text-white"
            id={id}
        >


        {title}
        </Link>
    )
}
export default NavLink;
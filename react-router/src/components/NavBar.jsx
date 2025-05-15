import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {
        path: '/',
        label: 'Home Page',
    }, {
        path: '/products',
        label: 'Prodotti',
    }, {
        path: '/about',
        label: 'Chi Siamo',
    }, {
        path: '/contacts',
        label: 'Contattaci',
    }
]

const NavBar = () => {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                isActive ? 'custom-link custom-link-active' : 'custom-link'
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;

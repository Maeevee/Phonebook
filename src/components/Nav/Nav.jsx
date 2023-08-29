import React from 'react'
import { nav } from '../../helpers/nav'
import { NavLink } from 'react-router-dom'
import LogoutBtn from '../LogoutBtn/LogoutBtn'
import { useAuth } from '../../hooks/useAuth'

const Nav = () => {

    const {isLogedin, user} = useAuth()

    return (
        <>
            <ul>
                {nav.map(({id, href, name}) => <li key={id}><NavLink to={href}>{name}</NavLink></li>)}
            </ul>
            {isLogedin && <p>{`Wellcome ${user.name}!`}</p>}
            {isLogedin && <LogoutBtn/>}
        </>
    )
}

export default Nav

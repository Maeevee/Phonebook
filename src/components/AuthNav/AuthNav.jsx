import { NavLink } from "react-router-dom"
import { nav } from "../../helpers/nav"

const AuthNav = () => {
  return (
    <ul>
        {nav.map( ({id, name, href}) => <li key={id}><NavLink to={href}>{name}</NavLink></li>)}
    </ul>
  )
}

export default AuthNav

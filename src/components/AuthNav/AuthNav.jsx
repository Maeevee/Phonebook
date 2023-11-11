import { NavLink, useLocation } from "react-router-dom"
import { nav } from "../../helpers/nav"
import styles from './AuthNav.module.css'

const AuthNav = () => {

  const location = useLocation(); 
  // const isCurrentPage = location.pathname === href;
  // const buttonClass = isCurrentPage
  //         ? `${styles.button} ${styles.activeButton}`
  //         : `${styles.button} ${styles.inactiveButton}`;

  return (
    <div className={styles.container}>
        {nav.map( ({id, name, href}) => {
        // Check if the current route matches the 'href' value
        const isCurrentPage = location.pathname === href;

        // Define separate CSS classes for active and inactive buttons
        const buttonClass = isCurrentPage
          ? `${styles.button} ${styles.activeButton}`
          : `${styles.button} ${styles.inactiveButton}`;

        return (
          <NavLink className={styles.link} key={id} to={href}>
            <button className={buttonClass}>{name}</button>
          </NavLink>
        );
      })}
    </div>
  )
}

export default AuthNav

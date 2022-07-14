import Link from "next/link"
import styles from "./Nav.module.scss"

export default function Nav(props) {
    const links = [
        {name:"Home",route:"/"},
        {name:"Books",route:"/books"},
        {name:"Login",route:"/login"},
        {name:"Signup",route:"/signup"},
        {name:"Cart",route:"/books/cart"},
        {name:"Logout",route:"/logout"}
    ]

    return (
        <div className={styles.navigation}>
            <input type="checkbox" className={styles.navigation__checkbox} id="navi-toggle" />

            <label for="navi-toggle" className={styles.navigation__button}>
                <span className={styles.navigation__icon}>&nbsp;</span>
            </label>

            <div className={styles.navigation__background}>&nbsp;</div>

            <nav className={styles.navigation__nav}>
                <ul className={styles.navigation__list}>
                    {links.map(link => (
                         <li key={link.name} className={styles.navigation__item}><Link href={link.route}><a className={styles.navigation__link}><span>{links.indexOf(link)+ 1}</span>{link.name}</a></Link></li>
                    ))}
                    {/* <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>01</span>About Natous</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>02</span>Your benfits</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>03</span>Popular tours</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>04</span>Stories</a></li>
                    <li className={styles.navigation__item}><a href="#" className={styles.navigation__link}><span>05</span>Book now</a></li> */}
                </ul>
            </nav>
        </div>
    )
}
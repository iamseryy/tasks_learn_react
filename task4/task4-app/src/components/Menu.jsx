import {Link} from "react-router-dom";
import styles from './menu.module.css'

export const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link to="/">Главная страница</Link>
                </li>
                <li>
                    <Link to="/about">О нас</Link>
                </li>
            </ul>
        </div>
    )
}
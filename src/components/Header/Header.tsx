import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from './styles.module.scss'

const Header:FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles["header-nav"]}>
                <NavLink
                    className={styles["header-nav__link"]}
                    to={`/`}
                >
                    Main Page
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
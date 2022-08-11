import React from 'react'
import styles from './Header.module.css'
import Nav from '../nav/Nav';

type HeaderPropsType = {}

function Header(props: HeaderPropsType) {
    return (

        <div className={styles.header}>
            <Nav/>
        </div>

    )
}

export default Header
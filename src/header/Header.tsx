import React from 'react'
import styles from './Header.module.scss'
import stylesContainer from './../../src/common/styles/container.module.css'
import Nav from '../nav/Nav';

type HeaderPropsType = {}

function Header(props: HeaderPropsType) {
    return (

        <div className={`${styles.header}`}>
            <Nav/>
        </div>

    )
}

export default Header
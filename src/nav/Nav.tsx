import React from 'react'
import styles from './Nav.module.scss'
import containerStyles from './../common/styles/container.module.css'
import { HashLink, NavHashLink } from 'react-router-hash-link'
import {Router} from 'react-router-dom';


type NavPropsType = {

}

const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

function Nav (props: NavPropsType) {
    return(
            <div className={`${containerStyles.container} ${styles.navContainer}`}>
                <div className={`${styles.nav} `}>
                    <NavHashLink activeClassName={`${styles.activeNav}`} to="/#main" scroll={el => scrollWithOffset(el)}>Главная</NavHashLink>
                    <NavHashLink activeClassName={`${styles.activeNav}`} to="/#skills" scroll={el => scrollWithOffset(el)}>Скиллы</NavHashLink>
                    <NavHashLink activeClassName={`${styles.activeNav}`} to="/#projects" scroll={el => scrollWithOffset(el)}>Проекты</NavHashLink>
                    <NavHashLink activeClassName={`${styles.activeNav}`} to="/#contacts" scroll={el => scrollWithOffset(el)}>Контакты</NavHashLink>
                </div>
            </div>
    )
}

export default Nav
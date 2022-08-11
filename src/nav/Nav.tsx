import React from 'react'
import styles from './Nav.module.css'
import containerStyles from './../common/styles/container.module.css'

type NavPropsType = {

}

function Nav (props: NavPropsType) {
    return(
        <div className={`${containerStyles.container} ${styles.navContainer}`}>
            <div className={`${styles.nav} `}>
                <a href="">Главная</a>
                <a href="">Скиллы</a>
                <a href="">Проекты</a>
                <a href="">Контакты</a>
            </div>
        </div>
    )
}

export default Nav
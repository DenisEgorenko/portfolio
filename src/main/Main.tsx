import React from 'react'
import styles from './Main.module.scss'
import styleContainer from './../common/styles/container.module.css'

type MainPropsType = {}

function Main(props: MainPropsType) {
    return (
        <div id={'main'} className={styles.main}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>

                <div className={styles.text}>
                    <span className={styles.textGreetings}>Всем привет!</span>
                    <h1 className={styles.textName}>Меня Зовут Денис Егоренко</h1>
                    <p className={styles.textGreetings}>Я Front-End разработчик</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}

export default Main
import React from 'react'
import styles from './Main.module.css'
import styleContainer from './../common/styles/container.module.css'

type MainPropsType = {}

function Main(props: MainPropsType) {
    return (
        <div className={styles.main}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>

                <div className={styles.text}>
                    <span>Всем привет!</span>
                    <h1>Меня зовут Денис Егоренко</h1>
                    <p>Я Front-End разработчик</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}

export default Main
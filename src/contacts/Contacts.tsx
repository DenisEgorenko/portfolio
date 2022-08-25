import React from 'react'
import styles from './Contacts.module.css'
import styleContainer from './../common/styles/container.module.css'
import Title from '../common/components/title/Title';

type Contacts = {}

function Contacts(props: Contacts) {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>

                <Title text={'Контакты'}/>

                <div className={styles.formBlock}>
                    <form className={styles.form}>
                        <input placeholder={'Имя'}/>
                        <input placeholder={'Почта'}/>
                        <textarea placeholder={'Сообщение'}/>
                        <button>Отправить</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contacts
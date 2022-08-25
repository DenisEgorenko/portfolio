import React from 'react'
import styles from './Footer.module.css'
import styleContainer from './../common/styles/container.module.css'
import Title from '../common/components/title/Title';

type FooterType = {

}

function Footer(props: FooterType) {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>

                <Title text={'Денис Егоренко'}/>

                <div className={styles.iconBlock}>
                    <div className={styles.iconItem}></div>
                    <div className={styles.iconItem}></div>
                    <div className={styles.iconItem}></div>
                    <div className={styles.iconItem}></div>
                </div>
                <h4 className={styles.title}>© 2022 Все права защищены</h4>
            </div>
        </div>
    )
}

export default Footer
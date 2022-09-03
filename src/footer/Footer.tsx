import React from 'react'
import styles from './Footer.module.scss'
import styleContainer from './../common/styles/container.module.css'
import Title from '../common/components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


type FooterType = {

}

function Footer(props: FooterType) {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>

                <div className={styles.iconBlock}>
                    <div className={styles.iconItem}>
                        <FontAwesomeIcon className={styles.icon} icon={faVk}/>
                    </div>
                    <div className={styles.iconItem}>
                        <FontAwesomeIcon className={styles.icon} icon={faTelegram}/>
                    </div>
                    <div className={styles.iconItem}>
                        <FontAwesomeIcon className={styles.icon} icon={faGithub}/>
                    </div>
                </div>
                <h4 className={styles.title}>© 2022 Все права защищены</h4>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import styles from './Works.module.css'
import styleContainer from './../common/styles/container.module.css'
import Work from './work/Work';

type WorksPropsType = {

}

function Works (props: WorksPropsType) {
    return(
        <div className={styles.worksBlock}>
            <div className={`${styleContainer.container} ${styles.worksContainer}`}>
                <h2 className={styles.title}>Мои Работы</h2>
                <div className={styles.works}>
                    <Work title={'Название проекта'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}/>
                    <Work title={'Название проекта'} description={'Lorem ipsum'}/>
                </div>
            </div>
        </div>
    )
}

export default Works
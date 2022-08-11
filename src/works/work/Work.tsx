import React from 'react'
import styles from './Work.module.css'

type WorkPropsType = {
    title: string
    description: string
}

function Work (props: WorkPropsType) {
    return(
        <div className={styles.workBlock}>
            <div className={styles.img}>
                <button>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <p className={styles.description}>
                {props.description}
            </p>
        </div>
    )
}

export default Work
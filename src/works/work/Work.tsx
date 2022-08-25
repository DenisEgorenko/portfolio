import React from 'react'
import styles from './Work.module.scss'

type WorkPropsType = {
    title: string
    description: string
    backgroundImage?: {backgroundImage: string}
}

function Work (props: WorkPropsType) {
    return(
        <div className={styles.workBlock}>
            <div style={props.backgroundImage} className={styles.img}>
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
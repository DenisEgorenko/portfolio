import React from 'react'
import styles from './Title.module.scss';

type titleProps = {
    text: string
}

function title (props: titleProps) {
    return(
        <div className={styles.title}>
            <h2>{props.text}</h2>
        </div>
    )
}

export default title
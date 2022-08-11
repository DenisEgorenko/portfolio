import React from 'react'
import styles from './Skill.module.css'

type SkillPropsType = {
    title: string
    description: string
}

function Skill (props: SkillPropsType) {
    return(
        <div className={styles.skillBlock}>
            <div className={styles.icon}></div>
            <h3>{props.title}</h3>
            <p className={styles.description}>
                {props.description}
            </p>
        </div>
    )
}

export default Skill
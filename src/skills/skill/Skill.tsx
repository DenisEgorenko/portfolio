import React from 'react'
import styles from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-brands-svg-icons';

type SkillPropsType = {
    title: string,
    description: string,
    icon: IconDefinition
}

function Skill (props: SkillPropsType) {
    return(
        <div className={styles.skillBlock}>
            <div className={styles.iconBlock}>
                <FontAwesomeIcon className={styles.icon} icon={props.icon}/>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>
                {props.description}
            </p>
        </div>
    )
}

export default Skill
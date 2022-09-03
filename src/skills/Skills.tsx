import React from 'react'
import styles from './Skills.module.scss'
import styleContainer from './../common/styles/container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faJs} from '@fortawesome/free-brands-svg-icons'


type SkillsPropsType = {}


function Skills(props: SkillsPropsType) {
    return (
        <div id={'skills'} className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>

                <Title text={'Скиллы'}/>

                <div className={styles.skills}>
                    <Skill title={'React'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}
                           icon={faReact}/>
                    <Skill title={'HTML/CSS'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'} icon={faHtml5}/>
                    <Skill title={'JavaScript'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'} icon={faJs}/>
                </div>
            </div>
        </div>
    )
}

export default Skills
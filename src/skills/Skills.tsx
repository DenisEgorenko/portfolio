import React from 'react'
import styles from './Skills.module.css'
import styleContainer from './../common/styles/container.module.css'
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';

type SkillsPropsType = {}

function Skills(props: SkillsPropsType) {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>

                <Title text={'Скиллы'}/>

                <div className={styles.skills}>
                    <Skill title={'title 1'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}/>
                    <Skill title={'title 2'} description={'Lorem ipsum'}/>
                    <Skill title={'title 3'} description={'Lorem ipsum'}/>
                </div>
            </div>
        </div>
    )
}

export default Skills
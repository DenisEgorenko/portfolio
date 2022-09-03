import React from 'react'
import styles from './Works.module.scss'
import styleContainer from './../common/styles/container.module.css'
import Work from './work/Work';
import Title from '../common/components/title/Title';
import socialNetworkImage from './../assets/images/46053583.jpg'
import CardsImage from './../assets/images/3813681.png'

type WorksPropsType = {

}

function Works (props: WorksPropsType) {

    const socialNetwork = {
        backgroundImage: `url(${socialNetworkImage})`
    }

    const cards = {
        backgroundImage: `url(${CardsImage})`
    }


    return(
        <div id={'projects'} className={styles.worksBlock}>
            <div className={`${styleContainer.container} ${styles.worksContainer}`}>

                <Title text={'Мои Работы'}/>

                <div className={styles.works}>
                    <Work backgroundImage={socialNetwork} title={'Социальная сеть'} description={'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'}/>
                    <Work backgroundImage={cards} title={'Карточки для слов'} description={'Lorem ipsum'}/>
                </div>
            </div>
        </div>
    )
}

export default Works
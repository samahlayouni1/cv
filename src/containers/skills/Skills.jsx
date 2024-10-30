import React from 'react'
import PageHeaderContent from '../../components/headerContent/PageHeaderContent'
import {BsInfoCircleFill} from 'react-icons/bs'
import {SkillsData} from './utils'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import './styles.css'

function Skills() {
  return (
    <section id='skills' className='skills'>
       

    <PageHeaderContent
    headerText = "My Skills"
    icon = { <BsInfoCircleFill size={40}/>}
    />

    <div className='skills__content-wrapper'>
    { SkillsData.map((item,i)=>(
      <div key={i} className='skills__content-wrapper__inner-content'>

      <Animate play duration={1} delay={0.3}  start={{transform:'translateX(-200px)'}} end={{transform:'translateX(0px)'}}>
        <h3 className='skills__content-wrapper__inner-content__category-text'>{item.label}</h3>
        <div>
           {
            item.data.map((skillsItem, j)=>(
              <AnimateKeyframes play duration={1} keyframes={["opacity : 1", "opacity :0"]} iterationCount="1">
                  <div className='progressbar-wrapper' key={j}>
                    <p>{skillsItem.skillsName}</p>
                      <Line percent={skillsItem.percentage} strokeWidth="2" strokeColor="black" trailWidth={"2"} strokeLinecap='square'
                      trailColor='white'/>

                  </div>

              </AnimateKeyframes>
            ))
           }
        </div>
      </Animate>

      </div>
    ))

    }

    </div>
    </section>
  )
}

export default Skills
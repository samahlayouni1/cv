import React from 'react';
import PageHeaderContent from '../../components/headerContent/PageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import './styles.css';
import { Animate } from 'react-simple-animate';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

function About() {
  const personalDetails = [
    {
      label: 'Name',
      value: 'Samah Layouni',
    },
    {
      label: 'Age',
      value: '29',
    },
    {
      label: 'Address',
      value: 'Touza, Monastir, Tunisia',
    },
    {
      label: 'Email',
      value: 'saamahlayouni@gmail.com',
    },
    {
      label: 'Phone',
      value: '+216 96 506 627',
    },
  ];

  const jobSummary = `I am a professional with a Bachelor’s degree in Applied Economics (specializing in financial techniques for insurance and banking) and a Master’s degree in Social and Solidarity Economics. Additionally, I have experience in web development. During my studies, I took advantage of many internships to explore the daily operations of these 3 fields. I aim to enhance my technical and organizational skills.`;

  return (
    <section id='about' className='about'>
      <PageHeaderContent 
        headerText='About Me'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalwrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(-900px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3>Economiste, <br/>Full-Stack Developer and Graphic Designer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3 className='personalinformationheadertext'>Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='title'>{item.label}:</span> 
                  <span className='value'>{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about__content__serviceswrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <div className='about__content__serviceswrapper__innercontent'>
              <div>
                <FaDev color='#5784BA' size={60} />
              </div>
              <div>
                <DiAndroid color='#5784BA' size={60} />
              </div>
              <div>
                <DiApple color='#5784BA' size={60} />
              </div>
              <div>
                <FaDatabase color='#5784BA' size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from 'react';
import PageHeaderContent from '../../components/headerContent/PageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ResumeData } from './utils';
import './styles.css';
import { MdWork, MdSchool, MdPeopleAlt } from 'react-icons/md';

function Resume() {
  const data = ResumeData[0];

  return (
    <section id='resume' className='resume'>
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='timeline'>
        <div className='timeline__experience'>
          <h3 className='timeline__experience__header-text'>Experience</h3>
          <VerticalTimeline layout={'1-column'} lineColor='#5784BA'>
            {data.experience.map((item, i) => (
              <VerticalTimelineElement 
                key={i} 
                className='timeline__experience__vertical-timeline-element' 
                contentStyle={{ background: "none", color: "white", border: "1.5px solid #5784BA" }}
                icon={<MdWork />}
              >
                <div className='vertical-timeline-element-title-wrapper'>
                  <h3 className='vertical-timeline-element-title'  style={{color: "black"}}>{item.Title}</h3>
                  <h4 className='vertical-timeline-element-subtitle'  style={{color: "black"}}>{item.subTitle}</h4>
                  <h4 className='vertical-timeline-element-date'  style={{color: "black"}}>{item.date}</h4>
                  <h4  style={{color: "black"}}>{item.description}</h4>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className='timeline__education'>
          <h3 className='timeline__experience__header-text'>Education</h3>
          <VerticalTimeline layout={'1-column'} lineColor='#5784BA'>
            {data.Education.map((item, i) => (
              <VerticalTimelineElement 
                key={i} 
                className='timeline__experience__vertical-timeline-element' 
                contentStyle={{ background: "none", color: "white", border: "1.5px solid #5784BA" }}
                icon={<MdSchool />}
              >
                <div className='vertical-timeline-element-title-wrapper'>
                  <h3 className='vertical-timeline-element-title' style={{color: "black"}}>{item.Title}</h3>
                  <h4 className='vertical-timeline-element-subtitle'  style={{color: "black"}}>{item.Université}</h4>
                  <h4 className='vertical-timeline-element-date'  style={{color: "black"}}>{item.date}</h4>
                  <h4  style={{color: "black", fontSize:"100px"}}>{item.description}</h4>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className='timeline__education'>
          <h3 className='timeline__experience__header-text'>Associative Life</h3>
          <VerticalTimeline layout={'1-column'} lineColor='#5784BA'>
            {data.ASSOCIATIVE_LIFE.map((item, i) => (
              <VerticalTimelineElement 
                key={i} 
                className='timeline__experience__vertical-timeline-element' 
                contentStyle={{ background: "none", color: "white", border: "1.5px solid #5784BA" }}
                icon={<MdPeopleAlt />}
              >
                <div className='vertical-timeline-element-title-wrapper'>
                  <h3 className='vertical-timeline-element-title'  style={{color: "black"}}>{item.Title}</h3>
                  <h4 className='vertical-timeline-element-subtitle'  style={{color: "black"}}>{item.Université}</h4>
                  <h4 className='vertical-timeline-element-date'  style={{color: "black"}}>{item.date}</h4>
                  <h4  className='vertical-timeline-element-description' style={{color: "black"}}>{item.description}</h4>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Resume;

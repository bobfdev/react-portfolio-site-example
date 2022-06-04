import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2008 - 2011'
          iconStyle={{ background: 'rgb(134, 21, 21)', color: '#fff' }} 
          icon={<IoMdSchool />}
          >
          <h3 className='vertical-element-timeline-title'>
            University of Massachusetts - Amherst
          </h3>
          <h4 style={{ fontStyle: 'italic', color: '#8e8e8ee4' }}>Amherst, Massachusetts</h4>
          <p>Bachelor's Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2011 - 2012'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          icon={<MdWork />}
          >
          <h3 className='vertical-element-timeline-title'>
            Sunrise Sports & Entertainment/Florida Panthers
          </h3>
          <h4 style={{ fontStyle: 'italic', color: '#8e8e8ee4' }}>Sunrise, Florida</h4>
          <p>Inside Sales Representative</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2012 - 2014'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          icon={<MdWork />}
          >
          <h3 className='vertical-element-timeline-title'>
            Harrow Sports
          </h3>
          <h4 style={{ fontStyle: 'italic', color: '#8e8e8ee4' }}>Weston, Florida</h4>
          <p>Regional Sales Consultant</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2014 - 2016'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          icon={<MdWork />}
          >
          <h3 className='vertical-element-timeline-title'>
            BigCommerce
          </h3>
          <h4 style={{ fontStyle: 'italic', color: '#8e8e8ee4' }}>Austin, Texas</h4>
          <p>Account Executive</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2016 - 2018'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          icon={<MdWork />}
          >
          <h3 className='vertical-element-timeline-title'>
            Qualtrics
          </h3>
          <h4 style={{ fontStyle: 'italic', color: '#8e8e8ee4' }}>Plano, Texas</h4>
          <p>Senior Account Executive</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2018 - 2019'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          icon={<MdWork />}
          >
          <h3 className='vertical-element-timeline-title'>
            MapAnything
          </h3>
          <h4 style={{ fontStyle: 'italic', color: '#8e8e8ee4' }}>Dallas, Texas</h4>
          <p>Enterprise Account Executive</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2019 - 2020'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          icon={<MdWork />}
          >
          <h3 className='vertical-element-timeline-title'>
            OwnBackup
          </h3>
          <h4 style={{ fontStyle: 'italic', color: '#8e8e8ee4' }}>Dallas, Texas</h4>
          <p>Enterprise Account Executive</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2020 - Present'
          iconStyle={{ background: 'rgb(142, 33, 243)', color: '#fff' }} 
          icon={<FaLaptopCode />}
          >
          <h3 className='vertical-element-timeline-title'>
            Web Developer
          </h3>
          <p>Online Courses</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2021 - Present'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} 
          icon={<MdWork />}
          >
          <h3 className='vertical-element-timeline-title'>
            Property Guard
          </h3>
          <h4 style={{ fontStyle: 'italic', color: '#8e8e8ee4' }}>Dallas, Texas</h4>
          <p>Vice President</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
import React from 'react'
import './learn.css'
import LearnLesson from './learnLesson/LearnLesson'

const Learn = () => {
  return (
    <div className='sl-learn-course__main' style={{paddingTop: "100px"}}>
      <div className='sl-learn-course__main__desc-wrapper'>
        <img className='sl-course-desc__icon' src='https://sololearnuploads.azureedge.net/uploads/courses/1097.png' alt='React'/>
        <div className='sl-course-desc__texts-wrapper'>
          <h1 className='sl-course-desc__title'>React</h1>
          <span className='sl-course-desc__desc'>Learn to build powerful interactive user interfaces using a popular JavaScript library trusted by Facebook and Uber. Dive into the core concepts of React and Redux.</span>
        </div>
      </div>

      <div className='sl-learn-course__main__modules-wrapper'>
        
        <LearnLesson/>
        <LearnLesson/>
      </div>
    </div>
  )
}

export default Learn
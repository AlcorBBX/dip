import React from 'react'
import './lesson.css'

const Lesson = () => {
  return (
    <div className='sl-lesson__content-container'>
        <p className='sl-lesson__content-comments'>125 Комментария</p>
        <div className='sl-description'>
            <span className='sl-description-title'>Create React App</span>
            <p className='sl-description-subtitle'>
            In the previous lesson we learned how to add React to a simple HTML document using the script tags.
            However, real web apps have a different scale, contain multiple files, use 3rd party libraries, etc.<br/><br/>

            Facebook has created a handy tool called Create React App that makes it easy to setup a React project with just a simple command!<br/><br/>

            To get started, make sure you have a recent version of Node installed on your machine.<br/><br/>
            Run the following commands in the Terminal to create and start a React app called "my-app":<br/><br/>
            </p>
            <div className='sl-description-code '>
                <span className='sl-description-text'>npx create-react-app my-app<br/>
                                                    cd my-app<br/>
                                                    npm start </span>
            </div>
            <p className='sl-description-subtitle'>This will install all the required 
                dependencies, configure and start the project on localhost:3000.</p>
            <div className='sl-description-note'>
                <span className='sl-description-note__content'><strong>Create React App</strong> allows us 
                to focus on the code, rather than 
                installing and configuring different tools.</span>
            </div>
        </div>

        {/* <LessonPractic/> */}
    </div>
  )
}

export default Lesson
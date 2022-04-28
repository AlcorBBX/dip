import { Container } from '@mui/material'
import React from 'react'
import './lessonPractic.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Example from './practicVariants/pracricComponents/Example';

const LessonPractic = () => {
  
  return (
    <Container maxWidth="sm" className='lessonPractic' style={{paddingTop: '100px'}}>
        	<DndProvider backend={HTML5Backend}>
					<Example />
				</DndProvider>
    </Container>
  )
}



const VariantOne = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <div>
        <div className='practicTitle'>
          <span className='' >{`Capture vs. Bubbing ${matches}`}</span>
        </div>
        <div className='practicDescription'>
        <span className=''>{`Drag and drop from the options below to handle the click event and use caprufdsbfbfbdsub ${matches}`}</span>
        </div>
        <div className='practicTest'>
            
        </div>
        <div className='practicVariants'>
            
        </div>
      </div>
  )
}


const variantTwo = () => {
  var placeholder = document.createElement("li");
  placeholder.className = "placeholder";
  
  return (
    <div>
      
    </div>
  )
}

const variantFree = () => {

  return (
    <div>
      
    </div>
  )
}

export default LessonPractic
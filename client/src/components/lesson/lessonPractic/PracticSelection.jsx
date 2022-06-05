import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const PracticSelection = ({practic}) => {
    const [check, setCheck] = useState()
    const [color, setColor] = useState('white')
    const [loading, setLoading] = useState(true)
    const [answer, setAnswer] = useState()
    const [first, setfirst] = useState()
    useEffect(() => {
      check === true ? setColor('gray') : setColor('white')
    }, [check])
    const arr = [1,2,3,4]
    const style = {
      background: `${color}`,
      color: 'black',
      border: '1px solid black',
      marginBottom: '10px'
    };

    setTimeout(() => {
      practic.map((practic) =>
        practic.lessonId === 1 ?
          setfirst(practic): console.log("2")
        )
      setAnswer(first.answer)
      setLoading(false)
      console.log(first.variant[0]) 
      first?.variant.map((variant) => console.log(variant))
    }, 4000); 
    console.log(color)
  return (
    <div style={{margin: '0 auto'}}>
        <div>
          <Typography variant="h4" gutterBottom component="div" color={'white'}>
            {first?.title}
          </Typography>
          <Typography sx={{marginBottom: '50px'}} variant="h5" gutterBottom component="div" color={'white'}>
          {first?.text}
          </Typography>
        </div>
        {arr.map((arr) => 
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <FormControlLabel 
              control={<Checkbox onChange={(e) => setCheck(e.target.checked)} sx={{color: 'black'}}/>} 
              label="Label"  
              sx={{...style}}/>
        </div>
        )}
        <div style={{display: 'flex', justifyContent: 'end'}}>
          {check === true ? 
            <Button variant="contained">Проверить</Button>
           : <Button disabled variant="contained">Проверить</Button>}
        </div>
    </div>
  )
}

export default PracticSelection
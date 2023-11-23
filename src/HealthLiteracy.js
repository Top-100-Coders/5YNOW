import React from 'react'
import HealthLiteracyGame from './HealthLiteracyGame'
import HealthLiteracySlides from './HealthLiteracySlides'

function HealthLiteracy() {
  return (
    <div style={{backgroundColor:"yellow", position:"relative", bottom:"50px"}}>
      <HealthLiteracyGame />     
      <HealthLiteracySlides />
    </div>
  )
}

export default HealthLiteracy
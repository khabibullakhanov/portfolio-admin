import React from 'react'
import { Charts } from '../../Companents/Charts/Charts'
import { MostSeen } from '../../Companents/MostSeen/MostSeen'
import "./Home.css"


export function Home() {
  return (
    <div id='home-main-container'>
      <MostSeen />
      <Charts />
    </div>
  )
}

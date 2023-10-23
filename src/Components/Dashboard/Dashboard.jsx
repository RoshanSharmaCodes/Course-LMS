import React from 'react'
import "./Dashboard.css"
import CourseGrid from '../CourseGrid/CourseGrid'

export default function Dashboard() {
  return (
    <div className='dashboardContainer'>
    <div className="sideBarContainer">

    </div>
    <div className="moduleContainer">
        <CourseGrid/>
    </div>
    </div>
  )
}

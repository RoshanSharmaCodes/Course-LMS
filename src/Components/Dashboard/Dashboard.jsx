import React from 'react'
import "./Dashboard.css"
import CourseGrid from '../CourseGrid/CourseGrid'
import Sidebar from '../Sidebar/Sidebar'

export default function Dashboard() {
  return (
    <div className='dashboardContainer'>
    <div className="sideBarContainer">
    <Sidebar/>
    </div>
    <div className="moduleContainer">
        <CourseGrid/>
    </div>
    </div>
  )
}

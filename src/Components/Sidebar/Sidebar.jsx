import React, { useState } from "react"
import "./Sidebar.css"
import { Avatar, Typography, Select, MenuItem, Input, InputLabel, Box, FormControl, Button, Modal, FormHelperText, TextField } from "@mui/material"

export default function Sidebar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    p: 4,
  }

  const addCourseStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    p: 4,
  }

  const [selectedCourse, setSelectedCourse] = useState("Course 1")
  const [courseList, showCourseList] = useState(false)
  const [addCourse, setAddCourse] = useState(false)

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value)
  }

  const openAddCourse = () => {
    setAddCourse(true)
  }

  const closeAddCourse = () => {
    setAddCourse(false)
  }

  const openListCourse = () => {
    showCourseList(true)
  }

  const closeListCourse = () => {
    showCourseList(false)
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  var names = ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"]

  const rows = [
    createData("Creating Layout", "Done", 6.0, 24),
    createData("Login Form", "WIP", 9.0, 37),
    createData("Registration Form", "Done", 16.0, 24),
    createData("State Management", "Done", 3.7, 67),
    createData("Creating Modal", "Done", 16.0, 49),
  ]
  return (
    <div className="sidebarContainer">
      <div className="sidebarProfile">
        <Avatar sx={{ width: 150, height: 150 }} />
        <Typography variant="h6">Roshan Sharma</Typography>
      </div>
      <div className="sidebarCourses">
        <FormControl>
          <InputLabel id="demo-multiple-name-label">Select Project</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={selectedCourse}
            label="Project Name"
            style={{ minWidth: 300 }}
            onChange={(e) => handleCourseChange(e)}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="sidebarOptions">
        <Button variant="contained" onClick={openAddCourse} className="standardBtn" style={{ width: 200, marginBottom: 10, height: 50 }}>
          Add Course
        </Button>
        <Button variant="contained" className="standardBtn" onClick={openListCourse} style={{ width: 200, marginBottom: 10, height: 50 }}>
          List Courses
        </Button>

        <Button
          variant="outlined"
          style={{
            width: 200,
            marginBottom: 10,
            height: 50,
            borderRadius: 30,
            backgroundColor: "white",
            color: "#1976d2",
            borderColor: "#1976d2",
            borderWidth: 3,
          }}
        >
          Logout
        </Button>
      </div>
      <Modal open={addCourse} onClose={closeAddCourse} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={addCourseStyle}>
          <TextField id="outlined-basic" label="Course Name" variant="outlined" />
          <TextField id="outlined-basic" type="number" label="Cost" variant="outlined" />
          <Button variant="contained" component="label">
            Upload Thumbnail
            <input type="file" hidden />
          </Button>
          <Button variant="contained">Add Course</Button>
        </Box>
      </Modal>

      <Modal open={courseList} onClose={closeListCourse} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

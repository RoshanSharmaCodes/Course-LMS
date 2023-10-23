import React, { useState } from "react"
import "./CourseGrid.css"
import { ControlPoint } from "@mui/icons-material"
import { Box, Modal, Typography } from "@mui/material"
import Appbar from "../Appbar/Appbar"

export default function CourseGrid() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor:"white",
    p: 4,
  }

  const [addVideo, setAddVideo] = useState(false)

  const openAddVideo = () => {
    setAddVideo(true)
  }

  const closeAddVideo = () => {
    setAddVideo(false)
  }

  return (
    <div className="courseContainer">
      <Appbar/>
      <div className="courseMain">
        <div className="addCourseCard" onClick={openAddVideo} >
          <ControlPoint color="lightgray" style={{ width: 50, height: 50, color: "lightgray" }} />
        </div>
        <div className="courseCard" ></div>
      </div>

      <Modal open={addVideo} onClose={closeAddVideo} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

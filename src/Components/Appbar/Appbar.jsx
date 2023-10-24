import React, { useState } from "react"
import "./Appbar.css"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { Modal, Typography } from "@mui/material"

export default function Appbar() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    backgroundColor: "white",
    p: 4,
  }

  const [openPublish, setPublicLink] = useState(false)
  const [moduleList, setModuleList] = useState(false)
  const [copyText, setCopyText] = useState("Copy")

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ]

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
  }

  const changeCopyText = () => {
    setCopyText("Copied")
  }

  const openPublishLink = () => {
    setPublicLink(true)
  }

  const closePublishLink = () => {
    setPublicLink(false)
  }

  const openModuleList = () => {
    setModuleList(true)
  }

  const closeModuleList = () => {
    setModuleList(false)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ width: "95%", marginBottom: "20px" }}>
        <Toolbar>
          <Button color="inherit" variant="outlined" onClick={openPublishLink} style={{ marginRight: 20 }}>
            Publish
          </Button>
          <Button color="inherit" variant="outlined" onClick={openModuleList} style={{ marginRight: 20 }}>
            Edit Listing
          </Button>
          <Button color="inherit" variant="outlined" onClick={openModuleList}>
            Edit Course
          </Button>
        </Toolbar>
      </AppBar>

      <Modal open={openPublish} onClose={closePublishLink} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share this link with your students!
          </Typography>
          <Button variant="contained" color="success" onClick={changeCopyText}>
            {copyText}
          </Button>
        </Box>
      </Modal>
      <Modal open={moduleList} onClose={closeModuleList} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Index</TableCell>
                  <TableCell align="center">Module Name</TableCell>
                  <TableCell align="center">Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center">{index + 1}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </Box>
  )
}

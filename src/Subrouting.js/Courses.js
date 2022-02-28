import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import react from './ReactJS.png';
import node from './nodejs.png';
import express from './express.png'
import python2 from './python2.png'
import java from './java.png'
import js2 from './js2.png'
import css from './css.png'
import bootstrap from './bootstrap.png'
import html from './html.jpeg'


function Courses() {
  return (
    <div className='course'>
    
    <Box sx={{pt:10}}>
       {/* ------------------1st card---------------- */}
      <Card sx={{ maxWidth:350,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="175"
        image = {python2}
        alt="React"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          PYTHON
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"> Book The Course </Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
{/* ------------------2nd card---------------- */}
      <Card sx={{ maxWidth: 350,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="175"
        width='20'
        image = {java}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JAVA
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book The Course</Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
    {/* ------------------3rd card---------------- */}
      <Card sx={{ maxWidth: 365,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="175"
        image = {js2}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          JAVASCRIPT
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book The Course</Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
    </Box>

    {/* ----------------2nd row card---------------- */}

    <Box sx={{pt:10}}>
       {/* ------------------1st card---------------- */}
      <Card sx={{ maxWidth:355,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {react}
        alt="React"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          REACT JS
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book The Course</Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
{/* ------------------2nd card---------------- */}
      <Card sx={{ maxWidth: 355,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {node}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NODE JS
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book The Course</Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
    {/* ------------------3rd card---------------- */}
      <Card sx={{ maxWidth: 355,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {express}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          EXPRESS JS
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book The Course</Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
    </Box>

    {/*  --------------------3rd row--------------------- */ }

    <Box sx={{pt:10}}>
       {/* ------------------1st card---------------- */}
      <Card sx={{ maxWidth:355,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {html}
        alt="React"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HTML
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book The Course</Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
{/* ------------------2nd card---------------- */}
      <Card sx={{ maxWidth: 355,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {css}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CSS
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book The Course</Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
    {/* ------------------3rd card---------------- */}
      <Card sx={{ maxWidth: 355,float:"left",m:4 }}>
      <CardMedia
        component="img"
        height="140"
        image = {bootstrap}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          BOOTSTRAP
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Book The Course</Button>
        <Button size="small">About the Course</Button>
      </CardActions>
    </Card>
    </Box>

    </div>
  )
}

export default Courses
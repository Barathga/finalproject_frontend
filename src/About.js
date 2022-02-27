import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import onlinestudent from "./onlinestudent.jpeg";

export default function About() {
  return (
    <Box className="aboutbox" >
      <Card sx={{ maxWidth: 450 }}>
        <CardMedia
          component="img"
          height="250"
          className="aboutimg"
          image={onlinestudent}
          alt="contact"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            1️⃣ This Web Application is created completely for the students
            benefits. 👨🏻‍💻
            <br />
            2️⃣Students Now a days carries a lot of weights in their back 🤧
            <br />
            3️⃣In order to reduce that we create a small step towards the
            peaceful journey to the school without weights💃🏻
            <br /> 4️⃣Here you can submit your assignments without using any
            papers and pens but only through internet.🤟🏻
            <br /> 5️⃣And the teachers won't reduce your marks for the hand
            writings .😉
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

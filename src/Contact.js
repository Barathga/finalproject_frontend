import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import contactonline from "./contactonline.jpeg";

function Contact() {
  return (
    <Box className="contactbox" >
      <Card sx={{ maxWidth: 400, float: "left", m: 4 }}>
        <CardMedia
          component="img"
          height="140"
          image={contactonline}
          alt="Contact"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            If you face any issues regarding login's, sign ups, or managing your
            tasks, you can contact the customer care team via call or Online
            task submission portal email ID. Connect with Online task submission
            customer care executives by calling on ☎️ 022 6144 5050.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Contact;

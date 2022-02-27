import React from "react";
import { Box } from "@mui/system";

function Task() {
  return (
    <Box className="taskcard">
      <form >
        <h1>Task Submission</h1>
        <input type ='text' placeholder="Task Name"/><br/> <br/>
        <input type ='number' placeholder="Submitted On"/><br/> <br/>
        <input type ='text' placeholder="Task Name"/><br/> <br/>
        <input type="file"/><br/> <br/>
        <button type="submit">Upload</button>
      </form>
    </Box>
  );
}

export default Task;

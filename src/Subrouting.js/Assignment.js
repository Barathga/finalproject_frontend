import React , {useEffect, useState} from "react";
import axios from "axios";
// import { Card } from "@mui/material";


function Assignment() {
    const[data, setData] = useState([])
useEffect(() => {
    const loadData = async () => {
      let response = await axios.get(
        "http://localhost:8000/task1"
      );
      setData(response.data);
    };
    loadData();
  }, []);
  console.log(data)
  return (
    <div className='assignmentrouter'>
        <div>
            {data.map(taskupdate=>(
                
                <div className="update">
                    <div>
                    Student Id: {taskupdate.studentid}
                    </div>
                    <div>
                    Task Name: {taskupdate.taskName}
                    </div>
                    <div>
                    Subject Name: {taskupdate.subjectName}
                    </div>
                    <div>
                    Date: {taskupdate.submittedOn}
                    </div>
                </div>
               
            ))}
        </div>
    </div>
  )
}

export default Assignment


// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Barathga/new-frontend-project.git
// git push -u origin main
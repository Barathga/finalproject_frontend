import React from "react";
import { Formik } from "formik";
import Box from "@mui/material/Box";
import axios from "axios";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


function Signin() {
  const navigate = useNavigate();
  const initialValue = {
    studentName: "",
    studentId: "",
    year: "",
    email: "",
    role: "",
    password: "",
    course: "",
  };
  const validate = (value) => {
    var errors = {};
    if (value.studentName === "")
      errors.studentName = "student Name is Required";
    if (value.studentId === "") errors.studentId = "student id is Required";
    if (value.year === "") errors.year = "year is Required";
    if (value.email === "") errors.email = "email is Required";
    if (value.role === "") errors.role = "role is Required";
    if (value.password === "") errors.password = "password is Required";
    if (value.course === "") errors.course = "course is Required";

    return errors;
  };

  const handleSubmit = async (value) => {
    console.log(value);
    try {
      var response = await axios.post("http://localhost:3001/signin", {
        student_Name: value.studentName,
        student_Id: value.studentId,
        year: value.year,
        email: value.email,
        role: value.role,
        password: value.password,
        course: value.course,
      });
      if (response.data) {
        await localStorage.setItem("token", response.data);
        navigate("/Studentspage");
      }
      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert("Invalid User Information");
    }
  };

 
  console.log(initialValue);
  return (
    <Box className="signinbox">
      <h3>SIGN IN PAGE</h3>
      <Formik
        initialValues={initialValue}
        validate={(value) => validate(value)}
        onSubmit={(value) => handleSubmit(value)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                id="outlined-basic"
                label="Student Name"
                variant="outlined"
                value={values.studentName}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="studentName"
              />
              <br />
              <span style={{ color: "red" }}>
                {" "}
                {touched.studentName && errors.studentName}{" "}
              </span>
            </div>
            <br />
            <div>
              <TextField
                id="outlined-basic"
                label="Student Id"
                variant="outlined"
                value={values.studentId}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                name="studentId"
              />
              <br/>
              <span style={{ color: "red" }}>
                {" "}
                {touched.studentId && errors.studentId}{" "}
              </span>
            </div>
            <br/>

            <div>
              <FormControl sx={{ m: 1, minWidth: 185 }}>
                <InputLabel>Year</InputLabel>
                <Select
                  label="Year"
                  id="outlined-basic"
                  variant="outlined"
                  name="year"
                  value={values.year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="1st">1st YEAR</MenuItem>
                  <MenuItem value="2nd">2nd YEAR</MenuItem>
                  <MenuItem value="3rd">3rd YEAR</MenuItem>
                  <MenuItem value="4th">4th YEAR</MenuItem>
                </Select>
              </FormControl>
            </div>
            <span style={{ color: "red" }}>{" "}{touched.year && errors.year}{" "}</span>
            <br/>

            <div>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                name="email"
              />
              <br />
              <span style={{ color: "red" }}>{" "}{touched.email && errors.email}{" "}</span> 
            </div>
            <br/>

            <div>
              <TextField
                id="outlined-basic"
                label="Role"
                variant="outlined"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="role"
              />
              <br />
              <span style={{ color: "red" }}>{" "}{touched.role && errors.role}{" "}</span>

            </div>
            <br />

            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="password"
              />
              <br />
              <span style={{ color: "red" }}>
                {" "}
                {touched.password && errors.password}{" "}
              </span>
            </div>
            <br />

            <div>
              <FormControl sx={{ m: 1, minWidth: 185 }}>
                <InputLabel>Course</InputLabel>
                <Select
                  label="Course"
                  id="outlined-basic"
                  variant="outlined"
                  name="course"
                  value={values.course}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="1st">React</MenuItem>
                  <MenuItem value="2nd">Node</MenuItem>
                  <MenuItem value="3rd">Express</MenuItem>
                  <MenuItem value="4th">Mongo</MenuItem>
                </Select>
              </FormControl>
            </div>
            <span style={{ color: "red" }}>{" "}{touched.course && errors.course}{" "}</span>
            <br />

            <button type="submit"> SIGN IN </button> &nbsp;
          </form>
        )}
      </Formik>
    </Box>
  );
}
export default Signin;

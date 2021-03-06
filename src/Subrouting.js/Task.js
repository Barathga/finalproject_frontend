import { Formik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";


export default function Task() {

  const initialValue = {
    studentid: "",
    taskName: "",
    subjectName: "",
    submittedOn: "",
    chooseFile: "",
  };
  const validate = (value) => {
    var errors = {};
    if (value.studentid === "") errors.studentid = "Id Required";
    if (value.taskName === "") errors.taskName = "Task Name Required";
    if (value.subjectName === "") errors.subjectName = "Subject Required";
    if (value.submittedOn === "") errors.submittedOn = "Date Required";
    return errors;
  };
  const handleSubmit = async (value) => {
    console.log(value);
    try {
      var response = await axios.post("https://final-backend01.herokuapp.com/task", {
        studentid: value.studentid,
        taskName: value.taskName,
        subjectName: value.subjectName,
        submittedOn: value.submittedOn,
      });
      if (response.data) {
        await localStorage.setItem("token", response.data);
      }
      console.log(response.data);
      Swal.fire(
        "Successfully Submitted!! View it in the Assignment page",
        "success"
      );
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have already submitted!",
      });
    }
  };

  const handleReset = () => {
    initialValue.studentid = "";
    initialValue.taskName = "";
    initialValue.subjectName = "";
    initialValue.submittedOn = "";
  };

  

  return (
    <div className="taskcard">
      <Formik
        initialValues={initialValue}
        validate={(value) => validate(value)}
        onSubmit={(value) => handleSubmit(value)}
        onReset={(value) => handleReset(value)}
        // onChange={(value)=> handleChange(value)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* -----------------------student ID--------------- */}
            
            <div>
              <input
                type="text"
                name="studentid"
                placeholder="Student ID"
                size={50}
                value={values.studentid}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <br />
              <span style={{ color: "white" }}>
                {touched.studentid && errors.studentid}{" "}
              </span>
            </div>
            <br />
            {/* -----------------taskname-------------- */}

            <div>
              <input
                type="text"
                name="taskName"
                placeholder="Task Name"
                size={50}
                value={values.taskName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <br />
              <span style={{ color: "white" }}>
                {touched.taskName && errors.taskName}{" "}
              </span>
            </div>
            <br />

            {/* -------------------subjectname------------- */}

            <div>
              <input
                type="text"
                name="subjectName"
                size={50}
                placeholder="Subject Name"
                value={values.subjectName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <br />
              <span style={{ color: "white" }}>
                {touched.subjectName && errors.subjectName}{" "}
              </span>
            </div>
            <br />

            {/* -----------------------submitted on---------------- */}

            <div>
              <input
                type="date"
                name="submittedOn"
                size={50}
                placeholder="Date"
                value={values.submittedOn}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <br />

            {/* ----------------------------choosefile----------------------- */}

            <div>
              <input type="file" />
            </div>
            <br />

            {/* --------------submit button------------- */}

            <button type="submit"> Submit </button>
            <br />
            <br />
            {/* ----------------reset button------------- */}

            <button type="button" onClick={resetForm}>
              {" "}
              Reset{" "}
            </button>

          </form>
        )}
      </Formik>
       









    </div>
  );
}


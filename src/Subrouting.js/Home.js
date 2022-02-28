import React from "react";
import college from "./college.png";
import tlclogo from "./TLClogo.png";

function Home() {
  return (
    <div className="homepage">
      <div>
        <img className="collegeimg" src={college} alt="pic" />
      </div>
      <div>
        <img className="tlcimg" src={tlclogo} alt="pic" />
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import persons from "./persons.png";
import trophy from "./trophy.png";

const RightImage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col ">
          <img src={trophy} height="auto" width="300px" className='img-fluid' alt="Trophy" />
        </div>
        <div className="col ">
          <img src={persons} height="300px" width="auto" className='img-fluid' alt="Persons" />
          <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
        
      </div>
    </div>
  );
}

export default RightImage;

import React from 'react';
import persons from "../../asset/persons.png";
import trophy from "../../asset/trophy.png";

const RightImage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-6 mb-3 mb-md-0">
          <img src={trophy} className='' style={{ marginTop: '-5.75rem', width:'400px' }} alt="Trophy" />
        </div>
        <div className="col-3"></div>
        <div className="col-lg-6 col-md-12">
          <img src={persons} className='img-fluid mb-3' alt="Persons" />
          <p>Government of India has awarded the <span className="fw-bold">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
    </div>
  );
}

export default RightImage;

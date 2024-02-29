import React from 'react';
import DownImgIcons from './DownImgIcons.png';

const DownImgText = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="fw-bold">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <div className="d-flex justify-content-center">
              <img src={DownImgIcons} height="500px" width="auto" className='img-fluid' alt="Trophy" />
            </div>
            <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
          </div>
        </div>
      </div>
      
    );
}

export default DownImgText;
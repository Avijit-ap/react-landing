import React from 'react';
import DownImgIcons from '../../asset/DownImgIcons.png';

const DownImgText = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="fw-bold mt-3">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
            <div className="d-flex justify-content-center">
              <img src={DownImgIcons} height="500px" width="auto" className='img-fluid' alt="Trophy" />
            </div>
            <p className="mt-4" style={{ fontWeight: 600 }}>
            CHEMICALS | PROCESS | POWER | WATER | WASTE | WATER | OILS | GAS | PHARMA | SUGARS | DISTILLERIES | PAPER | PULP | MARINE | DEFENCE | METAL | MINING | FOOD | BEVERAGE | PETROCHEMICAL | REFINERIES | SOLAR | BUILDING | HVAC | FIRE | FIGHTING | AGRICULTURE | RESIDENTIAL</p>
          </div>
        </div>
      </div>

    );
}

export default DownImgText;
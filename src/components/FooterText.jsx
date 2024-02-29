import React from 'react';

const FooterText = () => {
  return (
    <footer className="bg-danger py-5">
      <div className="container">
        <section className="row justify-content-center align-items-center">
          {/* Facebook */}
          <div className="col-sm-auto">
            <i className="fab fa-facebook-f" style={{ color: '#fafafa' }}></i>
            <span className="ms-2" style={{ color: 'white', textDecoration: 'none' }}>www.facebook.com/cripumps</span> {/* Facebook text */}
          </div>

          {/* Phone */}
          <div className="col-sm-auto">
            <i className="fas fa-phone" style={{ color: '#ffffff' }}></i>
            <span className="ms-2" style={{ color: 'white', textDecoration: 'none' }}>Toll free 1800 200 1234</span> {/* Phone text */}
          </div>

          {/* Globe */}
          <div className="col-sm-auto">
            <i className="fa fa-globe" aria-hidden="true" style={{ color: 'white' }}></i>
            <span className="ms-2" style={{ color: 'white', textDecoration: 'none' }}>www.crigroups.com</span> {/* Globe text */}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default FooterText;

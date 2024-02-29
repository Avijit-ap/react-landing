import React from 'react';

const FooterText = () => {
  return (
  <div className="text-center fw-bold">
    <p>
      C.R.L. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
    </p>
    <footer className="text-center bg-danger">
      {/* Grid container */}
      <div className="container">
        {/* Section: Social media */}
        <section className="mb-4 d-flex justify-content-evenly align-items-top">
          {/* Facebook */}
          <div>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-body m-1"
              role="button"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" style={{ color: '#fafafa' }}></i>
            </a>
          </div>

          {/* Phone */}
          <div>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-body m-1"
              role="button"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              <i className="fas fa-phone" style={{ color: '#ffffff' }}></i>
            </a>
          </div>

          {/* Globe */}
          <div>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-body m-1"
              role="button"
              data-mdb-ripple-init
              data-mdb-ripple-color="dark"
            >
              <i className="fa fa-globe" aria-hidden="true" style={{ color: 'white' }}></i>
            </a>
          </div>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
    </footer>
  </div>  );
};

export default FooterText;

import React from "react";
import Analytics from "../components/Analytics";
import ds from "../store/services_api";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>India's most trusted site for maid's need</p>
              <h1>Welcome To Maid At Home</h1>
              <p>
                We aim to provide you with complete range of house help manpower, which is needed to run your house smoothly. Our maids are experienced, verified and trustworthy. We give solutions for all your household needs, whether it is hiring a 24 hours maid service or a house-servant staff, a babysitter, nanny, or Japa maid services, a bollywood house maid, a cook or chef, aged caretaker, patient care, or a nurse.

              </p>
              <br />
              <p>To know how Maid At Home Works click on Learn More button</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now with us</button>
                </a>
                <a href="/about">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home3.jpeg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />
      {/* 3rd section  */}
      <section className="section-services">
        <h1 className="st_cen">Our Services</h1>
        <div className="container grid grid-three-cols">
          {
            ds.map((curEle, index) => {
              const { heading, description, img_link } = curEle;

              return (
                <div className="card">
                  <div className="card-img">
                    <img src={img_link} alt="our services" width="100" />
                  </div>
                  <div className="card-details">
                    <div className="grid grid-two-cols">
                      <h2>{heading}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    </>
  );
};

export default Home;

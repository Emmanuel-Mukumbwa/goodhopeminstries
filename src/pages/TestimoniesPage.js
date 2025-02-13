import React from 'react';
import Navbar from '../pages/Navbar';
import './TestimoniesPage.css';

function TestimoniesPage() {
  return (
    <div className="TestimoniesPage">
      <Navbar />
      <div className="container my-5">
        {/* Section 1 - Children */}
        <section className="testimony-section my-5">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-6 order-md-1">
              <h3>Children are saying:</h3>
              <p>"My dad has stopped drinking beer."</p>
              <p>"My dad is now buying us food."</p>
              <p>"My dad no longer beats my mom."</p>
            </div>
            {/* Image Column */}
            <div className="col-md-6 order-md-2">
              <img
                src="/testimony1.jpg"
                alt="Testimony 1"
                className="img-fluid testimony-image"
              />
            </div>
          </div>
        </section>

        {/* Section 2 - Women */}
        <section className="testimony-section my-5">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-md-6 order-md-1">
              <img
                src="/testimony2.jpg"
                alt="Testimony 2"
                className="img-fluid testimony-image"
              />
            </div>
            {/* Text Column */}
            <div className="col-md-6 order-md-2">
              <h3>Women everywhere are saying:</h3>
              <p>"I don't have to hide in the bushes when my dad comes home."</p>
              <p>"There is now peace in our home."</p>
              <p>"My husband now chats with me."</p>
              <p>"We are SO happy together."</p>
              <p>"Thank you so much for saving our marriage and our family."</p>
            </div>
          </div>
        </section>

        {/* Section 3 - Men */}
        <section className="testimony-section my-5">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-6 order-md-1">
              <h3>Men tell us:</h3>
              <p>
                "We didn't know we were the cause of our family's poverty. We are
                sorry for treating our wives so badly."
              </p>
              <p>
                <strong>Then they proudly add:</strong>
              </p>
              <p>"We are buying farm tools and fertilizer and blankets."</p>
            </div>
            {/* Image Column */}
            <div className="col-md-6 order-md-2">
              <img
                src="/testimony3.jpg"
                alt="Testimony 3"
                className="img-fluid testimony-image"
              />
            </div>
          </div>
        </section>

        {/* Section 4 - Chiefs */}
        <section className="testimony-section my-5">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-md-6 order-md-1">
              <img
                src="/testimony4.jpg"
                alt="Testimony 4"
                className="img-fluid testimony-image"
              />
            </div>
            {/* Text Column */}
            <div className="col-md-6 order-md-2">
              <h3>Chiefs are seeing their villages transformed:</h3>
              <p>"Our village is building a school."</p>
              <p>"Our village has built a dam for our cattle to drink from."</p>
              <p>
                "Our village has totally changed since your coming. We were living in
                a world of fear, but now we can choose to live God's way."
              </p>
              <p>
                "I am very happy to see the borehole working again. My people had been
                walking 2 km to only fetch bad water. Now we are free from water borne
                diseases."
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Pastors and Church Leaders */}
        <section className="testimony-section my-5">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-6 order-md-1">
              <h3>Pastors and Church Leaders are excited:</h3>
              <p>"More and more people are coming to church now."</p>
              <p>"People can now read God's word for themselves."</p>
              <p>
                "Thank you for the Bibles and the Bible lessons. We can now teach the
                truth."
              </p>
              <p>
                <strong>ALL GLORY BE TO GOD!</strong>
              </p>
            </div>
            {/* Image Column */}
            <div className="col-md-6 order-md-2">
              <img
                src="/testimony5.jpg"
                alt="Testimony 5"
                className="img-fluid testimony-image"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TestimoniesPage;

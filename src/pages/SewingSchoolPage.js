import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import './SewingSchoolPage.css';

function SewingSchoolPage() {
  return (
    <div className="SewingSchoolPage">
      <Navbar />
      <div className="container my-5">
        <header className="mb-5 text-center">
          <h2>WELCOME TO OUR SEWING SCHOOL</h2>
        </header>

        {/* Section 1 */}
        <section className="sewing-section my-5">
          <div className="row align-items-center">
            {/* Text on left */}
            <div className="col-md-6 order-md-1">
              <p>
                Good Hope Ministries started a sewing program in 2016 where we teach abused women, single moms, and prostitutes who want to change.
              </p>
            </div>
            {/* Image on right */}
            <div className="col-md-6 order-md-2">
              <img src="/sewing1.jpg" alt="Sewing 1" className="img-fluid sewing-img" />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="sewing-section my-5">
          <div className="row align-items-center">
            {/* Image on left */}
            <div className="col-md-6 order-md-1">
              <img src="/sewing2.jpg" alt="Sewing 2" className="img-fluid sewing-img" />
            </div>
            {/* Text on right */}
            <div className="col-md-6 order-md-2">
              <p>
                We started three sewing classes but now have two classes. Each starts with a Bible lesson followed by 2 1/2 hours of sewing. Every six months, about 60 women graduated and now 40 women graduate. Those who pass receive two certificates—one for finishing the GBL study book (Great Bible Lessons) and another for sewing that will hopefully give them employment or provide an opportunity to be self-employed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="sewing-section my-5">
          <div className="row align-items-center">
            {/* Text on left */}
            <div className="col-md-6 order-md-1">
              <p>
                Our program reaches out to prostitutes and young girls who have dropped out of school. Prostitution is huge. So many are just plain desperate—it’s their only way of making a living. We teach them and offer an alternative way to make a living. Even though this is a tough ministry, many girls’ lives have been totally changed. Here is a testimony from Tiwonge:
              </p>
            </div>
            {/* Image on right */}
            <div className="col-md-6 order-md-2">
              <img src="/sewing3.jpg" alt="Sewing 3" className="img-fluid sewing-img" />
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="sewing-section my-5">
          <div className="row align-items-center">
            {/* Image on left */}
            <div className="col-md-6 order-md-1">
              <img src="/sewing4.jpg" alt="Sewing 4" className="img-fluid sewing-img" />
            </div>
            {/* Text on right */}
            <div className="col-md-6 order-md-2">
              <p>
                Tiwonge is one of the girls identified by our team that reaches out to prostitutes. These girls are from Karonga, up north, and came to Mzuzu to do prostitution. When they were taken to attend our sewing classes, Tiwonge was so excited because she said this was her dream since she was young. She never thought she would one day actually learn to sew for free.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="sewing-section my-5">
          <div className="row align-items-center">
            {/* Text on left */}
            <div className="col-md-6 order-md-1">
              <p>
                Tiwonge told us, “When I was impregnated and gave birth to my son, my parents lost hope in me. They told me that they were not going to pay my school fees nor support me in any way. I then ventured into this dubious behavior of going out with married men.” She continues, “Each time you are chased from home, you feel it’s the end of your world. This is how I was feeling until Catherine introduced us to your sewing school. I now believe that truly, Jesus loves every person including sinners like me and my friends.”
              </p>
            </div>
            {/* Image on right */}
            <div className="col-md-6 order-md-2">
              <img src="/sewing5.jpg" alt="Sewing 5" className="img-fluid sewing-img" />
            </div>
          </div>
        </section>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default SewingSchoolPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import './AboutPage.css';

function AboutPage() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="AboutPage">
      {/* Navigation */}
      <Navbar />
      {/* Images Section */}
      <section className="about-images container my-5">
      <header className="mb-5 text-center">
          <h2>ABOUT US</h2>
        </header>
        <div className="about-images-wrapper">
          {/* Left Column: Main Team Image (clickable) */}
          <div className="main-image" onClick={() => openModal("/team.jpg")}>
            <img src="/team.jpg" alt="Our Team" className="team-main-image" />
          </div>

          {/* Right Column: Grid of Sub Images */}
          <div className="sub-images">
            <div className="sub-images-grid">
              <div className="sub-image-item" onClick={() => openModal("/teaching.jpg")}>
                <img src="/teaching.jpg" alt="Teaching" className="about-sub-image" />
              </div>
              <div className="sub-image-item" onClick={() => openModal("/office.jpg")}>
                <img src="/office.jpg" alt="Office" className="about-sub-image" />
              </div>
              <div className="sub-image-item" onClick={() => openModal("/cars.jpg")}>
                <img src="/cars.jpg" alt="Cars" className="about-sub-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Details & Description */}
      <section className="about-details container my-5">
        <div className="founding-details mb-4">
          <h2>Good Hope Ministries</h2>
          <ul>
            <li>Founded in 2001 by Joe &amp; Anna Ebert</li>
            <li>Works with the Tumbuka people in every village in northern Malawi</li>
            <li>Home base is in Luwinga, Mzuzu</li>
            <li>Office in Canada is located in London, ON, Canada</li>
          </ul>
        </div>

        <div className="detailed-description">
          <p>
            Good Hope Ministries is a holistic ministry committed to improving the lives of the Tumbuka people in northern Malawi through sharing God's word and showing God's love in many practical ways so they will trust us and receive the message we bring. In doing so, that God can be glorified through it all.
          </p>
          <p>
            Our team of nationals teach and train the people in ways they can treasure what they have learned to better their living conditions and so give themselves Good Hope for the future here and for all of eternity.
          </p>
          <h3>GOOD HOPE MINISTRIES AT A GLANCE</h3>
          <p>
            GHM has 6 teams, each responsible for one district in northern Malawi to oversee all our programs there. During the visits to the villages, the team continue to train new Bible Study Group coaches and leaders for adults, youth and children. There are now over 7,000 established groups in most villages in the north, with over 200,000 attending. To God be the glory!
          </p>
          <p>
            Giving New Testaments to all who attend the Bible Study groups at least 10 times. We are limited to 12,000 per year and wishing we had more to give away. So far over 340,000 NTs have been distributed.
          </p>
          <p>
            Distributing Bible Lessons to anyone with the desire to study God's word from young to old. Last year 170,000 books were distributed.
          </p>
          <p>
            Teach men to provide, protect and love their wives and children God's way and teach women, youth, and children their roles — God's way as well.
          </p>
          <p>
            Showing the ‘JESUS’ film—a 2-hour film on the life of Christ in villages they go to. Over 2 million people have seen the film.
          </p>
          <p>
            Repairing broken boreholes (wells) and treating 250,000 people with skin issues such as ringworm, scabies, and sores over the years.
          </p>
          <p>
            Visiting all 6 prisons in the north to teach Bible Study groups; those who attend are given a free lunch once a month—"It's like Christmas."
          </p>
          <p>
            Distributing reading glasses in all the villages to everyone in need.
          </p>
          <p>
            Providing protection for the abused of all ages through our Protecting Our Children program.
          </p>
          <p>
            Establishing thousands of Children's Bible Clubs where children learn that Jesus loves them and is always with them. These clubs become a family and a place where they belong.
          </p>
          <p>
            Teaching youth lessons like "Why Am I Here on Earth?" gives them purpose in life, helping reduce suicides and empowering them to help others.
          </p>
          <p>
            Our goal is to reach all 2,100,000 Tumbuka people living in northern Malawi.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modal for Expanded Image */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Expanded view" />
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutPage;
